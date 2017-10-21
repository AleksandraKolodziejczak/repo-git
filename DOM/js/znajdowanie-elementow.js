'use strict';

var parFirst = document.getElementById('parFirst');
console.log(parFirst);

var link = document.getElementsByClassName('link');
console.log(link);

var linkiPoTagu = document.getElementsByTagName('p');
console.log(linkiPoTagu);

var wszystkieLinki = document.querySelectorAll('.link')
console.log(wszystkieLinki);

var pierwszyLink = document.querySelector('.link')
console.log(pierwszyLink);

//linkiPoTagu.forEach(function(tag, index) {
//    console.log(linkiPoTagu.outerHTML) 
//})
//
//linkiPoTagu.forEach(function(link, index) {
//    console.log(tag.innerHTML)  
//})

var elementParent = document.getElementById( "parFirst" ).parentNode;
console.log( elementParent );

console.log(document.getElementById( "parFirst" ).children );
console.log(document.getElementById( "parFirst" ).childNodes );
console.log(document.getElementById( "parFirst" ).childNodes[1] );
console.log(document.getElementById( "parFirst" ).firstChild );
console.log(document.getElementById( "parFirst" ).lastChild );