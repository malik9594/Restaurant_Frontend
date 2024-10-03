import React from 'react'

const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder="User Name"></input>
        <input  required type="email" placeholder="Email"></input>

        <input  required type="password" placeholder="Password"></input>
        <button>Login</button>
        <p>This is an error!</p>
        <span>Don you have an account?<Link to={'/login'}>Login</Link></span>
      </form>
    </div>
  )
}

export default Register
