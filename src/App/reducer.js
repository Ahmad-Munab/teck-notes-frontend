import initialStates from "./initialStates"

const reducer =  (state = initialStates, action) => {
  switch (action.type) {
    case 'FETCH_USERS_REQUEST':
      return {
        ...state,
        loadingUsers: true,
        error: null
      }
    case 'FETCH_NOTES_REQUEST':
      return {
        ...state,
        loadingNotes: true,
        error: null
      }
    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        users: action.payload,
        loadingUsers: false,
        error: null
      }
    case 'FETCH_NOTES_SUCCESS':
      return {
        ...state,
        notes: action.payload,
        loadingNotes: false,
        error: null
      }
    case 'FETCH_DATA_ERROR':
      return {
        data: [],
        isLoading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default reducer