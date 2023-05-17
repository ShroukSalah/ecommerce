

import api from '../api'

export const loginuser = async () => {
    const data = await api.post(`/auth/login`)

    return data
}

