'use strict';

//function ajax(ajaxOptions) {
//
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

function pobierzDane() {
    $.getJSON("http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl", function(data) {
     console.log(data); 
        document.getElementById('user-id').innerHTML=data.userId;
        document.getElementById('user-name').innerHTML=data.userName;
        document.getElementById('user-url').innerHTML=data.userURL;
    });
};
    

