import React, { useRef } from 'react'

import { useSelector, useDispatch } from "react-redux";
import { toast } from 'react-toastify';
import { createNote } from "../App/createData";


const CreateNotes = () => {
    const dispatch = useDispatch();
    const { creatingNote, createNoteSuccess, error} = useSelector((state) => state.default)

    const user = useRef()
    const title = useRef()
    const completed = useRef()
    const description = useRef()

    function handleSubmission(e) {
        const userValue = user.current.value
        const titleValue = title.current.value
        let completedValue = completed.current.value
        const descriptionValue = description.current.value

        e.preventDefault()
        if (!titleValue ||!descriptionValue ||!userValue ) {
            toast.error("All fields are required!")
            return
        } else if (typeof completedValue !== 'undefined' && !["yes","no","true","false"].includes(completedValue)) {
            toast.error("Value for Completed must be yes, no, true or false")
            return
        } 

        completedValue = completedValue === "true"? true : false
        dispatch(createNote(userValue, titleValue, descriptionValue, completedValue))
    }

  return (
    <>
        <form onSubmit={handleSubmission} class="row col-12 gx-2 gy-2 m-0 mb-1 fs-6">
            <div className="col-12">
                <div className="input-group">
                    <span class="input-group-text fw-semibold" id="basic-addon1">
                    User :
                    </span>
                    <input
                    type="text"
                    class="form-control"
                    placeholder="UserID"
                    aria-describedby="basic-addon1"
                    ref={user}
                    />
                </div>
            </div>
            <div className="col-lg-7 col-12">
                <div className="input-group">
                    <span class="input-group-text fw-semibold" id="basic-addon2">
                    Title :
                    </span>
                    <input
                    type="text"
                    class="form-control"
                    placeholder="Fix the ..."
                    aria-describedby="basic-addon2"
                    ref={title}
                    />
                </div>
            </div>
            <div className="col-lg-5 col-12">
                <div className="input-group">
                    <span class="input-group-text fw-semibold" id="basic-addon3">
                    Completed :
                    </span>
                    <input
                    type="text"
                    class="form-control"
                    placeholder="[ optional ]"
                    aria-describedby="basic-addon3"
                    ref={completed}
                    />
                </div>
            </div>
            <div className="col-12 input-group">
                <span class="input-group-text fw-semibold" id="basic-addon4">
                    Description :
                </span>
                <input
                    type="text"
                    class="form-control"
                    placeholder="Descibe Note"
                    aria-describedby="basic-addon4"
                    ref={description}
                />
                <button className="btn btn-primary fw-bold" type='submit'>Add Note</button>
            </div>
        </form>
        <h3>
            { createNoteSuccess && JSON.stringify(createNoteSuccess)}
            { creatingNote? "Creating Note..." : null}
            {error && JSON.stringify(error)}
        </h3>
    </>
  )
}

export default CreateNotes