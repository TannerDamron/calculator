// ### Back-end ###

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

 // ### UI ###

$(document).ready(function() {
	$("form#add").submit(function(event) {
		event.preventDefault();
		var num1 = parseInt($("#add1").val());
		var num2 = parseInt($("#add2").val());
		var result = add(num1, num2);
		$("#output").text(result);
	});

	$("form#subtraction").submit(function(event) {
		event.preventDefault();
		var num1 = parseInt($("#sub1").val());
		var num2 = parseInt($("#sub2").val());
		var result = sub(num1, num2);
		$("#output").text(result);
	});

	$("form#multiply").submit(function(event) {
		event.preventDefault();
		var num1 = parseInt($("#mult1").val());
		var num2 = parseInt($("#mult2").val());
		var result = mul(num1, num2);
		$("#output").text(result);
	});

	$("form#divide").submit(function(event) {
		event.preventDefault();
		var num1 = parseInt($("#div1").val());
		var num2 = parseInt($("#div2").val());
		var result = div(num1, num2);
		$("#output").text(result);
	});
});

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
