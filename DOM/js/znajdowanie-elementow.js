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

linkiPoTagu.forEach(function(tag, index) {
    console.log(tag.outerHTML) 
})

linkiPoTagu.forEach(function(link, index) {
    console.log(tag.innerHTML)  
})