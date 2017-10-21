'use strict';

//pętla for
for (var i = 10; i > 0; i--) {//przed obiegiem i na 10, potem sprawdź warunek, i ma 10, cos wykonać - wyswietl, jak skonczysz, to zmniejsz o 1, az do 0
    console.log(i);
}

//for each

var imiona = ['Wojtek', 'Krystian', 'Zenek'];

imiona.forEach(function (element, index) {
console.log("Element z Indexem: " + index + " ma wartość " + element);
})


//while

var it = 0;
while(it < 10) {
    console.log("It: " + it);
    it++;
}

//do... while

var j = 0;
do {
    console.log('Pętla do...while: ' + j);
    j++
} while (j < 10)// zawsze raz się wykona
    
//przerwanie break
    
    var a = 0;
while (a < 10) {
    
    console.log('break: ' + a);
    a++
    if(a == 5) {
        break;
    }
}

//continue

for(var i = 0; i < 10; i++) {
    if(i == 5) {
        continue;
    }
    
    console.log('Continue: ' + i);
}

for(var i = 0; i < 3; i++) {
    for(var j = 0; j < 4; j++) {
        if(j == 2) {
            break;
        }
    console.log('i = ' + i + ' , j = ' + j);
}
    }






















