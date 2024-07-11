import api from "@/lib/axios";

export async function getAthletes() {
    try {
        const url = `/admin/atletas`
        const { data } = await api.get(url)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }

}