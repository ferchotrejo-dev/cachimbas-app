export const generarId = () => {
    const fecha = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2);
    return random + fecha;
}

export const pesoTotal = (pr, porcentaje) => {
    const total = (pr * (porcentaje / 100));
    return total.toFixed(1);
}

export const pesoLado = (total, barra) => {
    const lado = ((total - barra) / 2);
    return lado.toFixed(1);
}