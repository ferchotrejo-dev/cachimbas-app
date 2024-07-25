import api from "@/lib/axios";
import { isAxiosError } from "axios";

export async function getCatMemb() {
    try {
        const url = '/admin/catMemb'
        const { data } = await api.get(url)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function createMembership(formData) {
    try {
        const url = '/admin/memberships'
        const { data } = await api.post(url, formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function getAllAthletes() {
    try {
        const url = '/admin/atletas'
        const { data } = await api.get(url)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}