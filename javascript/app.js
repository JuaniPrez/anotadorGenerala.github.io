// Esperar a que el documento esté completamente cargado

document.addEventListener('DOMContentLoaded', function() {
        // Obtener referencia al botón de enviar
    let botonEnviar = document.getElementById('btn');
        // Obtener referencia a la cabecera y al cuerpo de la tabla
    let tablaHead = document.querySelector('.tabla thead');
    let tablaBody = document.querySelector('.tabla tbody');
        // Arreglo para almacenar los nombres ingresados
    let nombresIngresados = [];

    // Agregar event listener al botón de enviar
    botonEnviar.addEventListener('click', obtenerTexto);

        // Función que se ejecuta al hacer clic en el botón de enviar
    function obtenerTexto() {

                // Obtener el valor ingresado en el campo de texto
        let input = document.getElementById('nombre');
        let textoIngresado = input.value;

                // Verificar si no se ha ingresado ningún dato
        if (textoIngresado === '') {
        alert('No has ingresado ningún dato.');
        return;
    }
      // Verificar si el nombre ya existe en la lista de nombres ingresados
        let nombreExistente = nombresIngresados.find(function(nombre) {
        return nombre === textoIngresado;
    });
            // Si el nombre ya existe, mostrar una alerta y vaciar el campo de texto
        if (nombreExistente) {
        alert('El nombre ya existe en la tabla. Por favor, ingresa un nombre diferente.');
        input.value = '';
        return;
    }

            // Agregar el nombre ingresado al arreglo de nombres
        nombresIngresados.push(textoIngresado);

            // Actualizar los encabezados de las columnas
        let encabezadoFila = tablaHead.querySelector('tr');
        let celdasEncabezado = encabezadoFila.querySelectorAll('th');

            // Ignorar la primera columna, ya que es para otro propósito
        celdasEncabezado.forEach(function(celda, indice) {
        if (indice > 0) {
            celda.textContent = nombresIngresados[indice - 1];
        }
        });
            
            // Vaciar el campo de texto
        input.value = '';
    }
});