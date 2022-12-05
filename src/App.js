import logo from './logo.svg';
import './App.css';

import { useSelector, useDispatch } from "react-redux"
//import { addUser, removeUser } from "./redux/userRedux"
import { useState } from 'react';
import { updateUser } from './redux/apiCalls';

function App()
{
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const name1 = useSelector(state => state.user.userInfo.name)
  const dispatch = useDispatch()

  const saveUser = () =>
  {
    updateUser({ name, email }, dispatch)
  }

  const delUser = () =>
  {
    // dispatch(removeUser())
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>User - {name1}</p>
        <p>
          <input type="text" onChange={(e) => setName(e.target.value)} />
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
          <button onClick={saveUser}>Save</button>
        </p>
        <button onClick={delUser}>Delete</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

      </header>
    </div>
  );
}

export default App;
