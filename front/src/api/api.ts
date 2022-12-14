import axios from 'axios'

// base url 선언
const BASE_URL = 'http://localhost:8080/api/v1'

// API 요청에 필요한 Interface 설정
interface fetchWrapItems {
  method: 'get' | 'post' | 'put' | 'delete'
  url: string
  body?: object
}
// headers 설정
const headers = {
  'Content-Type': 'application/json;charset=UTF-8',
  Accept: '*/*',
  'Access-Control-Allow-Origin': '*',
  crossDomain: true,
  credentials: 'include',
  withCredentials: true,
}

const fetchWrap = async ({ method, url, body }: fetchWrapItems) => {
  const token = localStorage.getItem('token')
  try {
    const config = {
      baseURL: BASE_URL,
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : '',
      },
    }
    const { data } =
      (method === 'get' && (await axios.get(url, config))) ||
      (method === 'post' && (await axios.post(url, body, config))) ||
      (method === 'put' && (await axios.put(url, body, config))) ||
      (method === 'delete' && (await axios.delete(url, config))) ||
      {}
    return data
  } catch (err: any) {
    if (err.response.status === 404 || err.response.status === 401) {
      console.log('Error!')
    }
    throw err
  }
}

// API 요청 종류 선언
// 앞으로 요청을 import 해서 axios 요청 작성하면 된다
export const GET = (url: string) => fetchWrap({ method: 'get', url })
export const POST = (url: string, body: object) =>
  fetchWrap({ method: 'post', url, body })
export const PUT = (url: string, body: object) =>
  fetchWrap({ method: 'put', url, body })
export const DELETE = (url: string) => fetchWrap({ method: 'delete', url })
