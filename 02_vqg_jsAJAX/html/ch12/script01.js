window.onload = initDate;

function initDate() {
	var dayName = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
	var monName = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
	
	var now = new Date();
	var dtString = dayName[now.getDay()] + ", " + monName[now.getMonth()] + " " + now.getDate();

	document.getElementById("dtField").innerHTML = dtString;
}

/* PUTTING THE CURRENT DATE INTO A WEB PAGE 

Shows how to get the current date, convert it from a number into a standard date, and then write the result to a document window.

line 1:
	When the document loads, call initDate()

line 4:
	Create an array that contains the days of the week. Make sure to use commas to separate the items in the array; and because 
	they are text strings, each item must be enclosed in quotes. The array gets assigned to the variable dayName.

line 5:
	Same as line 4, with month names and assigning them to a variable of monName.

line 7:
	The last thing to do in the first section is to tell JavaScript to create a new Date object, call it now, and fill it with 
	the current date.
	
line 8:
	The object dayName[now.getDay()] is read from right to left; getDay() is the JavaScript method that gets the day of the week,
	and asking now for it gets today's day of the week. The numerical result references one of the entries in the array dayName.
	
	Next, concatenate a comma and a space to the text string that we're building, and then we concatenate the next expression, 
	which is the month name, expressed by the object monName[now.getMonth()]. This gets the month in much the same fashion as 
	getting the day name; and references one of the entries in the array monName.
	
	A space is concatenated next, and we end with the object now.getDate(), which returns the date of the month. All of this is assigned
	to the dtString variable.

line 10:
	The id dtField is in the HTML page (the HTML is trivial, so we haven't included it here); it's within a <span> tag, like so:
	<h1>Today is <span id="dtField"></span>.</h1>
	
	The JavaScript sets the innerHTML property of dtField to the value of dtString.



*/
