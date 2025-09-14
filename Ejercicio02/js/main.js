import { agregarMascota } from './data.js';
import { renderizarMascotas } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
    const mascotaForm = document.getElementById('mascotaForm');

    mascotaForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const nuevaMascota = {
    nombre: document.getElementById('nombre').value,
    tipo: document.getElementById('tipo').value,
    edad: parseInt(document.getElementById('edad').value),
    dueno: document.getElementById('dueno').value, // corregido
    vacunada: document.querySelector('input[name="vacunada"]:checked')
        ? document.querySelector('input[name="vacunada"]:checked').value === 'true'
        : false
        };

        agregarMascota(nuevaMascota);
        renderizarMascotas();
        mascotaForm.reset();
    });

    renderizarMascotas();
});