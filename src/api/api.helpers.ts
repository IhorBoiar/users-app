import axios from 'axios'

export const apiBaseUrl = 'https://jsonplaceholder.typicode.com'

export enum apiPath {
  posts = 'posts',
  albums = 'albums',
  users = 'users',
}

export const apiRequest = axios.create({
  baseURL: apiBaseUrl
})
