window.onload = initForm;
window.onunload = function() {};

function initForm() {
	document.getElementById("newLocation").selectedIndex = 0;
	document.getElementById("newLocation").onchange = jumpPage;
}

function jumpPage() {
	var newLoc = document.getElementById("newLocation");
	var newPage = newLoc.options[newLoc.selectedIndex].value;

	if (newPage != "") {
		window.location = newPage;
	}
}
/* 
SELECT-AND-GO NAVIGATION 

line 1:
	When the window loads, call the initForm () function
	
line 2:
	When the window unloads, is closed, or the browser goes to another function, we call an anonymous function.
	
	An anonymous function is a function that doesn't have a name.
	
	It's here b/c we have to set onunload to something, otherwise, the onload event isn't triggered when the 
	browser's back button is clicked, b/c the page is cached in some browsers.
	
	The anonymous part of the term refers to the fun fact that there's no name between function and ().
	This is the simplest way to trigger onunload but not have it do anything.
	
	The braces are like any other function, they'd hold the contents of the function.
	They're empty here b/c this particular function does nothing.
	
lines 5 - 6:
	In the initForm() function, the first line gets the menu on the HTML page, which has the id of newLocation, 
	and sets its selectedIndex property to zero, which forces it to say "Select a topic".
	
lines 10 - 11:
	Start from the code inside the brackets and work outward.
	
	The object newLoc.selectedIndex will be a number from 0 to 5 (b/c there's six possible menu choices; 
	remember that JavaScript arrays are zero-based).
	
	Given that number, we next get the value for the corresponding menu option, which is the name of the Web page 
	we want to jump to. Then we assign the result to the variable newPage.
	
lines 12 - 14:
	This conditional first checks to see that newPage is not equal to nothing (that is, nto empty)
	If newPage has a value, then tell the window to go to the URL specified by the menu option chosen.
	
TIPS:
	- The nicest thing about this script is that once the JavaScript function is loaded, there's no need to modify the function 
	  when pull-down options are added, modified or changed. Only the values of the options (ie the URLs that the menu options jump to) 
	  need to be set.
	
	- Another way to work around cached pages (causing onload events to not be triggered when the back button is clicked),
	  window.onpageshow = initForm;
	  
	  We didn't use this b/c it doesn't work in Safari, but if you're specifically targeting Firefox, it's worth knowing that there 
	  are two new non-standard window event handlers, onpageshow and onpagehide, which can be used to handle events that we only 
	  want triggered in Firefox.
	  
	- We call these "select-and'go" menus, which isn't especially elegant but clearly tells you what's going on. 
	 You may see other names for the same functionality. EX: Dreamweaver calls them "jump menus."
*/
