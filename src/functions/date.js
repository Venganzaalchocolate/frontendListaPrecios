export function obtenerFechaHoraActual() {
    // Obtener la fecha y hora actual
    const fechaHoraActual = new Date();

    // Obtener el día, mes y año
    const dia = fechaHoraActual.getDate();
    const mes = fechaHoraActual.getMonth() + 1; // Los meses van de 0 a 11, así que se suma 1
    const año = fechaHoraActual.getFullYear();

    // Obtener la hora, minutos y segundos
    const horas = fechaHoraActual.getHours();
    const minutos = fechaHoraActual.getMinutes();
    const segundos = fechaHoraActual.getSeconds();

    // Formatear la fecha y hora en una cadena legible
    const fechaHoraFormateada = `${dia}/${mes}/${año} ${horas}:${minutos}:${segundos}`;

    return fechaHoraFormateada;
}