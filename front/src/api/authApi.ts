import { LoginType } from 'store/type'
import { GET, POST, PUT } from './api'

export const login = (url: string, body: LoginType) => POST(url, body)
