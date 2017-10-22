'use strict';


function pobierzImie(event) {
    event.preventDefault();//zastopowanie wysyłania
    
//    console.log(document.getElementsByName('fname')[0].value);
//    console.log(document.getElementsByName('lname')[0].value);
//}
    
    var inputs = document.querySelectorAll('input[type=text]');

for (var i = 0; i < inputs.length; i++) {
    console.log(inputs[i].value);
}
}