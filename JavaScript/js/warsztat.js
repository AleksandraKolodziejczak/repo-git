'use strict';

function mnozenie(parametr1, parametr2, parametr3) {
    var wynik = parametr1 * parametr2 * parametr3; //return parametr1 * parametr2 * parametr3;
    return wynik;
}

var wynikMnozenia = mnozenie(3, 5, 6);
console.log('wynik mnożenia: ' + wynikMnozenia);