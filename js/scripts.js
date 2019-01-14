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

// var weight = parseInt(prompt("Enter your weight (kg):"));
// var height = parseInt(prompt("Enter your height (m)"));
//
// var result = weight / (height * height);
//
// alert(result);



// var cels = parseInt(prompt("Enter the temperature in celsius:"));
//
// var result = (cels * (9 / 5)) + 32;
//
// alert(result);
