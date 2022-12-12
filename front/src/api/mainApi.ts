import api from './api'
import { testApi } from './url'

// eslint-disable-next-line import/prefer-default-export
export const getTest = (accessToken: string) => api(accessToken).get(testApi)
