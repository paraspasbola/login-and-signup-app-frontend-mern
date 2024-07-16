import React, {useState} from 'react';
import './Register.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Register = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: ""
  })

  const handleChange = (e) =>{
    // console.log(e.target)
    const {name, value} = e.target;
    setUser({
      ...user,
      [name]: value
    })
  }

  const register = () =>{
    const { name, email, password , reEnterPassword } = user
    if( name && email && password && (password === reEnterPassword)){
      axios.post("http://localhost:9002/Register", user)
      .then( res => {
        alert(res.data.message)
        navigate("/Login")
    })
    }else{
      alert("invalid")
    }
    
  }
  return (
    <div className='register'>
      {console.log("user", user)}
      <h1>Register</h1>
      <input type="text" name='name' value={user.name}  placeholder='Enter Your Name' onChange={handleChange} />
      <input type="text" name='email' value={user.email} placeholder='Enter Your Email' onChange={handleChange} />
      <input type="password" name='password' value={user.password} placeholder='Enter Your Password' onChange={handleChange} />
      <input type="password" name='reEnterPassword' value={user.reEnterPassword} placeholder='Re-enter Password' onChange={handleChange} />
      <div className="button" onClick={register}>Register</div>
      <div>or</div>
      <div className="button" onClick={() => navigate("/Login") }>Login</div>
    </div>
  )
}

export default Register
