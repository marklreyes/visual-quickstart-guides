YAHOO.namespace("calendar");

YAHOO.calendar.init = function() {
	var today = new Date();

	document.getElementById("selMonth1").selectedIndex = today.getMonth();
	document.getElementById("selDay1").selectedIndex = today.getDate()-1;
	document.getElementById("selMonth2").selectedIndex = today.getMonth();
	document.getElementById("selDay2").selectedIndex = today.getDate()-1;

	document.getElementById("selMonth1").onchange = function() {changeDate(1)};
	document.getElementById("selDay1").onchange = function() {changeDate(1)};
	document.getElementById("selMonth2").onchange = function() {changeDate(2)};
	document.getElementById("selDay2").onchange = function() {changeDate(2)};

	YAHOO.calendar.cal1 = new YAHOO.widget.CalendarGroup("cal1Container");
	YAHOO.calendar.cal1.cfg.setProperty("pagedate",new Date());
	YAHOO.calendar.cal1.cfg.setProperty("selected","");
	YAHOO.calendar.cal1.cfg.setProperty("title","Select your desired check-in date:");
	YAHOO.calendar.cal1.render();
	YAHOO.calendar.cal1.selectEvent.subscribe(handleSelect1, YAHOO.calendar.cal1, true);

	YAHOO.calendar.cal2 = new YAHOO.widget.CalendarGroup("cal2Container");
	YAHOO.calendar.cal2.cfg.setProperty("pagedate",new Date());
	YAHOO.calendar.cal2.cfg.setProperty("selected","");
	YAHOO.calendar.cal2.cfg.setProperty("title","Select your desired check-out date:");
	YAHOO.calendar.cal2.render();
	YAHOO.calendar.cal2.selectEvent.subscribe(handleSelect2, YAHOO.calendar.cal2, true);

	document.getElementById("dateLink1").onclick = showCalendar1;
	document.getElementById("dateLink2").onclick = showCalendar2;
}

function showCalendar1() {
	YAHOO.calendar.cal2.hide();
	YAHOO.calendar.cal1.show();
}

function showCalendar2() {
	YAHOO.calendar.cal1.hide();
	YAHOO.calendar.cal2.show();
}

function handleSelect1(type,args,obj) {
	handleSelect(args[0],1);
}

function handleSelect2(type,args,obj) {
	handleSelect(args[0],2);
}

function handleSelect(dates,calNo) {
	var date = dates[0];
	var monthString = "selMonth" + calNo;
	var dayString = "selDay" + calNo;

	document.getElementById(monthString).selectedIndex = date[1]-1;
	document.getElementById(dayString).selectedIndex = date[2]-1;

	if (calNo==1) {
		YAHOO.calendar.cal1.hide();
	}
	else {
		YAHOO.calendar.cal2.hide();
	}
}

function changeDate(calNo) {
	var today = new Date();
	var monthString = "selMonth" + calNo;
	var dayString = "selDay" + calNo;
	if (calNo==1) {
		var thisCal = YAHOO.calendar.cal1;
	}
	else {
		var thisCal = YAHOO.calendar.cal2;
	}

	var month = document.getElementById(monthString).selectedIndex;
	var day = document.getElementById(dayString).selectedIndex + 1;

	thisCal.select((month+1) + "/" + day + "/" + today.getFullYear());
	thisCal.setMonth(month);
	thisCal.render();
}

YAHOO.util.Event.onDOMReady(YAHOO.calendar.init);

/* Adding a 2-up Calendar to Your Page 

LINES 16 - 21: A lot of variables are set up in the init() routine when the page is loaded, but we're concerned with the ones that handle
			   our new calendars. Here, we create cal1 (the first of the 2-up calendars) to be of type CalendarGroup and initialized to
			   display in the cal1Container div. When it's first displayed, the current month will be shown, so we need to pass today's date
			   but we tell the calendar to not select a default. Next we set the title, and render the calendar. Finally, we set the 
			   calendar's selectEvent handler to call the handleSelect1 function when a selection is made.

LINES 44 - 46: We end up in the handleSelect() function when the user picks a date off the calendar. When that happens, we figure out what
			   date was seleted using automatically passed in args parameter, and then send that to handleSelect().

LINES 53 - 65: Inside handleSelect(), we set the month and day pop-ups to match and then hide the calendar.

LINES 79 - 84: The changeDate() function does the reverse of the handleSelect() function: given a new pop-up selected date, it changes what
			   will display on the calendar when it's next displayed. The month and day variables are set based on the pop-ups, the year is
			   always set to the current year, and then select() and setMonth() are set to change the dates. Finally, render() is called
			   to render the calendar display for future use.

*/