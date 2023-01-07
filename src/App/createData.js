import { toast } from 'react-toastify';

import axios from 'axios';


const API_BASE = process.env.API_BASE || 'https://technotes.adaptable.app';

const { createUserRequest, createNoteRequest, createDataFailed, createUserSuccess, createNoteSuccess } =  require('./actions')


export const createUser = (username, password, roles, active) => async dispatch => {
  toast.promise(
    new Promise(async (resolve, reject) => {
      dispatch(createUserRequest());
      try {
        roles = [roles]
        const response = await axios.post(API_BASE + "/users", {
          username,
          password,
          roles
        });
        const data = response.data;
        console.log(response);
        dispatch(createUserSuccess(data));
        resolve();
      } catch (error) {
        if (error.response.status === 400 && error.response.data) {
          dispatch(createUserSuccess(error.response.data));
        } else {
          console.log(error);
          dispatch(createDataFailed(error));
          reject(error);
        }
      }
    }),
    {
      pending: "Creating user..",
      success: "User created successfully.",
      error: "Error creating user",
    }
  );
};




export const createNote = (user, title, text, completed) => async dispatch => {
    toast.promise(
      new Promise(async (resolve, reject) => {
        dispatch(createNoteRequest());
        try {
          const response = await axios.post(API_BASE + "/notes", {
            user,
            title,
            text,
            completed
          });
          const data = response.data;
          console.log(response);
          dispatch(createNoteSuccess(data));
          resolve();
        } catch (error) {
          console.log(error);
          dispatch(createDataFailed(error));
          reject(error);
        }
      }),
      {
        pending: "Creating note..",
        success: "Note created successfully.",
        error: "Error creating note",
      }
    )
  };