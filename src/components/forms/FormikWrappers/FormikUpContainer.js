/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Container } from '@material-ui/core';
import { useMutation } from 'react-query';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { isValid } from 'date-fns';
import SignUp from '../SignUp';
import {
  validationSchema,
  IS_SIGN_UP,
  SET_SIGNUP_ERROR,
  ERROR_MESSAGES,
  runPOSTuser,
  USERS_URL,
  initSignUpvalue,
  signIn,
  useQueryWrapper,
  GetUsersSignUp,
} from '../formsReceiver';

const FormikUp = () => {
  const dispatch = useDispatch();
  const navToAuth = useNavigate();
  const { hasAlready } = ERROR_MESSAGES;
  const MIN_ARR_LENGTH = 1;
  const userPath = process.env.REACT_APP_BACKEND_USERS;

  const { isLoading, error, data, isFetching } = useQueryWrapper(
    GetUsersSignUp,
    USERS_URL
  );

  const useNewNoteWrapper = (keyName, baseURL) =>
    useMutation((newNote) => runPOSTuser(baseURL, newNote), {
      mutationKey: keyName,
      onSuccess: () => {
        navToAuth(signIn);
        dispatch(IS_SIGN_UP(true));
      },
    });

  const { mutateAsync } = useNewNoteWrapper();

  const formik = useFormik({
    initialValues: initSignUpvalue,
    validationSchema,
    onSubmit: (values, actions) => {
      const existUser = data.filter((users) => users.email === values.email);
      if (existUser.length === MIN_ARR_LENGTH) {
        dispatch(SET_SIGNUP_ERROR(true));
      }
      if (existUser.length < MIN_ARR_LENGTH) {
        dispatch(SET_SIGNUP_ERROR(false));
        mutateAsync(values);
        actions.resetForm();
      }
    },
  });

  return (
    <Container>
      <SignUp
        formik={formik}
        hasAlready={hasAlready}
        error={error}
        isLoading={isLoading}
        isFetching={isFetching}
        querryData={data}
      />
    </Container>
  );
};

export default FormikUp;
