$(document).ready(function () {

    
    $.getJSON("https://blockchain.info/pl/ticker", function(data) {
      
        $.each(data, function(index){
            zbudujListeWalut(index);
         
      });
   
});
    
    function pobierzBtc(ilosc, waluta) {
        $.getJSON('https://blockchain.info/tobtc?currency='+waluta+'&value='+ilosc, function(data) {
           $('span').text('Wartość: ' + data);       
                  });
    }
    function zbudujListeWalut(waluta) {
        $('#waluta').append('<option>'+waluta+'<option>');
    }

 $('#oblicz').click(function() {
     event.preventDefault();
     var ilosc = $('#ilosc').val();
     var waluta = $('#waluta').val();
     pobierzBtc(ilosc, waluta);
 });  
    
    
    
//$("button").click(pobierzDane);
//
//
//  function pobierzDane(options) {
//      $.getJSON("https://blockchain.info/pl/ticker", function (data) {
//          console.log(data.PLN.sell);
//
//
//          var sprzedaz = document.getElementById('sell').innerHTML = "sell: " + data.PLN.sell;
//          var kupno = document.getElementById('buy').innerHTML = "buy: " + data.PLN.buy;
//
//          if (data.PLN.sell > sprzedaz) {
//
//} else if (data.PLN.sell == sprzedaz) {
//              ($('#sell').append("<i class='fa fa-arrows-h' aria-hidden='true'></i>"));
//          } else {
//              ($('#sell').append("<i class='fa fa-arrow-down' aria-hidden='true'></i>"));
//          }
//
//
//           if (data.PLN.buy > kupno) {
//
//               ($('#buy').append("<i class='fa fa-arrow-up' aria-hidden='true'></i>"));
//            } else if (data.PLN.buy == kupno) {
//               ($('#buy').append("<i class='fa fa-arrows-h' aria-hidden='true'></i>"));
//           } else {
//                ($('#buy').append("<i class='fa fa-arrow-down' aria-hidden='true'></i>"));
//           }
//
//       });
//
//   }
//
//          if (data.PLN.buy > data.PLN.last) {
//
//              ($('#buy').append("<i class='fa fa-arrow-up' aria-hidden='true'></i>"));
//           } else if (data.PLN.buy == data.PLN.last) {
//               ($('#buy').append("<i class='fa fa-arrows-h' aria-hidden='true'></i>"));
//           } else {
//               ($('#buy').append("<i class='fa fa-arrow-down' aria-hidden='true'></i>"));
//           }

       });

