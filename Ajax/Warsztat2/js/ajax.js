'use strict';
//
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

$(document).ready(function () {
    $("button").click(pobierzDane);

    function pobierzDane(options) {
        $.getJSON("http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl", function (data) {
            console.log(data.userId);
            console.log(data.userName);
            console.log(data.userURL);
        });


    };
});

