import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, fetchNotes } from './App/fetchData';


function App() {
  const { users, notes, loadingUsers, loadingNotes,} = useSelector(state => state.default);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <header className='mt-4'>
        <h1 className='text-center'>React-Redux Testing</h1>
      </header>
      <main class="container-sm mt-5 p-0">
        <div class="row mx-1">
          <div class="col-md-6">
            <button className='btn btn-primary mb-3' onClick={() => dispatch(fetchUsers())}>Fetch Users</button>
            <div className='text-center shadow rounded p-3'>
              {
                loadingUsers ? "Loading Users..." : null
              }
              {
                (users?.length > 0 || typeof users === 'object') & (!loadingUsers) &&  (
                  Array.isArray(users) & users.length > 0 ? 
                    <ul className='m-0 p-0'>
                      {
                        users.map((user, i) => {
                          return (
                            <li key={user._id} className="d-flex justify-content-between" style={{whiteSpace: "pre"}}>
                              {`${i + 1}|   ${user.username}:  `} <span>{user.roles.join(', ')}</span> {user.active? <span className='text-success'>Active</span> : <span className='text-danger'>Inactive</span>}
                            </li>
                          )
                        })
                      }
                    </ul>
                  : users.message 
                )
              }
            </div>
          </div>
          <div class="col-md-6">
            <button className='btn btn-primary mb-3' onClick={() => dispatch(fetchNotes())}>Fetch Notes</button>
            <div className='text-center shadow rounded p-3'>
              {
                loadingNotes ? "Loading Notes..." : null
              }
              {
                (notes?.length > 0 || typeof notes === 'object') & (!loadingNotes) &&  (
                  Array.isArray(notes) & notes.length > 0 ? 
                    <ul className='m-0 p-0'>
                      {
                        notes.map((note, i) => {
                          return (
                            <li key={note._id} className="d-flex justify-content-between" style={{whiteSpace: "pre"}} title={note.text}>
                              {`${i + 1}|  ${note.title} : `} <span className='description-tooltip'>[Description]</span> {note.completed? <span className='text-success'> Completed</span> : <span className='text-danger'> Not Completed</span>}
                            </li>
                          )
                        })
                      }
                    </ul>
                  : notes.message 
                )
              }
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
