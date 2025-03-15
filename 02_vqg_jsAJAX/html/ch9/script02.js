window.onresize = resizeFix;

if (document.layers) {
	var origWidth = window.innerWidth;
	var origHeight = window.innerHeight;
}

function resizeFix() {
	if (document.layers) {
		if (window.innerWidth != origWidth || window.innerHeight != origHeight) {
			window.location.reload();
		}
	}
}
/* THE ONRESIZE EVENT 

line 1:
	- The event handler is attached to the window object and calls the resizeFix function.

line 3:
	- We only want to do the following if the has Netscape 4.x, and this is the simplest way to check that. 
	  The document.layers object only ever existed in this browser.

lines 4 - 5:
	- If we're in Netscape 4.x, we want to save the current height and width of the browser for later use.
	
line 8:
	- Here's where we actually handle the browser being resized.
	
line 9:
	- Check to make sure that this only happens if they are using Netscape 4.x

line 10:
	- If they came in here and either the height or the width of the window has changed, the user resized the window, 
	  and we want to force the page to reload. 
	- If the browser window size hasn't changed, the onresize handler was triggered by Netscape drawing the scrollbars, and it can be ignored.

line 11:
	- Reload the page if the user actually did resize the window.
*/