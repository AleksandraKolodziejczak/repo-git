'use strict';

var osoba = {
    imie: 'Wojtek',
    wzrost: 181,
    przedstawOsobe: function() {
        console.log(this.imie);//this- ze do obiektu, jego wnetrza
    }
}

console.log(osoba.imie);
console.log(osoba['imie']);

osoba.przedstawOsobe();

osoba.nazwisko = 'Potocki';//dodawanie wlasciwosci

console.log(osoba.nazwisko)