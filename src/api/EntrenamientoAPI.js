import axios from 'axios'

export async function generarEntrenamiento({ objetivo, ejercicioBase }) {
    try {
        const url = 'http://localhost:4000/api/entrenamiento/generar'
        const { data } = await axios.post(url, {
            objetivo,
            ejercicio_base: ejercicioBase // <- aquí está la clave
        })
        return data
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.error)
        } else {
            throw new Error("Error desconocido al generar el entrenamiento")
        }
    }
}
