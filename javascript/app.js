document.addEventListener('DOMContentLoaded', function() {
    let botonEnviar = document.getElementById('btn');
    let tablaHead = document.querySelector('.tabla thead');
    let tablaBody = document.querySelector('.tabla tbody');
    let nombresIngresados = [];

    botonEnviar.addEventListener('click', obtenerTexto);

    function obtenerTexto() {
        let input = document.getElementById('nombre');
        let textoIngresado = input.value;
        if (textoIngresado === '') {
        alert('No has ingresado ningún dato.');
        return;
    }
      // Verificar si el nombre ya existe en la lista de nombres ingresados
        let nombreExistente = nombresIngresados.find(function(nombre) {
        return nombre === textoIngresado;
    });
        if (nombreExistente) {
        alert('El nombre ya existe en la tabla. Por favor, ingresa un nombre diferente.');
        input.value = '';
        return;
    }

        nombresIngresados.push(textoIngresado);
      // Actualizar los encabezados de las columnas
        let encabezadoFila = tablaHead.querySelector('tr');
        let celdasEncabezado = encabezadoFila.querySelectorAll('th');
        celdasEncabezado.forEach(function(celda, indice) {
        if (indice > 0) {
            celda.textContent = nombresIngresados[indice - 1];
        }
        });
        input.value = '';
    }
});