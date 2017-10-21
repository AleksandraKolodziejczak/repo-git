'use strict';

var imiona = ['Wojtek', 'Krystian', 'Łukasz'];

console.log(imiona);

imiona[3] = 'Piotr';

console.log(imiona);

var ileElementow = imiona.push('Geralt');//unshift - na początek

console.log(imiona);

console.log(ileElementow);

var ostatniElement = imiona.pop();//shift

console.log(imiona);

console.log(ostatniElement);

console.log('Ile elementów w tablicy: ' + imiona.length);//to jest wlasciwosc i odwolujemy sie do niej bez nawiasow

//console.log(imiona.join(' - '));

imiona.reverse();
console.log(imiona);
imiona.sort();
console.log(imiona);

