import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from './App'

const Lists = () => {
  const [user, setUser] = useContext(UserContext)
  const [flashCardLists, setFlashCardLists] = useState(null)

  useEffect(() => {
    if (user != null) {
      try {
        setFlashCardLists(user.flashCardListsIds)
        console.log('Flash card ids', user.flashCardListsIds)
      } catch (error) {
        console.log('Error', error)
      }
    } else {
      console.log('You are not logged in')
    }
  }, [user])

  useEffect(() => {
    console.log('User in lists', user)
    if (user == null) {
      try {
        
        setUser(JSON.parse(localStorage.getItem('user')))
      } catch (error) {
        console.error('Error', error)
      }
    }
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