const initialStates = {
    users: { message: "Load Users" },
    notes: { message: "Load Notes" },
    loadingUsers: false,
    loadingNotes: false,
    creatingUser: false,
    creatingNote: false,
    createUserSuccess: null,
    createNoteSuccess: null,
    error: null
  }

export default initialStates