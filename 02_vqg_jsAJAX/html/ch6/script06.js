var newWindow = null;
window.onload = newWinLinks;

function newWinLinks() {
	for (var i=0; i<document.links.length; i++) {
		document.links[i].onclick = chgWindowState;
	}
}

function windowOpen() {
	if (newWindow && !newWindow.closed) {
		return true;
	}
	return false;
}

function chgWindowState() {
	if (this.id == "closeWin") {
		if (windowOpen()) {
			newWindow.close();
		}
		else {
			alert("The window isn't open");
		}
		return false;
	}
	
	var topPos = 0;
	var leftPos = 0;

	if (this.id.indexOf("bottom") > -1) {
		topPos = screen.availHeight-200;
	}
	if (this.id.indexOf("Right") > -1) {
		leftPos = screen.availWidth-300;
	}

	if (windowOpen()) {
		newWindow.moveTo(leftPos,topPos);
	}
	else {
		newWindow = window.open("","newWin","toolbar,location=yes,width=300,height=200,left="+leftPos+",top="+topPos);
	}
	return false;
}
/* 
PUTTING THEIR WINDOWS IN THEIR PLACE 

lines 28 - 36:
	* We're creating 2 new variables, topPos and leftPos based on, screen.availHeight and screen.availWidth
	* If the word bottom is in the id, we know that the newly opened window needs to be pegged to the bottom of the screen.
	* topPos will be set to whatever the available height is of the screen minus 200 (the height of the window being opened).
	
	* If "bottom" isn't in the id (causing the indexOf() check to return -1, meaning not found), 
	* the topPos is left at is initialized value of zero, because it should be pegged to the top of the screen. 
	* And ditto for leftPos and Right.

lines 38 - 40:
	If the window is already open, we do a newWindow.moveTo() and pass in leftPos and topPos, which we just defined.

lines 41 - 43:
	If the window wasn't open, we open it the specified location by setting the left and top values in window.open
	
TIPS:
	- 	availHeight and availWidth properties look at only one monitor at a time, 
		so if you have multi-monitors setup, you can't suddently make a window fly somewhere else.
		The windows will open on the same monitor that the parent window is on.
		
	- 	If you want to change a window's dimensions instead of its location use resizeTo() instead of moveTo().
	
	- 	Both the resizeTo() and moveTo() commands can be used on the current window, not just newly opened windows.
		However, it's been found that visitors to sites hate having their main window moved even more than 
		the hate pop-up windows, so don't do it.
*/
