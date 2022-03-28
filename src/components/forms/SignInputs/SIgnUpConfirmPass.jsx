/* eslint-disable react/jsx-no-bind */
import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

const SignUpConfirmPass = ({
  confirmPassword,
  touched,
  onChangeAccum,
  handleBlur,
  errors,
}) => (
  <TextField
    value={confirmPassword}
    id='confirmPassword'
    name='confirmPassword'
    required
    fullWidth
    label='Confirm Password'
    type='password'
    error={touched.confirmPassword && Boolean(errors.confirmPassword)}
    helperText={touched.confirmPassword && errors.confirmPassword}
    onChange={onChangeAccum.bind(null, 'confirmPassword')}
    onBlur={handleBlur}
  />
);

export default SignUpConfirmPass;

SignUpConfirmPass.propTypes = {
  confirmPassword: PropTypes.string,
  touched: PropTypes.instanceOf(Object),
  onChangeAccum: PropTypes.func,
  handleBlur: PropTypes.func,
  errors: PropTypes.instanceOf(Object),
};

SignUpConfirmPass.defaultProps = {
  confirmPassword: 'confirmPassword',
  touched: {},
  onChangeAccum: 'onChangeAccum',
  handleBlur: 'handleBlur',
  errors: {},
};
