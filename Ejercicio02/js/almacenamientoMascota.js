// 2. Declarar un arreglo para almacenar los datos
export const mascotas = [];

// Obtener elementos del DOM
export const mascotaForm = document.getElementById('mascotaForm');
export const listaMascotas = document.getElementById('listaMascotas');
export const totalMascotasSpan = document.getElementById('totalMascotas');
export const vacunadasSpan = document.getElementById('vacunadas');
export const noVacunadasSpan = document.getElementById('noVacunadas');

export function eliminarMascota(index) {
    mascotas.splice(index, 1);
}