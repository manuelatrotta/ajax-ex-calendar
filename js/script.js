$(document).ready(function() {
//  alert('hello');

var currentMonth = moment().format('YYYY-MM');
console.log(currentMonth);

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
