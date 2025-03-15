window.onload = initLinks;

function initLinks() {
	for (var i=0; i<document.links.length; i++) {
		document.links[i].onclick = writeContent;
		document.links[i].thisPage = i+1;
	}
}

function writeContent() {
	var newText = "<h1>You are now looking at page " + this.thisPage + ".<\/h1>";
	
	var contentWin = parent.document.getElementById("content").contentWindow;
	contentWin.document.body.innerHTML = newText;
	return false;
}

/* 
CREATING AND LOADING A DYNAMIC FRAME 

line 4 - 7:
	For each link two things are set,
		- the onclick handler for that link
			Sets every link to call the writeContent(0 function when they're clicked.
		- a new property is added: thisPage
			Contains the page number to be displayed when that link is lcicked (ie link 0 is page 1, link 1 is page 2, etc.)

line 11 - 14:
	First declares and sets a vriable, newText, and assigns it to some text.
	Next, the contentWin variable is set based on the content element, and then we reset contentWin.document.body.innerHTML to newText.
	
	We find an element with a given id (in this case, content) and then store that element's contentWindow in the variable contentWin.
	Given contentWin, we want the document it contains, then we get the body of that document, and then we reset innerHTML, wich is the HTML contained within that body tag.

line 15:
	writeContent(0 function returns false, which tells the browser that it should not also load in the hrefs in the navigation bar's frame.
	Otherwise, the browser would do both. We've handled everything within JavaScript, so the href doesn't need to be loaded.
	
TIPS:
	- Q: Why is there a backslash \ before the slash / in line 11?
	  A: According to HTML standards, the browser may interpret the beginning of a closing tag </ as the end of the line. 
	  	 The backslash escapes the slash, allowing us to write out HTML without the chance of causing an error.
	  	 
	- We're using parent.document.getElement vs document.getElement b/c it's being called by one of the framed pages whereas last time it was called by the frameset page.
	- In this case, the JavaScript has to go back up to its parent (frameset) in order to look at the content page another child of the parent).

*/
