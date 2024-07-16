import React, {useState} from 'react';
import './Login.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
//usehistoryy -- useNavigate

const Login = ( {setLoginUser} ) => {
  
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) =>{
    // console.log(e.target)
    const {name, value} = e.target;
    setUser({
      ...user,
      [name]: value
    })
  }

  const login = () =>{
    axios.post("http://localhost:9002/Login", user)
    .then(res => {
       alert(res.data.message)
       setLoginUser(res.data.user)
       navigate("/")
    })
  }

  return (
    <div className='login'>
      <h1>Login</h1>
      <input type="text" name='email' value={user.email} placeholder='Enter Your Email' onChange={handleChange} />
      <input type="password" name='password' value={user.password} placeholder='Enter Your Password' onChange={handleChange} />
      <div className="button" onClick={login}>Login</div>
      <div>or</div>
      <div className="button" onClick={() => navigate("/Register") }>Register</div>
    </div>
  )
}

export default Login;
