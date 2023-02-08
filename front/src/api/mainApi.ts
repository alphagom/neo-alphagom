import axios from 'axios'

// base url 선언
const PORTFOLIO_LIST_URL = 'http://localhost:8080/api/v1/portfolio-list'

// API 요청에 필요한 Interface 설정
interface mainListItems {
  method: 'get'
  url: string
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

const mainList = async ({ method, url }: mainListItems) => {
  const token = localStorage.getItem('token')
  try {
    const config = {
      baseURL: PORTFOLIO_LIST_URL,
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : '',
      },
    }
    const { data } =
      (method === 'get' && (await axios.get(url, config))) ||
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
export const GETMAINLIST = (url: string) => mainList({ method: 'get', url })

// TestHandler에 넣을 데이터
export const pfCard = {
  data: [
    {
      portfolioSeq: 1,
      cover: 'https://www.google.com/search?q=portfolio+cover&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjGm_OpjIb9AhUvQPUHHctsDYAQ_AUoAXoECAEQAw&biw=2560&bih=1297&dpr=1.5',
      // cover: 'https://marketplace.canva.com/EAFOv0-FKOY/1/0/1131w/canva-black-and-white-monoline-typedriven-portfolio-cover-page--i5sVeUpuMk.jpg',
      nickname: 'devgom',
    }
  ]
}