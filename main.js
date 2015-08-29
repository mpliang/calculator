var displaySum = 0;
var displayNum = "";
var sum = 0;
var currentValue;
var isOperating = false;
var toBeCleared = false;

$(document).ready(init);

function init() {
    $('#display').text(displaySum);
	$('.number').on('click', buttonClicked);
	$('.operator').on('click', operatorClicked);
	$('.other').on('click', otherClicked);
	$('#clear').on('click', reset);
	
}

function buttonClicked(event) {
	if ($('#display').text() === '0' || toBeCleared) {
		$('#display').text($(this).data('id'));
		toBeCleared = false;
	} else {
		$('#display').text($('#display').text().concat($(this).data('id')));
	}
}

function operatorClicked(event) {
	console.log($(this).data('id'));

	if (isOperating) {
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
		default: console.log('fuck');
	}
	currentValue = $('#display').text();
	console.log(currentValue);
	isOperating = true;
	toBeCleared = true;

}
function otherClicked(event) {

	var operator = $(this).data('id');

	switch (operator) {
		case 'clear': reset();
		break;
		default: console.log('nope');
	}
}

function evaluate() { 
  var newVal = parseFloat($('#display').text());
  var result;
  switch (sign) {
    case '+': result = +currentValue + +newVal; break;
    case '−': result = currentValue - newVal; break;
    case '*': result = currentValue * newVal; break;
    case '/': result = currentValue / newVal; break;
    default: result = newVal;
  }
  return result;
}

function reset() {
		console.log('reset');
		displayNum = 0;
		displaySum = 0;
		toBeCleared = true;
  		isOperating = false;
		$('#display').text(displaySum);
}