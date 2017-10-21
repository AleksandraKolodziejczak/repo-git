'use strict';

var liczba1 = 13, liczba2 = 5

var wynik;
wynik = liczba1 % liczba2;
console.log(wynik);

//liczba1++;
//console.log(liczba1);

console.log(liczba2++);
console.log(liczba2);

console.log(++liczba1);
console.log(liczba1);

var liczba3 = 10;

liczba3 +=5; //15 liczba3 + 5 = 15 - to wersja skrócona
console.log(liczba3);

console.log(liczba1 == liczba2);

var liczba4 = 100;
var liczba5 = '100';

console.log(liczba4 == liczba5);
console.log(liczba4===liczba5);

var liczba6 = 10;
var liczba7 = 12;
var liczba8 = 10;

console.log('---------------------');
console.log((liczba6 != liczba7) && (liczba6 != liczba8));