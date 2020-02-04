// variabili con funzionalità moment.js
//actualDate = moment( '2018-' + '01-' + '01' );
// actualMonth = actualDate.format('MMMM');
//  console.log(actualMonth);
//  var source = $('#entry-template').html();
//  var template = Handlebars.compile(source);
  //scoperti i giorni nel mese serve un ciclo for per stamparli da 1 a 31
//  for (var i = 1; i <= 31; i++) {
//  $('.days').append(' '+ i + ' ');
//  }
//  $('.actualMonth').append(actualMonth);


$(document).ready(function () {
//variabile yaer è fissa a 2018
  var thisMonth = 0;
  var year = 2018;
  var baseMonth = moment(
    {
      year: year,
      month: thisMonth
    }
  );

  // console.log(baseMonth.format('MMMM'));
  // console.log(baseMonth.format('YYYY-MM'));
  //richiamo funzioni stamap mese e festività
  printMonth(baseMonth);
  printHoliday(baseMonth);

  // cliccando su next si va avanti di un mese utilizzando add
  $('#next').click(function () {
  //richiamo le funzioni sia per le festività e il mese. Cambia il mese nell'h1 e i giorni relativi al mese corrente
    var thisMonth = $('h1').attr('data-this-month');
    var date = moment(thisMonth).add(1, 'months');
    if (thisMonth =='2018-12') {
      alert('stop');
      var date = moment(thisMonth).subtract(11, 'months');
    }

    printMonth(date);
    printHoliday(date);
  });
//cliccando su prev si torna indietro di un mese con subtract
  $('#prev').click(function () {
    var thisMonth = $('h1').attr('data-this-month');
    var date = moment(thisMonth).subtract(1, 'months');
    if(thisMonth=='2018-01') {
      alert('stop');
      thisMonth ='2018-01'
    }
    printMonth(date);
    printHoliday(date);
//richiamo funzioni stampa festività e mese
  });

});

// FUNCTIONs
//funzione che stampa i giorni
function printMonth(month) {
  $('.days').html('');
  //inserisco h1 dinamico
  $('h1').text(month.format('MMMM YYYY'));
  $('h1').attr('data-this-month', month.format('YYYY-MM'));

  //daysInMonth trova i giorni nel mese
  var daysInMonth = month.daysInMonth();

  // faccio un ciclo che parte da 1 fino ai giorni trovati da daysInMonth
  for (var i = 1; i <= daysInMonth ; i++) {
    // console.log(i);

    var source = $('#entry-template').html();
    var template = Handlebars.compile(source);
    var context = {
      day: i,
      month: month.format('MMMM'),
      dateComplete: month.format('YYYY-MM') + '-' + addZero(i)
    };
    var html = template(context);
    $('.days').append(html);
  }
}
//funzione che aggiunge zero
function addZero(num) {
  if(num < 10) {
    return '0' + num;
  }
  return num;
}

//funzione che stampa le festività
function printHoliday(month) {
  // console.log(month.month());
  // console.log(month.year());
  $.ajax(
    {
      url: 'https://flynn.boolean.careers/exercises/api/holidays',
      method: 'GET',
      data: {
        year: month.year(),
        month: month.month()
      },
      success: function (data) {
        // console.log(data.response);
        //variabile in cui dal server si hanno le festività con nome e data
        var holidays = data.response;
        //bisogna confrontare i giorni e se coincidon ocon le festività aggiungiamo la classe red

        //ciclo sugli elementi di holidays
        for (var i = 0; i < holidays.length; i++) {
          var thisHoliday = holidays[i];
          // console.log(thisHoliday);
          var thisHolidayData = thisHoliday.date;

          //metodo con data attr
          $('li[data-date-complete="'+ thisHolidayData  +'"]').addClass('red');
          $('li[data-date-complete="'+ thisHolidayData  +'"]').find('.nome-festivita').append(thisHoliday.name);
          // 'li[data-date-complete="2018-01-01"]'
        }
      },
      error: function () {
        alert('errore');
      }
    }
  );
}
