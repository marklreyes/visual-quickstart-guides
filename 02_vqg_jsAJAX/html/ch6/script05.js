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
	}
	if (this.id == "openWin") {
		if (windowOpen()) {
			alert("The window is already open!");
		}
		else {
			newWindow = window.open("","newWin","toolbar,location=yes,width=300,height=200");
		}
	}
	return false;
}

/* 
CLOSING A WINDOW 

line 1:
	This line initializes the value for the newWindow object that we're going to use later. While most browsers do this automatically, 

line 6:
	In the newWinLinks() function, we're stepping through the links in the document as usual. 
	The only difference here is that we'll call chgWindowState() if we detect a click on one of the links.

lines 10 - 15:
	The if statement poses a logical test using the && operator, which returns a true result only if all the values being are true.
	So in this case, newWindow must exist and newWindow must not have been closed (the ! is the logical 'not' operator). 
	This function returns true if a window is open and false if it isn't.

lines 17 - 18:
	Check to see if the id of the clicked link is closeWin.
	If it's closeWin, the user clicked close link.
	If it's openWin, they clicked the open link.
	
lines 19 - 21:
	If the user clicked close and the window is open, these lines close it.

lines 22 - 24:
	If the user clicked close and the window is already closed, an alert pops up saying so.
	
lines 26 - 29:
	If the user clicked open and the window is already open, an alert pops up saying so.
	
lines 30 - 32:
	If the user clicked open and there's no current window, the window opens up, showing the parameter set in the line.
	In this case, the toolbar and location are visible.
	
line 34:
	We end with a return false so that the href from the link doesn't get triggered.
*/
