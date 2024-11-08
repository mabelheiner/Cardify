import React, { useContext, useEffect } from 'react'
import {FaSearch} from 'react-icons/fa'
import './Home.css'

import {UserContext} from './App'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import Lists from './Lists'

const Home = () => {
  const [user, setUser] = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    console.log('User', user)
  }, [])
  return (
    <div>
        <Header />
        <Lists />
    </div>
  )
}

export default Home