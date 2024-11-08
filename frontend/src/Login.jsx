import React, { useContext, useEffect, useState } from 'react'
import { loginUser } from './StateManagement/CustomerState';
import {UserContext} from './App'
import { useNavigate } from 'react-router-dom';


const Login = () => {
  document.title = 'Cardify | Login'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useContext(UserContext);
  const [message, setMessage] = useState('')

  const navigate = useNavigate();

  async function handleLogin(e) {
    console.log('handling login')
    e.preventDefault();
    
    try {
      console.log('trying....')
      const response = await loginUser(email, password)
      if (response.status != 401) {
        setUser(response)
        sessionStorage.setItem('user', JSON.stringify(response))
        navigate('/')
      } else {
        setMessage('Login failed, likely due to invalid credentials. Please try again.')
      }
    } catch (error) {
      console.log('Error', error)
    }
  }

  useEffect(() => {
    setUser(null)
  }, [])

  return (
    <div>
        <h1>Login</h1>
        <p>{message}</p>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="email">Username</label> <br></br>
            <input name='email' type='email' required onChange={(e) => setEmail(e.target.value)}></input>
          </div>
          <div>
            <label htmlFor="password">Password</label> <br></br>
            <input type="password" name="password" id="password" required onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button style={{color: 'black', backgroundColor: '#eef8eb', border: '1px solid #2c4f40', borderRadius: '10%', padding: '.25em'}} type='submit'>Login</button>
        </form>
        <p>Don't have an account? 
            <a style={{textDecoration: 'none', color: '#'}} href='/signup'> Sign Up</a>
        </p>
    </div>
  )
}

export default Login