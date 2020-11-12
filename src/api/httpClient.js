import axios from 'axios'

const httpClient = axios.create({
  baseURL: 'https://jsonmock.hackerrank.com/api/', // Save the url in a .env file
  headers: {
    'Content-Type': 'application/json'
  }
})

export default httpClient
