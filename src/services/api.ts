import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3001/',
})

export const swrFetcher = async (url: string) => {
  const { data } = await api.get(url)
  return data
}
