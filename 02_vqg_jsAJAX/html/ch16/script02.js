$(document).ready(function() {
	$("#theMenu").accordion({
		alwaysOpen: false,
		active: false,
		autoHeight: false,
		animated: false,
		header: ".menuLink"
	});
});

/* CREATING ACCORDIAN MENUS 

Line 1:
	If we want to run something when the page loads, it needs to be inside this function.
	
Line 2:
	Take the id from the top-level ul and then apply the built-in accordian() method to it.
	
Lines 3-7:
		alwaysOpen: should the accordian always have an option open?
		active: if the accordian should have an option open, set this to the class of the option that should be open when the page loads.
		autoHeight: forces the accordian area to always have a fixed height(based on the largest area needed).
		animated: if you want menu items to display with an animated effect, set this to the name of the desired effect (ie slide, easeslide).
		header: how jQuery can identify the headers for each menu. Here, they all have the class "menuLink" and clicking on one opens submenu.
		
TIPS:
	- There are additional options for accordian() besides the ones above-those are only where we wanted to override the default. If we'd
	wanted the accordian to open when the user hovered the house over a menu label (versus only when the user clicks a menu label), all we'd
	do is add this to the last step: event "mouseover"
	
	
*/
