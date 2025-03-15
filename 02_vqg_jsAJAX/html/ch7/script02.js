window.onload = initForm;

function initForm() {
	document.getElementById("months").selectedIndex = 0;
	document.getElementById("months").onchange = populateDays;
}

function populateDays() {
	var monthDays = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
	var monthStr = this.options[this.selectedIndex].value;
	
	if (monthStr != "") {
		var theMonth = parseInt(monthStr);
					
		document.getElementById("days").options.length = 0;
		for(var i=0; i<monthDays[theMonth]; i++) {
			document.getElementById("days").options[i] = new Option(i+1);
		}
	}
}

/* CHANGING MENUS DYNAMICALLY 

line 9:
	This new array contains 12 values for the 12 months, with the correct number of days in each month. 
	The array is stored in the variable monthDays.

line 10:
	Use this (the month the user picked from the first menu) to get the value from the menu, and storing it in monthStr.
	
lines 12 - 13:
	If the value of monthStr is "", then the user chose the word "Month" in the menu rather than a month name.
	These lines check to see that the value of monthStr is not "";
	If that condition is true, then monthStr is turned into a number with the parseInt method, and the variable theMonth is set to the result.
	
lines 15 - 17:
	Start changing the day menu by setting its options length to zero.
	That clears out whatever happened to be there before. so we're starting fresh.
	
	The loop simply goes through the number of days in whatever the chosen month is, adding a 
	new option to the menu for each day. Option is passed i+1, so that it shows 1 to 31 instead of 0 to 30.
	
TIP:
	- The monthDays array contains the number of days in each month, which works fine except in the case of leap years. 
	  To get your script to work in a leap year, you'll need to change the February value in  monthDays.

*/
