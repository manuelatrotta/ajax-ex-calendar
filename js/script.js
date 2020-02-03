$(document).ready(function() {
//  alert('hello');
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
