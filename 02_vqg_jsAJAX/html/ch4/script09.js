window.onload = initLinks;

var myPix = new Array("images/robot1.jpg","images/robot2.jpg","images/robot3.jpg");
var thisPic = 0;

function initLinks() {
	document.getElementById("prevLink").onclick = processPrevious;
	document.getElementById("nextLink").onclick = processNext;
}

function processPrevious() {
	if (thisPic == 0) {
		thisPic = myPix.length;
	}
	thisPic--;
	document.getElementById("myPicture").src = myPix[thisPic];
	return false;
}

function processNext() {
	thisPic++;
	if (thisPic == myPix.length) {
		thisPic = 0;
	}
	document.getElementById("myPicture").src = myPix[thisPic];
	return false;
}

/* 
BUILDING WRAPAROUND SLIDESHOWS 

Line 1:
	When the window finishes loading, trigger the initLinks() function
	
Lines 6-8:
	This function sets up the onclick event handlers for the Previous and Next links.
	
Lines 11-13:
	This function makes the slideshow run in the Previous direction.
	The first part checks to see if thisPic is equal to 0.
	If it is, the function gets the number of pictures in the myPix array.
	
Lines 15-16:
	The first lines reduces the value of thisPic by 1.
	The next line sets the src of myPicture to the element of the myPix array represented by the current value of thisPic.

Lines 21-25:
	processNext() function makes the slideshow run i the Next direction and is much more like the processPrevious() function.
	The first thing it does is increment the value of thisPic by 1. 
	Then it checks to see if the value of thisPic is the same as the number of items in the myPix array. If so, it sets thisPic back to 0.
	The next line sets the src of myPicture.

*/