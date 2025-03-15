window.onload  = initDate;

function initDate() {
	var now = new Date();

	if (now.getDay() > 0 && now.getDay() < 6) {
		var dtString = "Sorry, it's a weekday.";
	}
	else {
		var dtString = "Hooray, it's a weekend!";
	}
	
	document.getElementById("dtField").innerHTML = dtString;
}

/* WORKING WITH DAYS 

line 4:
	Fill the variable now with the current date.
	
line 6:
	This extracts the numerical day of the week from the now variable and asks if it is greater than 0 (remember that Sunday is 0).
	Next the line uses the && operator, which is a logical and (ie both parts have to be true), and asks if now is less than 6,
	which is th number for Saturday.
	
line 7:
	If the result of the last expression is greater than 0 and less than 6, it has to be between 1 and 5, which is to say, from
	Monday to Friday, so the script puts a string that effect into dString.
	
lines 9 - 10:
	If we failed the test in the step 2, it must be a weekend, and we put a string with the happy news in dtString.
	
line 13:
	Finally, we set the innerHTML property of dtField to the value of dtString, just as in the previous example. 

*/