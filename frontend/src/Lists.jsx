import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from './App'
import { getUserById } from './StateManagement/CustomerState'

const Lists = () => {
  const [user, setUser] = useContext(UserContext)
  const [flashCardLists, setFlashCardLists] = useState(null)

  useEffect(() => {
    if (user != null) {
      try {
        setFlashCardLists(user.flashCardListsIds)
        console.log('Flash card ids', user.flashCardListIds)
      } catch (error) {
        console.log('Error', error)
      }
    } else {
      console.log('You are not logged in')
    }
  }, [user])

  useEffect(() => {
    /* const fetchUser = async () => {
      console.log('User in lists', user)
      if (user == null) {
        try {    
          const userId = JSON.parse(sessionStorage.getItem('user'))
          const response = await getUserById(userId)
          console.log('Response from fetching the user via sessionStorage', response)
        } catch (error) {
          console.error('Error', error)
        }
      }
    }
    fetchUser() */
    console.log('user in lists', user)
  }, [user])
  return (
    <div>
      <h1>lists</h1>
      <section className='list-section' style={{display: 'flex', flexWrap: 'wrap'}}>
        <article className='list-card' style={{flexDirection: 'column', border: '1px solid darkgreen', }}>
          <h1> + </h1>
          <p>Add New List</p>
        </article>        
      </section>
    </div>
  )
}

export default Lists