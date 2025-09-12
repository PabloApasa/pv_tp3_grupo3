//en esta seccion cree archivo para gestionar las mascotas
export const mascotas= [];
export function agregarMascota (mascota) {mascotas.push(mascota)};
export function eliminarMascota (index) {mascotas.splice(index,1)};
