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
            duenio: document.getElementById('duenio').value, // uso "duenio" para que no se pierda
            vacunada: document.querySelector('input[name="vacunada"]:checked')
                ? document.querySelector('input[name="vacunada"]:checked').value === 'true'
                : false,
            precio: parseFloat(document.getElementById('precio').value)
        };

        agregarMascota(nuevaMascota);
        renderizarMascotas();
        mascotaForm.reset();
    });

    renderizarMascotas();
});