/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import { ERROR_MESSAGES } from './RestReceiver';
import { INFINITY_COUNTER } from './apiConstants';

const { getError, postError, putError, deleteError } = ERROR_MESSAGES;

const getUser = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_USERS,
});

const getNotes = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_NOTES,
});

function runGETusers(userId) {
  return getUser
    .get(`${userId}`)
    .then((resNotes) => resNotes.data)
    .catch((err) => new Error(getError));
}

function runGETInfinityNotes({ pageParam = 1 }) {
  return getNotes
    .get(`?_limit=${INFINITY_COUNTER}&_page=${pageParam}`)
    .then((resNotes) => resNotes)
    .catch((err) => new Error(getError));
}

function runPOSTuser(baseUrl, postData) {
  return getUser
    .post(baseUrl, postData)
    .then((resNotes) => resNotes.data)
    .catch((err) => new Error(postError));
}

function runNewPOST(baseUrl, postData) {
  return getNotes
    .post(baseUrl, postData)
    .then((resNotes) => resNotes.data)
    .catch((err) => new Error(postError));
}

function runUpdateUser(baseUrl, { ...updateUser }) {
  return axios
    .put(baseUrl, updateUser)
    .then((resNotes) => resNotes.data)
    .catch((err) => new Error(putError));
}

function runDELETEuser(baseUrl = '', id) {
  return getNotes
    .delete(`${baseUrl}/${id}`)
    .then((resNotes) => resNotes.data)
    .catch((err) => new Error(deleteError));
}

export {
  runGETusers,
  runPOSTuser,
  runUpdateUser,
  runDELETEuser,
  runGETInfinityNotes,
  runNewPOST,
};
