import React, { useContext } from 'react'
import { useState } from 'react'
import { signupUser } from './StateManagement/CustomerState'
import { UserContext } from './App'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  document.title = 'Cardify | Sign Up'
  const [message, setMessage] = useState("")
  const navigate = useNavigate();
  
  const [username, setUsername] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [confirmPassword, setConfirmPassword] = useState(null)

  const [user, setUser] = useContext(UserContext)

  async function handleSignUp(e) {
    e.preventDefault()

    console.log('username', username)
    console.log('email', email)
    console.log('password', password)
    console.log('confirm password', confirmPassword)

    if (password === confirmPassword) {
      
      try {
        const response = await signupUser(username, password, email)
        console.log('Response from sign up', response)
        if (response.status == 200) {
          setUser(response.data)
          navigate('/login')
        } else {
          setMessage('Unable to create account, try again.')
        }
      } catch (error) {
        console.log('error', error)
      }
    } else {
      setMessage('Passwords do not match, try again.')
    }
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <p>{message}</p>
      <form onSubmit={handleSignUp}>
        <div>
          <label htmlFor="username">Username</label> <br></br>
          <input type="text" name="username" id="username" required onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="email">Email</label> <br />
          <input type="email" name="email" id="email" required onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Password</label> <br />
          <input type="password" name="password" id="password" required onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label> <br />
          <input type="password" name="confirmPassword" id="confirmPassword" required onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <button style={{color: 'black', backgroundColor: '#eef8eb', border: '1px solid #2c4f40', borderRadius: '10%', padding: '.25em'}} type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp