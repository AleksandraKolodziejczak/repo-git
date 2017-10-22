'use strict';

function ustawTlo() {
    for (var i = 0; i < document.getElementsByTagName('p').length; i++) {
        if (i % 2 == 0) {
            document.getElementsByTagName('p')[i].style.background = "red";
        } else {
            document.getElementsByTagName('p')[i].style.background = "yellow";
        }
    }
    document.getElementById('przycisk').innerHTML = 'Zeruj tlo';

    document.getElementById('przycisk').removeEventListener('click', ustawTlo);
    document.getElementById('przycisk').addEventListener('click', zeruj);
}

function zeruj() {
    for (var i = 0; i < document.getElementsByTagName('p').length; i++) {
        document.getElementsByTagName('p')[i].style.background = '';
    }
    
    document.getElementById('przycisk').innerHTML = 'ustaw tlo';
    
    document.getElementById('przycisk').removeEventListener('click', zeruj);
    document.getElementById('przycisk').addEventListener('click', ustawTlo);
}


//    
//    document.getElementsByTagName('p')[0].style.background="red"; 
//    document.getElementsByTagName('p')[1].style.background="yellow"; 
//}







document.getElementById('przycisk').addEventListener('click', ustawTlo);


//to samo rozwiazanie

//var pParzyste = document.querySelectorAll('p:nth-child(2n)');
//pParzyste.forEach(function(paragraf) {
//    paragraf.style.background = "rgb(255,0,0)";
//});
//
//var pNieparzyste = document.querySelectorAll('p:nth-child(2n-1)');
//pNieparzyste.forEach(function(paragraf) {
//    paragraf.style.background = "rgb(255,225,0)";
//});