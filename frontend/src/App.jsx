import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Lists from './Lists'
import SignUp from './SignUp'
import Login from './Login'
import { createContext, useState, useEffect } from 'react'

export const UserContext = createContext()

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    console.log('user changed', currentUser)
  }, [currentUser])

  return (
    <BrowserRouter>
      <UserContext.Provider value={[currentUser, setCurrentUser]}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/lists' element={<Lists />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App
