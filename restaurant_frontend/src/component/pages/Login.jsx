import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="User Name"></input>

        <input type="text" placeholder="Password"></input>
        <button>Login</button>
        <p>This is an error!</p>
        <span>Don't you have an account?<Link to={'/register'}> Register </Link></span>
      </form>
    </div>
  )
}

export default Login
