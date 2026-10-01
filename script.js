function seleccionarUnidad(numero) {

    const panel = document.getElementById("unit-info");

    const titulo = document.getElementById("unit-title");

    const descripcion = document.getElementById("unit-description");


    titulo.textContent =
        "Unidad de Negocio " + numero;


    descripcion.textContent =
        "Aquí colocaremos la información de la Unidad de Negocio " + numero +
        ". Posteriormente agregaremos sus productos, procesos y ubicación dentro de la planta.";


    panel.classList.add("active");

}


function minimizarUnidad() {

    const panel = document.getElementById("unit-info");

    panel.classList.remove("active");

}
