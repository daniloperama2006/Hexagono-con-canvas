//la pregunta de cuantos quiere ver
var numeroHexagonos = prompt('¿Cuantos hexagonos quieres ver?');

//llamado del canvas 
var canvas = document.getElementById("canvas");

var dibujo = document.getElementById("canvas");
var lienzo = dibujo.getContext("2d");

//funcion que determina las propiedades del canvas al llamarla
function lineas(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 4;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath;
}

//hexagono dibujado llamando la funcion "lineas"
function hexagono(xinicial) {
    console.log(xinicial);
    lineas("white", (xinicial * 350) + 80, 0, (xinicial * 350) + 200, 0);
    lineas("white", (xinicial * 350) + 80, 0, (xinicial * 350) + 0, 80);
    lineas("white", (xinicial * 350) + 0, 80, (xinicial * 350) + 80, 160);
    lineas("white", (xinicial * 350) + 80, 160, (xinicial * 350) + 200, 160);
    lineas("white", (xinicial * 350) + 200, 160, (xinicial * 350) + 270, 90);
    lineas("white", (xinicial * 350) + 270, 90, (xinicial * 350) + 200, 0);
}

//ciclo que permite observar los hexagonos totales a partir //
//de la variable "numeroHexagonos" //
for (var i = 0; i < numeroHexagonos; i++) {
    hexagono(i);
}