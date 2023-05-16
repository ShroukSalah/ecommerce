import api from '../api'

export const GetProducts = async () => {
    const data = await api.get(`/products?page=1&limit=10`)

    return data
}

