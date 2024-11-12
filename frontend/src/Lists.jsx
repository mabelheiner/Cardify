import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from './App'
import { getUserById } from './StateManagement/CustomerState'

const Lists = () => {
  const [user, setUser] = useContext(UserContext)
  const [flashCardListsIds, setFlashCardListsIds] = useState(null)
  const [flashCardLists, setFlashCardLists] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    if (user != null) {
      try {
        setFlashCardListsIds(user.flashCardListsIds)
        console.log('Flash card ids', user.flashCardListIds)
      } catch (error) {
        console.log('Error', error)
      }
    } else {
      console.log('You are not logged in')
    }
  }, [user])

  useEffect(() => {
    const fetchLists = async () => {
      console.log('API CALL to fetch lists here')
      console.log('current flashcardlistsIds', flashCardListsIds)
    }

    fetchLists()
  }, [flashCardListsIds])
  return (
    <div>
      <h1>lists</h1>
      <section className='list-section' style={{display: 'flex', flexWrap: 'wrap'}}>
        <article className='list-card' style={{flexDirection: 'column', border: '1px solid darkgreen', }} onClick={() => navigate('/create-list')}>
          <h1> + </h1>
          <p>Add New List</p>
        </article>        
      </section>
    </div>
  )
}

export default Lists