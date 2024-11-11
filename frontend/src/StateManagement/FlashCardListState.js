import axios from "axios";

export const getLists = async (listIds) => {
    try {
        console.log('List length', listIds)
        for (let index in listIds) {
            console.log('list', listIds[index])
        }
    } catch (error) {
        console.error('Error', error)
    }
}