window.onload = showTheTime;

function showTheTime() {
	var now = new Date();

	document.getElementById("showTime").innerHTML = showTheHours(now.getHours()) + showZeroFilled(now.getMinutes()) + showZeroFilled(now.getSeconds()) + showAmPm();
	setTimeout(showTheTime,1000);
	
	function showTheHours(theHour) {	
		if (show24Hour() || (theHour > 0 && theHour < 13)) {
			return theHour;
		}
		if (theHour == 0) {
			return 12;
		}
		return theHour-12;
	}
	
	function showZeroFilled(inValue) {
		if (inValue > 9) {
			return ":" + inValue;
		}
		return ":0" + inValue;
	}

	function show24Hour() {
		return (document.getElementById("show24").checked);
	}
	
	function showAmPm() {
		if (show24Hour()) {
			return "";
		}
		if ((now.getHours() < 12)) {
			return " AM";
		}
		return " PM";
	}
}
/* CONVERTING 24-HOUR TO 12-HOUR TIMESTAMP 

line 6: 
	- Building the time valye dusplayed on the page by concatenating the result of the other functions. The result gets put into the
	  innerHTML property of showTime.
	
line 7:
	- This bit of code tells the display to update every second.
	
line 9:
	- Set up a function called showTheHours, containg the variable theHour.
	
lines 10 - 17:
	- These conditionals say that if the user wants to show 24-hour time, or if the result of the hour portion of the time is greater
	  than zero but less than 13, then simply return the variable theHour. Remember that || operator means a logical or Otherwise, if 
	  theHour is zero, then return with the result 12 (when the hour is 12am); otherwise return theHour minus 12 (which converts
	  hours 13 and higher to their 12-hour counterparts).
	  
lines 26-28:
	- This function returns a value based on which radio button on the page the user has checked. If show24 is selected, then it should
	  return a true result; otherwise it returns a false result.
	  
lines 31 - 37:
	- The showAmPm() function adds the AM or PM to the 12-hour time. If the function show24Hour is true, it returns nothing, and goes
	  to the next funtion. If the hours ortion of the now variable is less than 12, then the value of the function is AM; otherwise it is
	  PM. Again, there is a leading space in the AM or PM text string, so things look nice.
	  
*/
