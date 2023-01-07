import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, fetchNotes } from "./App/fetchData";
import { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateUsers  from "./components/CreateUsers";
import CreateNotes  from "./components/CreateNotes";

function App() {
  const { users, notes, loadingUsers, loadingNotes } = useSelector(
    (state) => state.default
  );
  const dispatch = useDispatch();

  const [usersEditMode, setUsersEditMode] = useState(false);
  const [notesEditMode, setNotesEditMode] = useState(false);
  const [usersCreateMode, setUsersCreateMode] = useState(false);
  const [notesCreateMode, setNotesCreateMode] = useState(false);

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchNotes());
  }, [dispatch]);

  return (
    <div className="app text-center">
      <main class="container-sm mt-5 px-2">
        <header className="row">
          <h1 className="text-center">React-Redux Testing</h1>
        </header>
        <div class="row gy-5 mt-2">
          <div class="col-lg-6 mb-1">
            <div className="btn-group mb-3">
              <button
                className="btn btn-primary fw-semibold"
                onClick={() => dispatch(fetchUsers())}
              >
                Fetch Users
              </button>
              <button
                className="btn btn-primary fw-semibold"
                onClick={() => {
                  setUsersEditMode(!usersEditMode);
                  !usersEditMode &&
                    toast.info("Editing Users", {
                      autoClose: 2000,
                      theme: "light",
                    });
                }}
                style={{ textDecoration: "underline" }}
              >
                {usersEditMode ? "Done" : "Edit Users"}
              </button>
            </div>
            <div className="text-center shadow rounded p-3">
              {loadingUsers ? "Loading Users..." : null}
              {(users?.length > 0 || typeof users === "object") &
              !loadingUsers ? (
                Array.isArray(users) & (users.length > 0) ? (
                  <ul className="m-0 p-0">
                    {users.map((user, i) => {
                      return (
                        <li
                          key={user._id}
                          className="d-flex justify-content-between"
                          style={{ whiteSpace: "pre" }}
                        >
                          {`${i + 1}|   ${user.username}:`}
                          <span>{user.roles.join(", ")}</span>{" "}
                          {user.active ? (
                            <span className="text-success">Active</span>
                          ) : (
                            <span className="text-danger">Inactive</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  users.message
                )
              ) : null}
            </div>
          </div>
          <div class="col-lg-6 mb-1">
            <div className="btn-group mb-3 fw-semibold">
              <button
                className="btn btn-primary fw-semibold"
                onClick={() => dispatch(fetchNotes())}
              >
                Fetch Notes
              </button>
              <button
                className="btn btn-primary fw-semibold"
                onClick={() => {
                  setNotesEditMode(!notesEditMode);
                  !notesEditMode &&
                    toast.info("Editing Notes", {
                      autoClose: 2000,
                      theme: "light",
                    });
                }}
                style={{ textDecoration: "underline" }}
              >
                {notesEditMode ? "Done" : "Edit Notes"}
              </button>
            </div>
            <div className="text-center shadow rounded p-3">
              {loadingNotes ? "Loading Notes..." : null}
              {(notes?.length > 0 || typeof notes === "object") &
              !loadingNotes ? (
                Array.isArray(notes) & (notes.length > 0) ? (
                  <ul className="m-0 p-0">
                    {notes.map((note, i) => {
                      return (
                        <li
                          key={note._id}
                          className="d-flex justify-content-between"
                          style={{ whiteSpace: "pre" }}
                          title={note.text}
                        >
                          {`${i + 1}|  ${note.title} : `}{" "}
                          <span className="text-decoration-underline">
                            [Description]
                          </span>{" "}
                          {note.completed ? (
                            <span className="text-success"> Completed</span>
                          ) : (
                            <span className="text-danger"> Not Completed</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  notes.message
                )
              ) : null}
            </div>
          </div>
        </div>
          <header className="row mt-5 pt-5">
            <h2>
              Create{" "}
              <button
                className="btn text-decoration-underline style-hover"
                onClick={() => {
                  setUsersCreateMode(true);
                  setNotesCreateMode(false);
                }}
              >
                Users
              </button>{" "}
              or{" "}
              <button
                className="btn text-decoration-underline style-hover"
                onClick={() => {
                  setNotesCreateMode(true);
                  setUsersCreateMode(false);
                }}
              >
                Notes
              </button>
            </h2>
          </header>
          {
            usersCreateMode ? <CreateUsers /> : <CreateNotes/>
          }
        <ToastContainer />
      </main>
    </div>
  );
}

export default App;
