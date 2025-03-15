var pageCount = new Array(0,0,0,0);

window.onload = initFrames;

function initFrames() {
	for (var i=0; i<document.links.length; i++) {
		document.links[i].onclick = writeContent;
		document.links[i].thisPage = i+1;
	}
}

function writeContent() {
	pageCount[this.thisPage]++;

	var newText = "<h1>You are now looking at page " + this.thisPage;
	newText += ".<br \/>You have been to this page ";
	newText += pageCount[this.thisPage] + " times.<\/h1>";

	var contentWin = document.getElementById("content").contentWindow.document;
	contentWin.body.innerHTML = newText;
	return false;
}
/* 
WORKING WITH IFRAMES 

An iframe is an inline frame, a frame that can be embedded within a 
regular HTML page instead of needing to be inside a frameset.

An iframe is a separate HTML document. You can use an iframe as the 
target of a script, so you can create content on the fly under script 
control and display it in the page without having to use a frameset.

line 12:
	writeContent() function is used to build the content inside the frame

line 13:
	This line increments the pageCount array, so that we can keep track of 
	how many times we've visited this particular page.
	
lines 15 - 17:
	These lines create what will be the content of the iframe on the fly.
	
lines 19 - 21:
	Get the contentWin and reset the innerHTML property of its body.
	Resetting innerHTML writes the two lines of text in the iframe.
	End with a return false so that the browser doesn't do things it shouldn't.
	
TIP:
	- We're using document.getElementbyId("content") instead of parent.document.getElementById("content").
	  B/c the iframe is a child of the main page, not a frameset, and consequently, we can address it directly instead of only via the parent.
*/
