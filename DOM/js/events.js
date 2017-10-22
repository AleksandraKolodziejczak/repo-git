'use strict'

var secondLink = document.getElementsByTagName('a')[1];

function alarm(event) {
    event.preventDefault();
    alert('Kliknieto w link');
}

secondLink.onclick = alarm;

var thirdLink = document.getElementsByTagName('a')[2];

thirdLink.addEventListener('click', alarm);
thirdLink.removeEventListener('click', alarm);


function klikHeader(){
    console.log('Kliknąłeś w header');
}

document.getElementsByTagName('header')[0].addEventListener('click', klikHeader);//zdarzenia przechodza od dolu


document.getElementsByTagName('h1')[0].addEventListener ('click', function(e){
    e.stopPropagation();
    console.log('kliknałes w h1');
});