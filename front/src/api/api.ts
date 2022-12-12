import axios from 'axios'

// BASE_URL 설정
const config = {
    BASE_URL: 'http://localhost:8080/api/v1',
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

/**
 * axios instance 생성
 *
 * oauth 시에는 axios import 해서 바로 사용하기
 * koflowa 백엔드 요청시에만 아래 정의한 api 사용
 */
export const api = (accessToken: string) => {
    if (accessToken) {
        return axios.create({
            baseURL: config.BASE_URL,
            headers: {
                ...headers,
                Authorization: `Bearer ${accessToken}`,
            },
        })
    }
    return axios.create({
        baseURL: config.BASE_URL,
        headers: {
            ...headers,
        },
    })
}

export default api
