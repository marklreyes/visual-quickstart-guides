window.onload = initDate;

function initDate() {
	var now = new Date();
	document.getElementById("dtField").innerHTML = timeString(now.getHours());

	function timeString(theHour) {
		if (theHour < 5) {
			return "What are you doing up so late?";
		}
		if (theHour < 9) {
			return "Good Morning!";
		}
		if (theHour < 17) {
			return "No surfing during working hours!";
		}
		return "Good Evening!";
	}
}
/* CUSTOMIZING A MESSAGE FOR THE TIME OF DAY 

You can take the same technique from script02.js to customize a message to the user, depending on the time of day.

lines 8 - 9:
	We begin the new code in this script by starting a conditional test. Earlier in this script, the getHours() method extracted
	theHour from the now variable and here we test to see if that number is less than 5 (which corresponds to 5AM, since numbering
	in JavaScript starts at midnight).
	
	If it is before 5AM, the script scolds the user by writing this message to the document window.
	
	The rest of script repeats the above line, adjusting it for the time of day and writing out a different message. If it's between 
	5AM and 9AM, the script says "Good Morning!" between 9AM nad 5PM, it says "No surfing during working hours!"; and after 5PM
	it says "Good Evening!"

*/
