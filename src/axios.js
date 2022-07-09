import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://vsstinder.herokuapp.com/'
})

export default instance;