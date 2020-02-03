$(document).ready(function() {
//  alert('hello');
actualDate = moment( '2018-' + '01-' + '01' );
  days = actualDate.daysInMonth();
  console.log(actualDate);
  console.log(days);
 actualMonth = actualDate.format('MMMM');
  console.log(actualMonth);
  var source = $('#entry-template').html();
  var template = Handlebars.compile(source);
  //scoperti i giorni nel mese serve un ciclo for per stamparli da 1 a 31
  for (var i = 1; i <= 31; i++) {
  $('.days').append(' '+ i + ' ');
  }
  $('.actualMonth').append(actualMonth);

$.ajax(
  {
    'url':'https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0',
    'method': 'GET',
    'data': {
      year: 2018,
      month : 0,
    },
    'success': function(date,stato) {
      console.log(date.response);
    },
    'error': function (request, state, errors) {
      alert('error' + errors);
    }
  });

























});
