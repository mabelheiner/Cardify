import axios from 'axios';

export const loginUser = async (email, password) => {
    const data = {
        email: email,
        password: password
    }
    try {
        const response = await axios.post(`http://localhost:5000/users/login`, data, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        //console.log('Response in customer state', response)
        if (response.status == 200) {
            return response.data.response
        }  
    } catch (error) {
        //console.log('Error', error)
        return error
    }
}

export const signupUser = async (username, password, email) => {
    const user = {
        username: username,
        email: email,
        password: password
    }

    try {
        const response = await axios.post(`http://localhost:5000/users`, user, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        //console.log('Response from axios', response)
        if (response.status == 200){
            return response
        }
    } catch (error) {
        //console.log('Error', error)
        return error
    }

}

export const getUserById = async (userId) => {
    console.log('userid in getting user', userId)
    try {
        const response = await axios.get(`http://localhost:5000/users/${userId}`, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        //console.log('Response from getting user by id', response)
        return response
    } catch (error) {
        //console.log('Error', error)
        return error
    }
}

export const updateUserFlashCardLists = async (userId, lists) => {
    console.log('User id', userId)
    console.log('Lists', lists)
    const user = {
        flashCardListIds: lists
    }
    try {
        const response = await axios.patch(`http://localhost:5000/users/${userId}`, user)
        console.log('Response from patching user', response)
        
        if (response.status === 200) {
            return response.data
        }
    } catch (error) {
        console.log('error', error)
    }
}