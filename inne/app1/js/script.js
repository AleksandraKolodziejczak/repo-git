$(function() {



//function pobierzDane() {
    
    $.getJSON("../package.json", function(data) {
     console.log(data.author); 
        var autor = data.author;
        $('span').append(autor);  
//       $( "body" ).html( "<p>Autorem jest: + autor" );  
        
       
    });
 

   
});
//$(function() {
//  $.getJSON("../package.json", function(data) {
//      wstaw(data.author);
//  });
//function wstaw(autor) {
//    $('span').append(autor);
//}
//});