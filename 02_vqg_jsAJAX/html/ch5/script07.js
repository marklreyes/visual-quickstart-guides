window.onload = initFrames;

function initFrames() {
	var leftWin = document.getElementById("left").contentWindow.document;

	for (var i=0; i<leftWin.links.length; i++) {
		leftWin.links[i].onclick = setFrames;
	}
}

function setFrames() {
	document.getElementById("left").contentWindow.document.location.href = this.id + ".html";
	document.getElementById("content").contentWindow.document.location.href = this.href;
	setTimeout(initFrames,1000);
	return false;
}
/* 
LOADING MULTIPLE FRAMES AT ONCE 

lines 3 - 8:
	initFrames() function is called at onload, then function loops through the navigation bar (left) links.
	This time, it sets onclick handlers to the setFrames() function.

lines 12 - 14:
	setFrames() function first resets the left frame based on the id of the link that called it. 
	The function then resets the left frame based on the id of the link that called it. 
	The function then resets the content frame based on the href of the link that called it.
	We have access to that via JavaScript, so use it.
	
	The function waits a second (by using setTimeout) and then calls the initFrames() function.
	This has to happen again b/c it's what sets the onclick handlers in the navigation bar, and 
	as soon as we loaded a new navigation page into the bar, all those onclick handlers went away.
	
	In order to keep things working, the've all got to be reset for the new page, and this is how it's done.
	
line 15:
	Return false so we won't load the new page in.
	
TIP:
	- If you click links in the navigation bar quickly, you'll get an unexpected result; 
	  a content page replaces the navigation bar. That's because the navigation page must 
	  finish loading before it is ready to accept the next click.	
*/
