function seleccionarUnidad(numero) {

    const panel = document.getElementById("unit-info");

    const titulo = document.getElementById("unit-title");

    const descripcion = document.getElementById("unit-description");

    const contenedor = document.querySelector(".units-container");

    const unidades = document.querySelectorAll(".unit-card");


    // Quitar selección anterior

    unidades.forEach(function(unidad) {

        unidad.classList.remove("selected");

    });


    // Seleccionar la unidad correspondiente

   const unidadSeleccionada = unidades[numero - 1];

unidadSeleccionada.classList.add("selected");

// Mover la unidad seleccionada al principio
contenedor.prepend(unidadSeleccionada);
    
    // Expandir el contenedor

    contenedor.classList.add("expanded");


    // Cambiar información

    titulo.textContent =
        "Unidad de Negocio " + numero;


    descripcion.textContent =
        "Aquí colocaremos la información de la Unidad de Negocio " +
        numero +
        ". Posteriormente agregaremos sus productos, procesos y ubicación dentro de la planta.";


    // Mostrar panel

    panel.classList.add("active");

}


function minimizarUnidad() {

    const panel = document.getElementById("unit-info");

    const contenedor = document.querySelector(".units-container");

    const unidades = document.querySelectorAll(".unit-card");


    // Quitar selección

    unidades.forEach(function(unidad) {

        unidad.classList.remove("selected");

    });


    // Recuperar el orden original

    unidades.forEach(function(unidad) {

        contenedor.appendChild(unidad);

    });


    // Volver a vista original

    contenedor.classList.remove("expanded");


    // Ocultar información

    panel.classList.remove("active");

}
