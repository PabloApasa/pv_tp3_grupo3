let mascotas = [];

documento.getelementbyid("formulario").addeventlistener("submit", funcion(evento)){
    evento.preventdefault();

    let nombre=documento.getelementbyid("nombre").valor;
    let tipo=documento.getelementbyid("tipo").valor;
    let dueñio=documento.getelementbyid("dueñio").valor;
    let edad=documento.getelementbyid("edad").valor;

    let mascotas= {nombre, tipo, dueñio, edad};
    mascotas.push(mascotas);

    let lista= documento.getelementbyid("listamascotas");
    lista.innerhtml= "";

    mascotas.forEach(m => {
    let item = document.createElement("li");
    item.textContent = `${m.nombre} (${m.tipo}), dueño: ${m.duenio}, edad: ${m.edad}`;
    lista.appendChild(item);
  });

  document.getelementbyid("dormulario").reset();
}

