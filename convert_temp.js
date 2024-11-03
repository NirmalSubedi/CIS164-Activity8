"use strict";
const $ = selector => document.querySelector(selector);

/*********************
*  helper functions  *
**********************/
const calculateCelsius = temp => (temp-32) * 5/9;
const calculateFahrenheit = temp => temp * 9/5 + 32;

const toggleDisplay = (label1Text, label2Text) => {
	$("#degree_label_1").textContent = label1Text;
	$("#degree_label_2").textContent = label2Text;
	$("#degrees_computed").value = "";
	$("#degrees_entered").focus();
}

/****************************
*  event handler functions  *
*****************************/
const convertTemp = () => {   
	const temp = $("#degrees_entered").value
	const errorMessageElement = document.createElement("span");
		const errorMessage = document.createTextNode("You must enter a vaild number for degrees.");
		errorMessageElement.appendChild(errorMessage);
		const mainElement = $("#degrees_entered").parentNode.parentNode;
		if (isNaN(temp) || temp <= 0) {
		mainElement.appendChild(errorMessageElement);
	}
	else {
		if ($("span") != null ) {
			$("span").remove();
		}
	if ($("#to_celsius").checked == true) {
		$("#degrees_computed").value = calculateCelsius(temp).toFixed(0);
	}
	if ($("#to_fahrenheit").checked == true) {
		$("#degrees_computed").value = calculateFahrenheit(temp).toFixed(0);
	}
}
$("#degrees_entered").focus();
$("#degrees_entered").select();
};

const toCelsius = () => toggleDisplay("Enter F degrees:", "Degrees Celsius:");
const toFahrenheit = () => toggleDisplay("Enter C degrees:", "Degrees Fahrenheit:");

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#convert").addEventListener("click", convertTemp);
    $("#to_celsius").addEventListener("click", toCelsius);
    $("#to_fahrenheit").addEventListener("click", toFahrenheit);
	
	// move focus
	$("#degrees_entered").focus();
});