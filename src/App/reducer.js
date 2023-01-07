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
        loadingUsers: false,
        loadingNotes: false,
        error: action.payload
      }
    case 'CREATE_USER_REQUEST':
      return {
        ...state,
        createUserSuccess: null,
        creatingUsers: true,
        error: null
      }
    case 'CREATE_NOTE_REQUEST':
      return {
        ...state,
        createNoteSuccess: null,
        creatingNotes: true,
        error: null
      }
    case 'CREATE_USER_SUCCESS':
      return {
        ...state,
        createUserSuccess: action.payload,
        creatingUsers: false,
        error: null
      }
    case 'CREATE_NOTE_SUCCESS':
      return {
        ...state,
        createNoteSuccess: action.payload,
        creatingNotes: false,
        error: null
      }
    case 'CREATE_DATA_FAILED':
      return {
        creatingUsers: false,
        creatingNotes: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default reducer