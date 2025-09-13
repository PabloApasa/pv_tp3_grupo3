import { mascotas, eliminarMascota, obtenerEstadisticas } from './data.js';

const listaMascotas = document.getElementById('listaMascotas');
const totalMascotasSpan = document.getElementById('totalMascotas');
const vacunadasSpan = document.getElementById('vacunadas');
const noVacunadasSpan = document.getElementById('noVacunadas');

export function renderizarMascotas() {
    listaMascotas.innerHTML = '';

    mascotas.forEach((mascota, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('mascota-item');
        listItem.innerHTML = `
            <p><strong>Nombre:</strong> ${mascota.nombre}</p>
            <p><strong>Tipo:</strong> ${mascota.tipo}</p>
            <p><strong>Edad:</strong> ${mascota.edad} años</p>
            <p><strong>Dueño:</strong> ${mascota.dueno}</p>
            <p><strong>Vacunada:</strong> ${mascota.vacunada ? 'Sí ✅' : 'No ❌'}</p>`
        ;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.classList.add('delete-btn');
        deleteButton.setAttribute('data-index', index);

        deleteButton.addEventListener('click', () => {
            eliminarMascota(index);
            renderizarMascotas();
        });

        listItem.appendChild(deleteButton);
        listaMascotas.appendChild(listItem);
    });

    const { total, vacunadas, noVacunadas } = obtenerEstadisticas();
    totalMascotasSpan.textContent = total;
    vacunadasSpan.textContent = vacunadas;
    noVacunadasSpan.textContent = noVacunadas;
}