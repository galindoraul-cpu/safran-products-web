function seleccionarUnidad(numero) {

    const contenedor =
        document.querySelector(".units-container");

    const unidades =
        document.querySelectorAll(".unit-card");


    // Quitar selección anterior

    unidades.forEach(function(unidad) {

        unidad.classList.remove("selected");

    });


    // Seleccionar la unidad correspondiente

    const unidadSeleccionada =
        unidades[numero - 1];


    unidadSeleccionada.classList.add("selected");


    // Activar modo maximizado

    contenedor.classList.add("expanded");

}


function minimizarUnidad(event) {

    // Evitar que el clic llegue a la tarjeta

    event.stopPropagation();


    const contenedor =
        document.querySelector(".units-container");


    const unidades =
        document.querySelectorAll(".unit-card");


    // Quitar selección

    unidades.forEach(function(unidad) {

        unidad.classList.remove("selected");

    });


    // Regresar a vista original

    contenedor.classList.remove("expanded");

}


function seleccionarProducto(event, producto) {

    // Evitar que el clic del producto
    // vuelva a seleccionar la unidad

    event.stopPropagation();
// Identificar la unidad donde se hizo clic
    const unidad = event.target.closest(".unit-card");

    // Encontrar el espacio de información de esa unidad
    const detalles = unidad.querySelector(".product-details");

    // Actualizar el nombre y descripción
    const titulo = detalles.querySelector(".product-detail-title");
    const descripcion = detalles.querySelector(".product-detail-description");

    titulo.textContent = producto;

    descripcion.textContent =
        "Aquí colocaremos la información detallada de " +
        producto +
        ", incluyendo descripción, características, proceso de fabricación y ubicación dentro de la planta.";

    // Mostrar la información
    detalles.classList.add("active");
}


function cerrarProducto() {

    const panel =
        document.getElementById("product-info");


    panel.style.display = "none";

}
