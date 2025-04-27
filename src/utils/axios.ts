import axios from 'axios'

export const AxiosAuth = axios.create({
    withCredentials: true,
    baseURL: import.meta.env.VITE_SERVER_URL,
})

AxiosAuth.interceptors.request.use((config) => {
    config.headers.Authorization = "Bearer " + localStorage.getItem('token')
    return config
})

AxiosAuth.interceptors.response.use((response) => {
    if (response.status === 404) {
        localStorage.removeItem('token')
        window.location.href = "/login"
    }
    return response
})