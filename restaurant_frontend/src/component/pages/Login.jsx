//https://www.youtube.com/watch?v=0aPLk2e2Z3g&t=3874s     (website link)
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext';

const Login = () => {

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {

    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  // console.log(login);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // const response = await fetch('http://localhost:3000/api/auth/login', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(inputs)
      // });
      await login(inputs)
      // const data = await response.json();
      // console.log("Data on Submit button is:", data);
      navigate('/');
    }
    catch (err) {
      console.log(err);

      console.log("Error is coming", err); // Use err instead of error
    }
  }




  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder="User Name" name="username" onChange={handleChange}></input>
        <input required type="password" placeholder="Password" name="password" onChange={handleChange}></input>
        <button onClick={handleSubmit}>Login</button>
        <p>Data is coming</p>
        <span>If you don't have an account?<Link to={'/register'}>Register</Link></span>
      </form>
    </div>
  )
}

export default Login
