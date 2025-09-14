//en esta seccion cree archivo para gestionar las mascotas
export const mascotas= [];
export function agregarMascota (mascota) {mascotas.push(mascota)};
export function eliminarMascota (index) {mascotas.splice(index,1)};
export function obtenerEstadisticas() {
    const total = mascotas.length;
    const vacunadas = mascotas.filter(m => m.vacunada).length;
    const noVacunadas = total - vacunadas;

    return { total, vacunadas, noVacunadas };
}