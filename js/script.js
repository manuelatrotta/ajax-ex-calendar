$(document).ready(function() {
//  alert('hello');
actualDate = moment( '2018-' + '01-' + '01' );
days = actualDate.daysInMonth();
console.log(actualDate);
console.log(days);

$.ajax(
  {
    'url':'https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0',
    'method': 'GET',
    'success': function (data) {
      console.log(data);
    },
    'error': function (request, state, errors) {
      alert('error' + errors);
    }
  });

























});
