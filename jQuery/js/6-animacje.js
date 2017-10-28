$(function () {
    'use strict';
//   $("#first").hide(3000).show(3000); 
    
//    $("#first").fadeOut(3000).fadeIn(3000); 
//     $("#first").slideUp(3000).slideDown(3000); 
    
    function callbackZwrotny() {
            console.log("Zakonczona pierwsza funkcje");
      $("#first").animate({"font-size" : "1em", "margin-left" : "250px"}, 3000);  
      

    }; 
//    callbackZwrotny();
     $("#first").animate({"font-size" : "4em", "margin-left" : "0"}, 3000, callbackZwrotny);   
   
    
});