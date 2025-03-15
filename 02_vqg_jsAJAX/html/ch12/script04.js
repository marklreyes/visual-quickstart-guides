window.onload = initDate;

function initDate() {
	var allTags = document.getElementsByTagName("*");
	
	for (var i=0;i<allTags.length; i++) {
		if (allTags[i].className.indexOf("tz")==0) {
			showTheTime(allTags[i],allTags[i].className.substring(2));
		}
	}
}

function showTheTime(currElem,tzOffset) {
	var dayName = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");

	var thatTZ = new Date();
	var dateStr = thatTZ.toUTCString();

	dateStr = dateStr.substr(0,dateStr.length - 3);
	thatTZ.setTime(Date.parse(dateStr));
	thatTZ.setHours(thatTZ.getHours() + parseInt(tzOffset));
	
	currElem.innerHTML = showTheHours(thatTZ.getHours()) + showZeroFilled(thatTZ.getMinutes()) + showAmPm(thatTZ.getHours()) + dayName[thatTZ.getDay()];

	function showTheHours(theHour) {
		if (theHour == 0) {
			return 12;
		}
		if (theHour < 13) {
			return theHour;
		}
		return theHour-12;
	}
	
	function showZeroFilled(inValue) {
		if (inValue > 9) {
			return ":" + inValue;
		}
		return ":0" + inValue;
	}
	
	function showAmPm(thatTime) {
		if (thatTime < 12) {
			return " AM ";
		}
		return " PM ";
	}
}
/* DISPLAYING DATES BY TIMEZONE 

line 4:
	Inside the initDate() function, create the allTags variable. The command document.getElementsByTagName("*") is a handy trick.
	That asterisk tells JavaScript to return an array containing every tag on the page. Then, we can just loop through it looking for 
	things of interest.

lines 6 - 10:
	We begin a loop so we can walk through the page elements, represented by allTags. The allTags[i].className.indexOf("tz")==0 bit just
	means, "does the ith tag have an attribute class that starts with "tz" - if so, call showTheTime()."
	
	The showTheTime() function is passed two parameters: first the ith tag element, and second the part of the class attribute that is
	after the "tz", represented by substring(2). 

line 13:
	This function takes in the two parameters that were passed to showTheTime() in the previous step. Inside the function, they'll be
	called currElem and the tzOffset, respectively.
	
lines 16-17:
	We create a new date variable, thatTZ. The next line turns that date and time (based on UT) into a string, saving the
	result in dateStr.
	
line 19:
	Reset thatTZ to be based on UT instead of local time, so that we can then add the passed offset for the desired result.
	Unforuntately, JavaScript doesn't make this simple. We now have the universal time in string format, but if we just try to reset
	the time based on it, it'll oustmart us, knowing that we really want local time. What we need to do is take the string version of
	the date and time and strip off the last three characters, which are UTC.
	
line 20:
	Now that we've finally got the UT date stored, we need to add the passed number of hours that our desired time is offUT. As the
	time zone can be anywhere from +12 to -12, the time zone that was passed in can be anything from "-12" to "+12". We use parseInt()
	to turn that string into a number from -12 to 12, and we then add it to the current UT time. The result gives us our desired value:
	the correct date and time in that time zone.
	
lines 23:
	Build the time value that goes into the document by concatenating the result from the all the other functions and then setting
	the innerHTML property of currElem, thereby putting the result of the calculation into the document.
	
	The next three functions, showTheHours(), showZeroFilled(), showAmPm() are within the showTime() function so that the can share
	variables. As it turns out, they don't in this task, but they will in the next.
	
lines 25-28:
	Set up the function called showTheHours, which is passed the variable theHour. Then, if theHour is zero, return the result 12
	(meaning the hour is 12AM); otherwise continue with the function.
	
lines 29-32:
	If the result of the hour portion of the time is less than 13, then simply put that number into the variable theHour.
	Otherwise, return theHour minus 12 (which converts hours 13 and higher to their 12-hour-clock counterparts).
	
lines 35-40:
	This function is used to pretty up the output; when the minutes or seconds figure is 9 or under, it pads the figure with 
	a leading zero.
	
lines 42-47:
	This function adds AM or PM to the time. If the passed variable thatTime is less than 12, then the returned valu of the function is
	"AM"; otherwise it is 'PM". Note that there is a leading space in the AM or PM text string so things look nice.
	
TIPS:
	* There's n simple and straightforward way to deal with Daylight Savings Time. Some browsers just don't handle it correctly. 
	  And unfortunately, you're also at the mercy of computer users knowing how to set their computers to be aware when it's 
	  happening. Luckily,both windows and MAC OS X have the ability to automatically set the time based on an Internet time server, 
	  which does take Daylight Savings into account, so it's less of a problem than it used to be. The bad news: JavaScript doesn't 
	  have a way to get a that information from the OS, so it can't tell if you're in a time and place for it to apply.

	* It's easy to add another city to the HTML without touching a single line of JavaScript - and it wil all just work.
*/
