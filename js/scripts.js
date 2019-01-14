var add = function(num1, num2) {
	return num1 + num2;
};

var sub = function(num1, num2) {
	return num1 - num2;
};

var mul = function(num1, num2) {
	return num1 * num2;
};

var div = function(num1, num2) {
	return num1 / num2;
};

var num1 = parseInt(prompt("Enter a number:"));
var num2 = parseInt(prompt("Enter another number:"));
var result = div(num1, num2);

alert(result);
