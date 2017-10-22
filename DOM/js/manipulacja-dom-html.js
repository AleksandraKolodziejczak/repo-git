'use strict';

var mainHeader = document.getElementById('main-header');// przypisujemy naglowek do zmiennej

mainHeader.innerHTML = 'tresc naglowka';//dodajemy tresc do naglowka

var link = document.getElementsByClassName('link')[0];//zwroci tylko pierwszy link,przypisujemy pierwszy link do zmiennej

link.href = 'http://akademia108.pl';//nadpisuje atrybut href w linku

console.log(link.classList);

//link.className = 'nowa-klasa';//nadpisuje nazwe klasy w linku

link.className += ' nowa-klasa';

mainHeader.style.color = '#11aa22';//dodajemy style w naglowku