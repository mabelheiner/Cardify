import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Lists from './Lists'
import SignUp from './SignUp'
import Login from './Login'
import CreateList from './CreateList'
import { createContext, useState, useEffect } from 'react'
import { getUserById } from './StateManagement/CustomerState'

export const UserContext = createContext()

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      console.log('user changed', currentUser)
      if (currentUser == null) {
        try {
          //check if there is a userId in storage
          //const sessionUserId = JSON.parse(sessionStorage.getItem('userId'))
          const sessionUserId = JSON.parse(localStorage.getItem('userId'))
          console.log('user in app', sessionUserId)

          //once I have an id I am going to get the user by Id
          const response = await getUserById(sessionUserId)
          console.log('Response from getting the user by id in app.jsx', response)

          if (response.status == 200) {
            setCurrentUser(response.data)
          } else {
            console.log('Error, response status not 200')
          }
          
        } catch (error) {
          console.error('Error', error)
        }
      }
    }
    fetchUser()
  }, [currentUser])

  return (
    <BrowserRouter>
      <UserContext.Provider value={[currentUser, setCurrentUser]}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/lists' element={<Lists />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/create-list' element={<CreateList />} />
      </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App
