import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from './App'
import { getUserById } from './StateManagement/CustomerState'
import { getLists } from './StateManagement/FlashCardListState'
const Lists = () => {
  const [user, setUser] = useContext(UserContext)
  const [flashCardListsIds, setFlashCardListsIds] = useState(null)
  const [flashCardLists, setFlashCardLists] = useState(null)

  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  async function fetchLists(listIds) {
    console.log('List ids', listIds)
    try {
      const response = await getLists(listIds)
      console.log('Response in frontend', response)
      if (response.length > 0) {
        setFlashCardLists(response)
      }
    } catch (error) {
      console.log('Error', error)
    }

    setLoading(false)
  }

  useEffect(() => {
    if (user != null) {
      try {
        fetchLists(user.flashCardListIds)
      } catch (error) {
        console.log('Error', error)
      }
    } else {
      console.log('You are not logged in')
    }
  }, [user])
  return (
    <div>
      <h1>lists</h1>
      <section className='list-section' style={{display: 'flex', flexWrap: 'wrap'}}>
        <article className='list-card' style={{flexDirection: 'column', border: '1px solid darkgreen', }} onClick={() => navigate('/create-list')}>
          <h1> + </h1>
          <p>Add New List</p>
        </article>  
        {loading === true ? (<p>Loading...</p>) : flashCardLists.length > 0 ?
        <>
           {flashCardLists.map((list, index) => (
            <div key={index} onClick={() => navigate(`/lists/${list._id}`)}>
              <p>Name: {list.name}</p>
              <p>Description: {list.description}</p>
            </div>
           ))} </>
           : (<p>Hello</p>)}      
      </section>
    </div>
  )
}

export default Lists