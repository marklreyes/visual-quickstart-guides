document.onkeydown = keyHit;
var thisPic = 0;

function keyHit(evt) {
	var myPix = new Array("images/callisto.jpg","images/europa.jpg","images/io.jpg","images/ganymede.jpg");
	alert(thiskey);
	var imgCt = myPix.length-1;
	var ltArrow = 37;
	var rtArrow = 39;

	if (evt) {
		var thisKey = evt.which;
	}
	else {
		var thisKey = window.event.keyCode;
	}
	
	if (thisKey == ltArrow) {
		chgSlide(-1);
	}
	else if (thisKey == rtArrow) {
		chgSlide(1);
	}
	return false;

	function chgSlide(direction) {
		thisPic = thisPic + direction;
		if (thisPic > imgCt) {
			thisPic = 0;
		}
		if (thisPic < 0) {
			thisPic = imgCt;
		}
		document.getElementById("myPicture").src = myPix[thisPic];
	}
}
/* THE ONKEYDOWN EVENT 
A standard slideshow can be viewed by pressing the left and right arrow keys on the keyboard.

line 1:
	Here we register the keyHit() function as the one to handle onkeydown events.
	
line 2:
	The variable thisPic is initialized and set globally, so that it's stored and available for use every time keyHit() is called.

line 3:
	The keyHit() function handles the event when keys are hit.

lines 7 - 8:
	We need to store the appropriate values for when a key is hit. The left arrow key generates a 37, and the right arrow triggers a 39.
	
lines 10 - 15:
	How we know which key the user hit depends on which browser they're using. If it's Firefox or Safari, we look at evt.which, which contains
	the code for they key hit. If it's IE, that same value will be in window.event.keyCode. Either way, the result is saved to thisKey.
	
lines 17 - 22:
	If the user pressed the left arrow, the go backward through the slideshow. If they pressed the right arrow, go forward. if they chose 
	any other key, don't do anything at all.
	
line 23:
	This line is there to work around a bug in a single browser: Safari. Other browsers handle this just fine, but Safari triggeres two 
	keystrokes instead of one (causing onkeydown to be triggered twice), everytime you press an arrow. If you return a value of false, 
	Safari knows that it should stop handling these events, and other browsers don't care one way or another.
*/
