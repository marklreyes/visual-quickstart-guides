if (typeof document.oncontextmenu == "object") {
	if (document.all) {
		document.onmousedown = captureMousedown;
	}
	else {
		document.oncontextmenu = captureMousedown;
	}
}
else {
	window.oncontextmenu = captureMousedown;
}

function captureMousedown(evt) {
	if (evt) {
		var mouseClick = evt.which;
	}
	else {
		var mouseClick = window.event.button;
	}
	
	if (mouseClick==1 || mouseClick==2 || mouseClick==3) {
		alert("Menu Disabled");
		return false;
	}
}
/* THE ONMOUSEDOWN EVENT 

lines 1 - 4:
	- The first block checks to see if this browser is Firefox, which uses window.oncontextmenu 
	  (and so doesn't know about document.oncontextmenu).
	- If it isn't Firefox, we next look for document.all, which is an easy way of checking to see if the browser is IE. 
	- If it is, we want to set captureMousedown() to run whenever onmousedown is triggered.
	
lines 5 - 6:
	- If we're here, it's b/c your visitor is using Safari, and that browser needs oncontextmenu set on the document object.
	
lines 9 - 10:
	- If the browser is Firefox, we want oncontextmenu events for the window to call the captureMousedown() function.
	
line 13:
	- The function that handles the onmousedown and oncontextmenu events begins here. Netscape-based browsers and Safari generate 
	  the evt parameter being passed in automatically whenever an event is triggered, and this variable contains information about the event.

lines 14 - 19:
	- If the evt variable exists, we can determine which button the user clicked by checking evt.which.
	- If the user has IE, the results of the user's action will be found in window.event.button
	- Either way, we'll store the result in the mouseClick variable.
	
lines 21 - 23:
	- If mouseClick is 1, 2 or 3, put up an alert saying that the functionality is disabled, and return false. 
	- Returning flase keeps the menu window from being displayed.
	
TIPS:
	- Why are we checking for three different mouse clicks? Shouldn't one be enough? In theory yes, in practice no. 
	  See table, MOUSE CLICK CODES. This approach can backfire. You may successfully block left-click and right-click input
	  (to block people from dragging images off Web pages, for example), but it also means that you might be keeping people from 
	  clicking any links on your page.
	  
	- It's very simple for savy surfers to work around this: all they have to do is turn off JavaScript and their clicking ability returns.
	  Putting your HavaScript code into an external file seems like a workaround, but users can look in their cache folder on their hard disk.
	  Or the can look at the source file, and then enter the URL of the external file to their browser, which displays the file content.
	  If you really worry about your source code being stolen, the only method that's guaranteed to keep it from being looked at is to 
	  never put it on the web.
	  
	- IE understands document.oncontextmenu, so you'd think that setting it would cause it to handle those events-but it doesn't.
	  IE is the only browser that needs document.onmousedown to be set. And if you set both window.oncontextmenu and document.onmousedown, 
	  Firefox triggers every event twice, once for each action.
*/	