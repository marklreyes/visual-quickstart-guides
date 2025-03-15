document.onmousemove = moveHandler;

function moveHandler(evt) {
	if (!evt) {
		evt = window.event;
	}
	animateEyes(evt.clientX,evt.clientY);
}

function animateEyes(xPos,yPos) {
	var rightEye = document.getElementById("rEye");
	var leftEye = document.getElementById("lEye");
	var rightEyeball = document.getElementById("rDot").style;
	var leftEyeball = document.getElementById("lDot").style;

	leftEyeball.left = newEyeballPos(xPos,leftEye.offsetLeft);
	leftEyeball.top = newEyeballPos(yPos,leftEye.offsetTop);
	rightEyeball.left = newEyeballPos(xPos,rightEye.offsetLeft);
	rightEyeball.top = newEyeballPos(yPos,rightEye.offsetTop);

	function newEyeballPos(currPos,eyePos) {
		return Math.min(Math.max(currPos,eyePos+3),eyePos+17) + "px";
	}
}
/* THE ONMOUSEMOVE EVENT 

line 1:
	- For all browsers, if a mousemove event is triggered, call the moveHandler() function.
	
lines 3 - 8:
	- The moveHandler() function will be triggered wheneve ra mousemove event occurs. If the visitor has IE, we need to initialize evt, 
	  and then for all browsers, we call animateEyes() and pass it the X and Y cursor coordinates.

line 10:
	- Here's where the actual eyeball movement is done, based on the X and Y coordinates passed in.
	
lines 11 - 14:
	- This section assigns variables that match up with the ids of the images of the circles of the eyeballs and the dots of the eyeballs.
	
lines 16 - 19:
	- This block draws the eyeballs based on the mouse pointer's position, using the results of the newEyeballPos() function 
	  defined in the next step.

lines 21 - 23:
	- We never want the eyeball to go outside the eye. For each eyeball, we chec to make sure that it gets as close to the cursor as 
	  possible, while still appearing within the circle of the eye.

TIPS:
	- There's a common JavaScript widget on the Web where the page has a bunch of dots follow the cursor around the page. We didn't want to
	  re-create an already existing effect, so we did the eyeballs instead; but if you want to put tag-along dots on your page, you should be 
	  able to just tweak this script.
	
	- Netscape 6 had a bug where both eyeballs were always placed 10 pixels too low. This bug was fixed in Netscape 7.
*/
