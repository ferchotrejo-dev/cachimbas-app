import api from "@/lib/axios";
import { isAxiosError } from "axios";

export async function createAccount(formData) {
    try {
        const url = '/admin/users'
        const { data } = await api.post(url, formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function confirmAccount(formData) {
    try {
        const url = '/auth/confirm-account'
        const { data } = await api.post(url, formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function requestConfirmationCode(formData) {
    try {
        const url = '/auth/request-code'
        const { data } = await api.post(url, formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function authenticateUser(formData) {
    try {
        const url = '/auth/login'
        const { data } = await api.post(url, formData)
        localStorage.setItem('AUTH_TOKEN', data)
        const user = await getUser()
        console.log(user)
        return user.rol
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function forgotPassword(formData) {
    try {
        const url = '/auth/forgot-password'
        const { data } = await api.post(url, formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function validateToken(formData) {
    try {
        const url = '/auth/validate-token'
        const { data } = await api.post(url, formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function updatePasswordWithToken(formData, token) {
    try {
        const url = `/auth/update-password/${token}`
        const { data } = await api.post(url, formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function getUser() {
    try {
        const { data } = await api.get('/auth/user')
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function getAthlete(id) {
    try {
        const { data } = await api.get('/auth/user')
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function getRols() {
    try {
        const { data } = await api.get('/admin/rols')
        console.log(data)
        return data
    } catch (error) {
        console.log(error);
    }
}