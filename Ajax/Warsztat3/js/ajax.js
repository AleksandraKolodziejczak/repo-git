'use strict';

//function ajax(ajaxOptions) {
//
//    // parametry połączenia i jego typu
//    var options = {
//        type: ajaxOptions.type || "POST",
//        url: ajaxOptions.url || "",
//        onComplete: ajaxOptions.onComplete || function () {},
//        onError: ajaxOptions.onError || function () {},
//        onSuccess: ajaxOptions.onSuccess || function () {},
//        dataType: ajaxOptions.dataType || "text"
//    };
//}
//
//$(document).ready(function () {
//    $("button").click(pobierzDane);
//
//    function pobierzDane(options) {
//        $.getJSON("https://jsonplaceholder.typicode.com/users", function (data) {
//            console.log(data);
//        document.getElementById('user-id').innerHTML=data[0].id;
//        document.getElementById('user-name').innerHTML=data[0].name;
//        document.getElementById('user-url').innerHTML=data[0].username;
//        });
//        
//var x = 0;
//function myFunction() {
//    document.getElementsByClassName("demo").innerHTML = x += 1;
//    console.log(myFunction);
//}
//
//    }    
//});

window.onscroll = function(ev) {
    if ((window.innerHeight + window.pageYOffset) >=
document.body.offsetHeight) {
        alert();
        console.log(ev);
    }
//
//};
//$(document).ready(function () {
//   $("button").click(pobierzDane);
//
//    function pobierzDane(options) {
//       $.getJSON("https://jsonplaceholder.typicode.com/users", function (data) {
//           console.log(data);
//     document.getElementById('user-id').innerHTML=data[0].id;
//        document.getElementById('user-name').innerHTML=data[0].name;
//       document.getElementById('user-url').innerHTML=data[0].username;
//        });
//   }    
//});

//window.onscroll = function(){
//    
//})
if (offset >= heighy) {

    ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/users",
        onError: function (msg) {
            console.log(msg);

        },
        onSuccess: function (response) {

            var jsonObjArray = JSON.parse(response);

            console.log(element);
            var par = document.createElement('p');
            par.innerHTML = element.name;

            document.body.appendChild(par);

        }

    });
}