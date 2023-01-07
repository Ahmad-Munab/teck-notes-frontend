import React, { useRef } from 'react'

import { useSelector, useDispatch } from "react-redux";
import { toast } from 'react-toastify';
import { createUser } from "../App/createData";

const CreateUsers = () => {
  const dispatch = useDispatch();
  const { creatingUser, createUserSuccess, error} = useSelector((state) => state.default)

  const name = useRef()
  const password = useRef()
  const active = useRef()
  const roles = useRef()

  function handleSubmission(e) {
      const nameValue = name.current.value
      const passwordValue = password.current.value
      let activeValue = active.current.value
      const rolesValue = roles.current.value

      e.preventDefault()
      if (!passwordValue ||!rolesValue ||!nameValue ) {
          toast.error("All fields are required!")
          return
      } else if (typeof activeValue !== 'undefined' && !["yes","no","true","false"].includes(activeValue)) {
          toast.error("Value for Active must be yes, no, true or false")
          return
      } 

      activeValue = activeValue === "true"? true : false
      dispatch(createUser(nameValue, passwordValue, rolesValue, activeValue))
  }

  return (
    <>
      <form onSubmit={handleSubmission} class="row col-12 gx-2 gy-2 m-0 mb-5 fs-6">
        <div className="col-12">
          <div className="input-group">
            <span class="input-group-text fw-semibold" id="basic-addon1">
              Name :
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Username"
              aria-describedby="basic-addon1"
              ref={name}
            />
          </div>
        </div>
        <div className="col-lg-7 col-12">
          <div className="input-group">
            <span class="input-group-text fw-semibold" id="basic-addon2">
              Password :
            </span>
            <input
              type="Password"
              class="form-control"
              placeholder="123abc..."
              aria-describedby="basic-addon2"
              ref={password}
            />
          </div>
        </div>
        <div className="col-lg-5 col-12">
          <div className="input-group">
            <span class="input-group-text fw-semibold" id="basic-addon3">
              Active :
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="[ optional ]"
              aria-describedby="basic-addon3"
              ref={active}
            />
          </div>
        </div>
        <div className="col-12 input-group">
          <div className="input-group">
            <span class="input-group-text fw-semibold" id="basic-addon4">
              Roles :
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Employee, Manager, Admin"
              aria-describedby="basic-addon4"
              ref={roles}
            />
            <button className="btn btn-primary fw-bold">Add User</button>
          </div>
        </div>
      </form>
      <h3>
          { createUserSuccess && JSON.stringify(createUserSuccess)}
          { creatingUser? "Creating User..." : null}
          {error && JSON.stringify(error)}
      </h3>
    </>
  )
}

export default CreateUsers