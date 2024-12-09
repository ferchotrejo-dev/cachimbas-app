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

export async function getUser() {
    try {
        const { data } = await api.get('/auth/user')
        // console.log(data._id)
        return data._id
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function getAthlete(id) {
    try {
        const url = `/atletas/${id.value}`
        const { data } = await api.get(url)
        // console.log(data[0]._id)
        return data[0]._id
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}


export async function getExercises() {
    try {
        const url = '/atletas/ejercicios'
        const { data } = await api.get(url)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

/* PR */
export async function createPr(formData) {
    console.log(formData)
    try {
        const url = '/atletas/weightlifting'
        const { data } = await api.post(url, formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function getWheightliftings(id) {
    try {
        const url = `/atletas/weightliftings/${id.value}`
        const { data } = await api.get(url)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function getWheightliftingById(id) {
    try {
        const url = `/atletas/weightlifting/${id}`
        const { data } = await api.get(url)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function updatePr({ id, formData }) {
    try {
        const url = `/atletas/weightlifting/${id}`
        const { data } = await api.put(url, formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function deletePr(id) {
    try {
        const url = `/atletas/weightlifting/${id}`
        const { data } = await api.delete(url)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

/* SKILLS */
export async function createSkill(formData) {
    try {
        console.log(formData)
        const url = '/atletas/skills'
        const { data } = await api.post(url, formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function getSkills(id) {
    try {
        const url = `/atletas/skills/${id.value}`
        const { data } = await api.get(url)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function getSkillById(id) {
    try {
        const url = `/atletas/skill/${id}`
        const { data } = await api.get(url)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function updateSkill({ id, formData }) {
    try {
        const url = `/atletas/skills/${id}`
        const { data } = await api.put(url, formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function deleteSkill(id) {
    try {
        const url = `/atletas/skills/${id}`
        const { data } = await api.delete(url)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

/* BENCHMARKS */
export async function createBenchmark(formData) {
    try {
        console.log(formData)
        const url = '/atletas/benchmarks'
        const { data } = await api.post(url, formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function getBenchmarks(id) {
    try {
        console.log(id)
        const url = `/atletas/benchmarks/${id.value}`
        const { data } = await api.get(url)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}
