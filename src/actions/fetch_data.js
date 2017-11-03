import axios from 'axios'

export default function fetchData() {
  const API_KEY = 'wMcjA53CZNdV0OLhoWiEGiQS0mNb5LyMaxiXYkEo'
  const END_POINT = 'https://api.nasa.gov/planetary/apod?api_key='
  const request = axios.get(END_POINT+API_KEY)

  return {
    type: 'FETCH_DATA',
    payload: request
  }
}