import React from 'react'

const Register = () => {
  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:"",
  })


  const handleChange=(e)=>{
setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
  }
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder="User Name" name="username" onChange={handleChange}></input>
        <input  required type="email" placeholder="Email" name="email" onChange={handleChange}></input>

        <input  required type="password" placeholder="Password" name="password" onChange={handleChange}></input>
        <button>Login</button>
        <p>This is an error!</p>
        <span>Don you have an account?<Link to={'/login'}>Login</Link></span>
      </form>
    </div>
  )
}

export default Register
