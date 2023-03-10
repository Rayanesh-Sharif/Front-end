import axios from 'axios'

export const globalApi = axios.create({
    baseURL: 'http://localhost:8000/'
})

export const authApi = axios.create({
    baseURL: 'http://localhost:8000/',
    headers: {

    }
})