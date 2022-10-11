import axios from 'axios'

const api = axios.create({
    baseURL: 'http://51.75.165.11:3001/'
})

export default api