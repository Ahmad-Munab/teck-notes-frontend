import axios from 'axios';
const  { getUsersRequest, getNotesRequest, getDataFailed, getUsersSuccess, getNotesSuccess } =  require('./actions')

const API_BASE = process.env.API_BASE || 'https://technotes.adaptable.app'


export const fetchUsers = () => async dispatch => {
    dispatch(getUsersRequest())
    try {
      const response = await axios.get(API_BASE + "/users")
      const data = response.data
      console.log(`Users: ${data}`)
      dispatch(getUsersSuccess(data))
    } catch (error) {
      if (error.response.status === 404 && error.response.data) {
        dispatch(getUsersSuccess(error.response.data))
      } else {
        console.log(error)
        dispatch(getDataFailed(error))
      } 
      console.log(error)
      
    }
  }

export const fetchNotes = () => async dispatch => {
    dispatch(getNotesRequest())
    try {
      const response = await axios.get(API_BASE + "/notes")
      const data = response.data
      console.log(`Notes: ${data}`)
      dispatch(getNotesSuccess(data))
    } catch (error) {
      if (error.response.status === 404 && error.response.data) {
        dispatch(getNotesSuccess(error.response.data))
      } else {
        console.log(error)
        dispatch(getDataFailed(error))
      } 
    }
}