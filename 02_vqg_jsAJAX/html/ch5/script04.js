window.onload = initLinks;

function initLinks() {
	for (var i=0; i<document.links.length; i++) {
		document.links[i].target = "content";
	}
}

/* 
SETTING A TARGET 

line 1:
	When the page loads, call the initLinks() function

lines 4 - 6:
	The initLinks() function loops through all of the links on the page.
	When the loop finds a link, it sets the target property to the string "content"
	
TIP:
	- If JavaScript is turned off, visitors will find the first link that gets clicked loads into the navigation frame, not the content frame.
*/
