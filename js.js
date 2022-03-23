// JavaScript source code

new Number(5);

var valor1 = 5;
var valor2 = 10;

function  comprobarNumero(){
    var mensaje;
    if (valor1 < valor2) {
        alert ( "El maximo es 10");
    }
    else {
        alert("El maximo es 5");
    }
   
}

function mostrarFor() {
    var valor1 = 1;
    var valor2 = 50;
    var contador = 0;
    for (var i = valor1; i <= valor2; i++) {
        contador += contador;
    }
    return alert(contador);
}

function funcion() {
    return 5 * 2;
}

function expresiones() {
    if (valor1 < valor2 || valor2 > valor1) {
        alert("Se realiza expresion");
    }
    else {
        alert("No se realiza expresion");
    }
}
function number() {
    new Number(value);
    var a = new Number('123'); // a === 123 es false
    var b = Number('123'); // b === 123 es true
    a instanceof Number; // es true
    b instanceof Number; // es false
    return a;
}

function formateo() {
    const firstString = '2 + 2';              
    const secondString = new String('2 + 2');
    return eval(firstString);
}
