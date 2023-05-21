import api from '../api'

export const GetProducts = async () => {
    const data = await api.get(`/products?page=2&limit=5`)

    return data
}

