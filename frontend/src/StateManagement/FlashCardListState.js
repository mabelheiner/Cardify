import axios from "axios";

export const getLists = async (listIds) => {
    const listData = []
    try {
        console.log('List length', listIds)
        for (let index in listIds) {
            console.log('list', listIds[index])
            try {
                const response = await axios.get(`http://localhost:5000/lists/${listIds[index]}`)
                console.log('Response in state', response)
                if (response.status === 200) {
                    listData.push(response.data)
                }
            } catch (error) {
                console.error('Error in getLists', error)
            }
        }
        return listData
    } catch (error) {
        console.error('Error', error)
    }
}

export const addList = async (list) => {
    try {
        const response = await axios.post('http://localhost:5000/lists', list, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        console.log('Response from lists', response)
        if (response.status == 200)  {
            return response.data
        }
    } catch (error) {
        console.log('Error', error.message)
    }
}