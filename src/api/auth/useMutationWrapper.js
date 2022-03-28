/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useMutation } from 'react-query';
import {
  runPOSTuser,
  runUpdateUser,
  runDELETEuser,
  runNewPOST,
} from '../_RESTClient/RESTApi';

const usePostWrapper = (keyName, baseUrl) =>
  useMutation((newNote) => runPOSTuser(baseUrl, newNote), {
    mutationKey: keyName,
  });

const useNewNoteWrapper = (keyName, baseURL) =>
  useMutation((newNote) => runNewPOST(baseURL, newNote), {
    mutationKey: keyName,
  });

const useDeleteWrapper = (keyName, baseUrl) =>
  useMutation((id) => runDELETEuser(baseUrl, id), {
    mutationKey: keyName,
  });

const useUpdateWrapper = (keyName, baseUrl) =>
  useMutation((id) => runUpdateUser(baseUrl, id), {
    mutationKey: keyName,
  });

export {
  usePostWrapper,
  useDeleteWrapper,
  useUpdateWrapper,
  useNewNoteWrapper,
};
