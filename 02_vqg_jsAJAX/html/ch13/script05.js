window.onload = initAll;
var xhr = false;
var xPos, yPos;

function initAll() {
	var allLinks = document.getElementsByTagName("a");

	for (var i=0; i< allLinks.length; i++) {
		allLinks[i].onmouseover = showPreview;
		allLinks[i].onmouseout = hidePreview;
	}
}

function showPreview(evt) {
	getPreview(evt);
	return false;
}

function hidePreview() {
	document.getElementById("previewWin").style.visibility = "hidden";
}

function getPreview(evt) {
	if (evt) {
		var url = evt.target;
	}
	else {
		evt = window.event;
		var url = evt.srcElement;
	}
	xPos = evt.clientX;
	yPos = evt.clientY;
	
	if (window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	}
	else {
		if (window.ActiveXObject) {
			try {
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch (e) { }
		}
	}

	if (xhr) {
		xhr.onreadystatechange = showContents;
		xhr.open("GET", url, true);
		xhr.send(null);
	}
	else {
		alert("Sorry, but I couldn't create an XMLHttpRequest");
	}
}

function showContents() {
	var prevWin = document.getElementById("previewWin");
	
	if (xhr.readyState == 4) {
		if (xhr.status == 200) {
			prevWin.innerHTML = xhr.responseText;
		}
		else {
			prevWin.innerHTML = "There was a problem with the request " + xhr.status;
		}
		prevWin.style.top = parseInt(yPos)+2 + "px";
		prevWin.style.left = parseInt(xPos)+2 + "px";
		prevWin.style.visibility = "visible";
		prevWin.onmouseout = hidePreview;
	}
}
/* PREVIEWING LINKS WITH AJAX */

/* LINES 6 - 11: Here's our initAll() function, which simply plows through all the links on the page and adds onmouseoverand onmouseout event handlers to each. The former
				 eventPhase handler will read the destination page and display a preview for the (possible) visitor. 

LINES 14 - 17: The showPreview() event handler function passes the event triggering the function call to getPreview(). That's where the real work will be done.

LINES 19 - 21: If we have a showPreview() function, we need a hidePreview(). It sets the preview window back to its hidden level of visibility.

LINES 24 - 32: Here in getPreview(), the first thing we need to do is figure out what file we want to read, and that's done by looking at the event's properties. Depending on
			   which browser your visitor is using, the URL is in either evt.target or window.event.srcElement. Once we've got that, we can grab the x and y positions of the
			   mouse for later use.

LINES 57 - 59: Having used Ajax to read the file, we're now down in the showContents() function. We store the previewWin element for later use in prevWin, and when 
			   xhr.readyState is 4, it's time to show off.

LINES 60 - 69: If everything's fine, then xhr.status is 200 and the data we want to put into prevWin.innerHTML is in xhr.responseText. If not, we put the error message there
			   instead. Once that's done, it's simply a matter of figuring our where to place the preview window, and that's where those x and y mouse coordinates come in handy.
			   It's a pop-up so we put it just below and to the right (2 pixels over and 2 down_, of the cursor position that triggered this call.
			   
			   Lastly, we set prevWin to be visible, and we let JavaScript know that prevWin should be hidden when the cursor moves off the preview.
			   
TIPS:
	* The data being read is in HTML format. Putting xhr.responseText into innerHTML tells the browser that when the preview window displays it, it should interpret the HTML as
	  HTML. If you wanted something else to display (ie you wanted to see the actual source of the page), you could modify what's in innerHTML before displaying the preview.
	  
	* Ajax requires that the file being read reside on the same server-but it doesn't require that it be in the same directory. If the page your'reading in is in a different
	  directory, and the page contains relative links, then those links will not work. If your pages refer to a particular CSS file, or images, or JavaScript, you won't be able
	  to preview those particular parts of the file. The same solution applies here as well: modify prevWin.innerHTML before displaying it.	

*/
