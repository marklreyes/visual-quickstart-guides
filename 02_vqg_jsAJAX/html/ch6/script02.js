window.onload = newWinLinks;

function newWinLinks() {
	for (var i=0; i<document.links.length; i++) {
		if (document.links[i].className == "newWin") {
			document.links[i].onclick = newWindow;
		}
	}
}

function newWindow() {
	var catWindow = window.open(this.href,"catWin","width=350,height=260");
	catWindow.focus();
	return false;
}
/* 
LOADING DIFFERENT CONTENTS INTO A NEW WINDOW 

line 6:
	In the newWinLinks() function, we've added the newWindow() function 
	call as the onclick handler via JavaScript.

	When newWindow() is called, it uses this.href, that is the href attribute value from HTML.
	
line 11:
	Defining a new function called newWindow()
	
line 12:
	In the variable catWindow, we're opening a new window object, followed by the window's paramenters.
	First, we pass it the value of this.href
	The name of the new inwdow is catWin, and the width and height parameters set the size of the window.
	
line 13:
	Use the focus() method to tell the window we just opened to come to the front.
	You can use focus(0 whenever you need to make a window visible; if there are several windows open, using focus() brings the window to the top.

line 14:
	The function needs to end with return false so that the HTML knows to not also load the href in.

TIP:
	- 	The opposite fo the focus() method is the blur() method. Using blur() pushes a window behind any other windows that are open.
		The focus(0 and blur() methods of the window object have associated onfocus and onblur even handlers, which let you take action when a window gains or loses focus.
*/
