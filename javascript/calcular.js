/* obtener datos */

// Función que se ejecuta cuando se cambia una selección

function handleSelectChange(event) {
    let selectedValue = event.target.value;
    console.log(selectedValue);
}

// Función para obtener los valores seleccionados y las salidas de diferentes secciones

function obtenerValoresYSalidas(elementoId, jugador) {
    let selecPuntos_num = [];
    let valuePunto_num = [];
    let valuePunto_txt = [];

    // Recorrer los 4 elementos de selección
    for (let i = 0; i < 4; i++) {
        selecPuntos_num[i] = document.getElementById(elementoId[i]);
        valuePunto_num[i] = selecPuntos_num[i].value;
        selecPuntos_num[i].addEventListener('change', handleSelectChange);
        valuePunto_txt[i] = selecPuntos_num[i].options[selecPuntos_num[i].selectedIndex].text;

    }

    return { valuePunto_num,};

}

// Obtener valores y salidas para diferentes secciones y jugadores

let seccion1 = obtenerValoresYSalidas(['elemento00', 'elemento01', 'elemento02', 'elemento03'], 1);
let seccion2 = obtenerValoresYSalidas(['elemento04', 'elemento05', 'elemento06', 'elemento07'], 2);
let seccion3 = obtenerValoresYSalidas(['elemento08', 'elemento09', 'elemento10', 'elemento11'], 3);
let seccion4 = obtenerValoresYSalidas(['elemento12', 'elemento13', 'elemento14', 'elemento15'], 4);
let seccion5 = obtenerValoresYSalidas(['elemento16', 'elemento17', 'elemento18', 'elemento19'], 5);
let seccion6 = obtenerValoresYSalidas(['elemento20', 'elemento21', 'elemento22', 'elemento23'], 6);
let escalera = obtenerValoresYSalidas(['elemento24', 'elemento25', 'elemento26', 'elemento27'], 'Escalera');
let full = obtenerValoresYSalidas(['elemento28', 'elemento29', 'elemento30', 'elemento31'], 'Full');
let pocker = obtenerValoresYSalidas(['elemento32', 'elemento33', 'elemento34', 'elemento35'], 'Pocker');
let generala = obtenerValoresYSalidas(['elemento36', 'elemento37', 'elemento38', 'elemento39'], 'Generala');
let generalaDoble = obtenerValoresYSalidas(['elemento40', 'elemento41', 'elemento42', 'elemento43'], 'Generala Doble');

/* ================================================ */

/* calcular jugador nº1*/

 // Función para calcular la suma total
function calcularTotal() {
    // Obtener los elementos seleccionados del jugador N°1
    const scorePlayer01 = [
        document.getElementById("elemento00").value,
        document.getElementById("elemento04").value,
        document.getElementById("elemento08").value,
        document.getElementById("elemento12").value,
        document.getElementById("elemento16").value,
        document.getElementById("elemento20").value,
        document.getElementById("elemento24").value,
        document.getElementById("elemento28").value,
        document.getElementById("elemento32").value,
        document.getElementById("elemento36").value,
        document.getElementById("elemento40").value
    ];
    
    // Obtener los elementos seleccionados del jugador N°2
    const scorePlayer02 = [
        document.getElementById("elemento01").value,
        document.getElementById("elemento05").value,
        document.getElementById("elemento09").value,
        document.getElementById("elemento13").value,
        document.getElementById("elemento15").value,
        document.getElementById("elemento21").value,
        document.getElementById("elemento25").value,
        document.getElementById("elemento29").value,
        document.getElementById("elemento33").value,
        document.getElementById("elemento37").value,
        document.getElementById("elemento41").value
    ];

    // Obtener los elementos seleccionados del jugador N°3
    const scorePlayer03 = [
        document.getElementById("elemento02").value,
        document.getElementById("elemento06").value,
        document.getElementById("elemento10").value,
        document.getElementById("elemento14").value,
        document.getElementById("elemento18").value,
        document.getElementById("elemento22").value,
        document.getElementById("elemento26").value,
        document.getElementById("elemento30").value,
        document.getElementById("elemento34").value,
        document.getElementById("elemento38").value,
        document.getElementById("elemento42").value
    ];

    // Obtener los elementos seleccionados del jugador N°4
    const scorePlayer04 = [
        document.getElementById("elemento03").value,
        document.getElementById("elemento07").value,
        document.getElementById("elemento11").value,
        document.getElementById("elemento15").value,
        document.getElementById("elemento19").value,
        document.getElementById("elemento23").value,
        document.getElementById("elemento27").value,
        document.getElementById("elemento31").value,
        document.getElementById("elemento35").value,
        document.getElementById("elemento39").value,
        document.getElementById("elemento43").value
    ];
    
    
    let total01 = 0;
    let total02 = 0;
    let total03 = 0;
    let total04 = 0;

    // Sumar los puntos jugador n1
    scorePlayer01.forEach(scorePlayer01 => {
        if (scorePlayer01 !== "-" && scorePlayer01 !== "/") {
        total01 += parseInt(scorePlayer01);
        }
    });
    // Sumar los puntos jugador n2
    scorePlayer02.forEach(scorePlayer02 => {
        if (scorePlayer02 !== "-" && scorePlayer02 !== "/") {
        total02 += parseInt(scorePlayer02);
        }
    });
    // Sumar los puntos jugador n3
    scorePlayer03.forEach(scorePlayer03 => {
        if (scorePlayer03 !== "-" && scorePlayer03 !== "/") {
        total03 += parseInt(scorePlayer03);
        }
    });
    // Sumar los puntos jugador n4
    scorePlayer04.forEach(scorePlayer04 => {
        if (scorePlayer04 !== "-" && scorePlayer04 !== "/") {
        total04 += parseInt(scorePlayer04);
        }
    });
    // Mostrar el total en el elemento <h3>
    document.getElementById("resultado01").textContent = total01;
    document.getElementById("resultado02").textContent = total02;
    document.getElementById("resultado03").textContent = total03;
    document.getElementById("resultado04").textContent = total04;
}

  // Asociar la función al evento click del botón ENVIAR
    document.getElementById("calcular-btn").addEventListener("click", calcularTotal); 

