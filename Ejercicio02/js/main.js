import { agregarMascota } from './data.js';
import { renderizarMascotas } from './ui.js';

const mascotaForm = document.getElementById('mascotaForm');

mascotaForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const nuevaMascota = {
        nombre: document.getElementById('nombre').value,
        tipo: document.getElementById('tipo').value,
        edad: parseInt(document.getElementById('edad').value),
        dueno: document.getElementById('dueno').value,
        vacunada: document.querySelector('input[name="vacunada"]:checked').value === 'true'
    };

    agregarMascota(nuevaMascota);
    renderizarMascotas();
    mascotaForm.reset();
});

renderizarMascotas();
