import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Notification from '../customComponents/Notification';

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {

    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  // console.log(inputs);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs)
      });
      const data = await response.json();
      console.log("Data on Submit button is:", data);
      navigate('/login');
    }
    catch (err) {
      setError(err); // Assuming setError is defined elsewhere
      console.log("Error is coming", err); // Use err instead of error
    }
  }


  // try{
  //   const res = await axios.post("api/auth/register", inputs);
  //   console.log(res);
  // }
  // catch(err){
  //   console.log(err);
  // }


  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder="User Name" name="username" onChange={handleChange}></input>
        <input required type="email" placeholder="Email" name="email" onChange={handleChange}></input>

        <input required type="password" placeholder="Password" name="password" onChange={handleChange}></input>
        <button onClick={handleSubmit}>Register</button>
        <p>Data is coming</p>
        <span>Don you have an account?<Link to={'/login'}>Login</Link></span>
      </form>
    </div>
  )
}

export default Register
