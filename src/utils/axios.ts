import axios from 'axios'

export const AxiosAuth = axios.create({
    withCredentials: true,
    baseURL: import.meta.env.VITE_SERVER_URL,
})

AxiosAuth.interceptors.request.use((config) => {
    config.headers.Authorization = "Bearer " + localStorage.getItem('token')
    return config
})

AxiosAuth.interceptors.response.use((res) => res, (err) => {
    if (err.status === 401) {
        localStorage.removeItem('token')
        window.location.href = "/login"
    }
    return err
})