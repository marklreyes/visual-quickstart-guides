YAHOO.namespace("calendar");

YAHOO.calendar.init = function() {
	YAHOO.calendar.cal1 = new YAHOO.widget.Calendar("cal1Container");
	resetCal();

	document.getElementById("resetCal").onclick = resetCal;
	document.getElementById("getSelectedDate").onclick = showSelected;

	function resetCal() {
		YAHOO.calendar.cal1.cfg.setProperty("pagedate",new Date());
		YAHOO.calendar.cal1.cfg.setProperty("selected","");
		YAHOO.calendar.cal1.render();
	}
}

YAHOO.util.Event.onDOMReady(YAHOO.calendar.init);

function showSelected() {
	var dateString = "Please select a date";
	var pickedDate = YAHOO.calendar.cal1.getSelectedDates()[0];
	if (pickedDate) {
		var outDate =  YAHOO.calendar.cal1.Locale.WEEKDAYS_LONG[pickedDate.getDay()] + ", " + YAHOO.calendar.cal1.Locale.MONTHS_LONG[pickedDate.getMonth()] + " " + pickedDate.getDate() + ".";
		dateString = "We're looking forward to seeing you on " + outDate;
	}
	document.getElementById("datePicked").innerHTML = dateString;
}

/* ADDING A CALENDAR TO YOUR PAGE 

LINE 1: This line of code tells the browser that we're going to be working with variables and objects that have to do with YUI's calendar. 
        This way, we not only can't stop on non-YUI code, we can't even interfere with code from YUI's other modules.

LINES 3 - 14: This code, inside the init() function, is all called when the page is first loaded. We start off by ceating a new calendar
			  object: cal1. We also set the event handlers for two links: resetCal, which resets the dates on the calendar, and getSelectedDate
			  which allows a user to choose a date on the calendar. We end up by defining our reset function, which will set the date back to 
			  its default value and render the calendar.
		
LINES 20 - 26: Sometimes, you'll want your web application to do something that isn't already built in to YUI, and that's what's happening
			   here. We want our picked date to display in a friendly manner on the screen after the user selects a date.
			   
			   Because users can do all kinds of wacky things, we want to make sure that they actually did choose a date. On the off chance
			   they didn't, we set our default output to prompt them to try again.
			   
			   In lines 3-14, we told the showSelected() function that it was to handle when the user was done, and here's the code. The YUI
			   toolkit has the date we want stored in YAHOO.calendar.cal1. getSelectedDates()[0]. That's not the friendliest (or the shortest,
			   or most memorable) variable, so we put it into the pickedDate variable instead.
			   
			   If pickedDate exists, they chose a date, so we set outdate to be the string that we want displayed on the screen. We could use
			   the date methods you learned in Chapter 12, but it's simpler to use the ones built into 
			   YUI: YAHOO.calendar.cal1.Locale.MONTHS_LONG are arrays that contain the nsames of the days of the week and the months of 
			   the year, respectively. And to finish, we set datePicked's innerHTML to display our message.	

*/
