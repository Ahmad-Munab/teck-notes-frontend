export const getUsersRequest = () => ({ type: "FETCH_USERS_REQUEST" })
export const getNotesRequest = () => ({ type: "FETCH_NOTES_REQUEST" })
export const getUsersSuccess = users => ({ type: "FETCH_USERS_SUCCESS", payload: users })
export const getNotesSuccess = notes => ({ type: "FETCH_NOTES_SUCCESS", payload: notes })
export const getDataFailed = error => ({ type: "FETCH_DATA_FAILED", payload: error })