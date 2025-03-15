window.onload = showDays;

function showDays() {
	var allTags = document.getElementsByTagName("*");
	
	for (var i=0;i<allTags.length; i++) {
		if (allTags[i].className.indexOf("daysTill") > -1) {
			allTags[i].innerHTML = showTheDaysTill(allTags[i].id);
		}
	}
	
	function showTheDaysTill(thisDate) {
		var theDays;
		
		switch(thisDate) {
			case "anniv":
				theDays = daysTill(5,6);
				break;
			case "bday":
				theDays = daysTill(8,7);
				break;
			case "xmas":
				theDays = daysTill(12,25);
				break;
			default:
		}
		return theDays + " ";
	}

	function daysTill(mm,dd) {
		var now = new Date();
		var inDate = new Date(now.getFullYear(),mm-1,dd);

		if (inDate.getTime() < now.getTime()) {
			inDate.setYear(now.getFullYear()+1);
		}

		return (Math.ceil(dayToDays(inDate) - dayToDays(now)));
	}

	function dayToDays(inTime) {
		return (inTime.getTime() / (1000 * 60 * 60 * 24));
	}
}
/* CREATING A COUNTDOWN 
line 4: 
	- Create a new allTags array and fill it with every tag on the page

lines 6-10:
	- This loop scans through allTags to see if the string daysTill is found in the class attribute of any tags on the page. Remember
	  that a tag coulD have multiple class attributes (ie class="firstClass daysTill somethingElse fourthThing").
	  
	- If we found daysTill, we call the showDaysTill() function, which is passed one parameter: that tag's id (which stores what date
	  to put up on the page). That function returns a value that is then put into the innerHTML.

lines 15-26:
	- Using the value of thisDate to test against the three case statements.
		* For the anniv case, we're setting theDays to May 6(5,6 is the numerical representation)
		* For bday, we're setting theDays to August 7
		* For xmas, theDays gets set to December 25

line 27:
	- The showTheDays() function ends by returning the number of days followed by a space. This is to work around a problem in IE: it
	  eats the spaces in the HTML. If the script doesn't return a space at the end, the number runs into the word "days". If you just
	  stuck the word "days" into this function, then there'd need to be a space after that, and so on.

lines 30-32:
	 - This step shows the daysTill() function, which receives the dates from the case statements in step 3. Then, we create the now and
	   inDate variables. The latter variable is filled with the current year, but with the month (with 1 subtracted from it to get it
	   right.

lines 34-36:
	- We then check that date against today. If that date in this year has already passed, we incremement the year, going for the 
	  year's instead.

lines 38-39:
	- Calculating the number of days between inDate and the current date. The Math.ceil() method makes sure that our result is a 
	  whole number.
	  
lines 41-43:
	- JavaScript stores dates in milliseconds since January 1, 1970. In order to compare two dates, change this to be the number of days
	  since January 1, 1970. First, get the number of milliseconds in a day by multiplying 1000 (the number of milliseconds in a second), 
	  by 60 again (number of minutes in an hour), and then by 24 (number of hours in a day). Dividing the number of milliseconds returned
	  by getTime() by this number gives the number of days since January 1, 1970.

*/
