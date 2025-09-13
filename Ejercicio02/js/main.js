import { mascotas, mascotaFrom } from './almacenarMascotas.js';
import { renderizarMascotas } from './renderizarMascotas.js';

documento.addEventListener('DOMContentLoaded', () => {
    renderizarMascotas();

    mascotaFrom.addEventListener('submit', (event) => {
        event.preventDefault();

        const nuevaMascota = {
            nombre: document.getElementById('nombre').value,
            tipo: document.getElementById('tipo').value,
            edad: parseInt(document.getElementById('edad').value),
            duenio: document.getElementById('duenio').value,
            vacunada: document.getElementById('vacunada').checked,
            precio: parseFloat(document.getElementById('precio').value)
        };
        mascotas.push(nuevaMascota);
        renderizarMascotas();
        mascotaFrom.reset();
    });
});