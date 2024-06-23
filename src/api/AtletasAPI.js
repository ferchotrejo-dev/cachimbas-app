import api from "@/lib/axios";
import { isAxiosError } from "axios";

export async function updateAthleteInfo(formData, id) {
    try {
        const url = `/atletas/${id}/addInfo`
        const { data } = await api.post(url, formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

