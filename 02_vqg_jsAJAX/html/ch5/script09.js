window.onload = initiFrame;

function initiFrame() {
	for (var i=0; i<document.links.length; i++) {
		document.links[i].target = "content";
		document.links[i].onclick = setiFrame;
	}
}

function setiFrame() {
	document.getElementById("content").contentWindow.document.location.href = this.href;
	return false;
}

/* 
LOADING IFRAMES WITH JAVASCRIPT 

lines 10 - 13:
	Set both the target and the onclick handler for the links.
	Clicking any of the links triggers the setiFrame() function, which then loads the new page into the iframe.
*/
