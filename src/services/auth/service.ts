

import api from '../api'

export const loginuser = async (payload: any) => {
    const data = await api.post(`/auth/login`, payload)

    return data
}

export const signupuser = async (payload: any) => {
    const data = await api.post(`/auth/signup`, payload)

    return data
}

