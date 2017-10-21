'use strict';

var wzrostMateusz = 190;
var wzrostOlgi = 190;

//if

if (wzrostOlgi < wzrostMateusz) {
    console.log('Olga jest wuższa');
}

//if else

if (wzrostOlgi > wzrostMateusz) {
    console.log('Olga jest wyższa');
} else {
    console.log("Olga jest niższa");
}

//if else if
if (wzrostOlgi > wzrostMateusz) {
    console.log('Olga jest wyższa');
} else if(wzrostOlgi == wzrostMateusz) {
    console.log('Olga jest tak wysoka jak MAteusz');
} else {
    console.log("Olga jest niższa");
}

//switch

var kolor= 'zielony';

switch (kolor) {
    case 'czerwony':
        console.log('Kolor czerwony');
        break;//żeby w kolejne nie wchodził
    case 'zielony':
        console.log('Kolor zielony');
        break;
    case 'niebieski':
        console.log('Kolor niebieski');
        break;
    default:
        console.log('Inny kolor');
        break; 
}

