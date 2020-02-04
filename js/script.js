
//actualDate = moment( '2018-' + '01-' + '01' );
//  days = actualDate.daysInMonth();
//  console.log(actualDate);
//  console.log(days);
// actualMonth = actualDate.format('MMMM');
//  console.log(actualMonth);
//  var source = $('#entry-template').html();
//  var template = Handlebars.compile(source);
  //scoperti i giorni nel mese serve un ciclo for per stamparli da 1 a 31
//  for (var i = 1; i <= 31; i++) {
//  $('.days').append(' '+ i + ' ');
//  }
//  $('.actualMonth').append(actualMonth);


$(document).ready(function() {
  //month = 1 per conteggio che parte da 1 e arriva a 12 mesi
  var month = 1;
  var url = 'https://flynn.boolean.careers/exercises/api/holidays?year=2018&month='+ (month-1);
  calcMonths(month);

  $.ajax(
    {
    'url': url ,
    'method': "GET",
    'success': function(data) {
      for (var i = 0; i < data.response.length; i++) {
        $('li').each(function() {
          if (data.response[i].date == $(this).attr('data')) {
            $(this).addClass('red');
          }
        });
      };
    },
    'error': function (richiesta, stato, errori) {
      alert("Alert: " + errore);
    }
  }
  );


});

// funzioni
function calcMonths(month) {
  var daysMonth = moment('2018-' + month).daysInMonth();
  console.log(daysMonth);
  for (var i = 0; i < daysMonth; i++) {
    var source = $('#entry-template').html();
    var template = Handlebars.compile(source);
    var context = {
      data : i+1,
      month : moment().month(month -1).format('MMM'),
    };
    var html = template(context);
    $('.days').append(html);
  }
}
