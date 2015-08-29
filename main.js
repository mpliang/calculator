var displaySum = 0;
var displayNum = "";
var sum = 0;
var currentValue;
var go = false;
var clear = false;

$(document).ready(init);

function init() {
    $('#display').text(displaySum);
	$('.number').on('click', buttonClicked);
	$('.operator').on('click', operatorClicked);
	$('.other').on('click', otherClicked);
	$('#clear').on('click', reset);
	
}

function buttonClicked(event) {
	if ($('#display').text() === '0' || clear) {
		$('#display').text($(this).data('id'));
		clear = false;
	} else {
		$('#display').text($('#display').text().concat($(this).data('id')));
	}
}

function operatorClicked(event) {
	console.log($(this).data('id'));

	if (go) {
      $('#display').text(evaluate());
    }

	switch ($(this).data('id')) {
		case 'mult': sign = '*';
		break;
		case 'div': sign = '/';
		break;
 		case 'add': sign = '+'; 
 		break;
		case 'sub': sign = '-';
		break;
		case 'equals': 
		$('#display').text(evaluate());
   		reset();
   		break;
		default: console.log('fuck');
	}
	currentValue = $('#display').text();
	// console.log(displayNum);
	// console.log(currentValue);
	go = true;
	clear = true;

}
function otherClicked(event) {

	var operator = $(this).data('id');

	switch (operator) {
		case 'clear': reset();
		break;
		case '+/-': $('#display').text('-' + $('#display').text());
		break;
		case 'percent': $('#display').text(+$('#display').text() * (1/100));
		break;
		default: console.log('nope');
	}
}

function evaluate() { 
  var newValue = parseFloat($('#display').text());
  var result;
  switch (sign) {
    case '+': result = +currentValue + +newValue; break;
    case '−': result = currentValue - newValue; break;
    case '*': result = currentValue * newValue; break;
    case '/': result = currentValue / newValue; break;
    default: result = newVal;
  }
  return result;
}

function reset() {
		console.log('reset');
		displayNum = 0;
		displaySum = 0;
		clear = true;
  		go = false;
		$('#display').text(displaySum);
}