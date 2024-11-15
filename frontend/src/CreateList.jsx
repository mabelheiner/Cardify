import React, { useContext, useState } from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import { addList } from './StateManagement/FlashCardListState'
import { UserContext } from './App'
import { getUserById, updateUserFlashCardLists } from './StateManagement/CustomerState'

const CreateList = () => {
  const [listName, setListName] = useState("")
  const [listDescription, setListDescription] = useState("")

  const [user, setUser] = useContext(UserContext)

  const [message, setMessage] = useState(null)

  const navigate = useNavigate()

  async function handleCreateList(e) {
    e.preventDefault()

    if (listName.trim() !== "" || listDescription.trim() !== "") {
        const list = {
          name: listName,
          description: listDescription
        }
        const response = await addList(list)
        console.log('Response', response)
        console.log('Response in create list', response)
        console.log('user lists', user.flashCardListIds)
        user.flashCardListIds.push(response._id)
        console.log('Lists being sent', user.flashCardListIds)
        const updatedUser = await updateUserFlashCardLists(user._id, user.flashCardListIds)
        console.log('UPDATE USER', updatedUser)
        setUser(updatedUser)
        //console.log('user', user)
        navigate('/')
    } else {
        setMessage("Please fill all fields with valid data to create the list.")
        return
    }

    //navigate('/')
  }
  return (
    <div style={{textAlign: 'left'}}>
        <Header />

        <form onSubmit={handleCreateList} style={{display: 'flex', flexDirection: 'column', margin: 'auto', padding: '1em'}}>
            <h2>Create Flash Card List</h2>
            {message != null ? <p>Please fill out all fields with valid data</p>  : <></>}

            <label htmlFor="listName">Name for your list:</label> 
            <input type="text" name="listName" id="listName" placeholder='Terms for Chapter 1, Biology Midterm, etc' required onChange={(e) => setListName(e.target.value)} />
            
            <label htmlFor="listDescription">Brief description:</label>
            <input type="text" name="listDescription" id="listDescription" placeholder='What I need to know for the Midterm, What I need to know for the Exam' required onChange={(e) => setListDescription(e.target.value)} />

            <button style={{color: 'black', backgroundColor: '#eef8eb', border: '1px solid #2c4f40', borderRadius: '10%', padding: '.25em', marginTop: '2em'}} type="submit">Create List</button>
        </form>
    </div>
  )
}

export default CreateList