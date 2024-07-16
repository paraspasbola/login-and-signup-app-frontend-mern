import { useState } from 'react';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import { BrowserRouter, Route, Routes } from "react-router-dom"; 

function App() {

  const [user, setLoginUser] = useState({})
  return (
    <>
    <BrowserRouter>
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={user && user._id ? <HomePage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />}></Route>

            {/* <Route exact path="/" element={<HomePage />}></Route>   */}
            <Route exact path="/Login" element={<Login setLoginUser={setLoginUser} />}></Route>
  		      <Route exact path="/Register" element={<Register />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
