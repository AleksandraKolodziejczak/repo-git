'use strict';

var iloscOsoba1 = 3500;
var iloscOsoba2 = 5000;
var iloscOsoba3 = 7500;
var iloscOsoba4 = 2000;

var sumaKasy;//zmienna globalna

sumaKasy = iloscOsoba1 + iloscOsoba2 + iloscOsoba3;

console.log(sumaKasy);

function policzSumeKasy(iloscOsoba1, iloscOsoba2, iloscOsoba3) {
    var sumaKasy;//zmienna lokalna
    sumaKasy = iloscOsoba1 + iloscOsoba2 + iloscOsoba3 + iloscOsoba4;//mozna sie odwolac do zmiennej globalnej
    console.log(sumaKasy);
    var sumaKasyLokalnie = sumaKasy;
    console.log("Kasa lokalnie wewnatrz funkcji: " + sumaKasyLokalnie)
}

policzSumeKasy(iloscOsoba1, iloscOsoba2, iloscOsoba3);
