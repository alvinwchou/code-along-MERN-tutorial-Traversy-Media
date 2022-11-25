// this is for making the http request and storing the information in local storage

import axios from 'axios'

const API_URL = '/api/user/'

// register user
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

const authService = {
    register
}

export default authService