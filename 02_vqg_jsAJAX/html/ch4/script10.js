window.onload = choosePic;

function choosePic() {
	var myPix = new Array("images/lion.jpg","images/tiger.jpg","images/bear.jpg");
	var randomNum = Math.floor((Math.random() * myPix.length));
	document.getElementById("myPicture").src = myPix[randomNum];
}


/* 
DISPLAYING A RANDOM IMAGE 

Line 4:
	Inside the function choosePic() build an array of three images, and stuff it into the variable myPix.

Line 5:
	The variable, randomNum gets the value of a math expression that's best read from the inside outwards.
	Math.random generates a random number between 0 and 1, which then multiplied by myPix.length, which is the number of items in the array (in this case, 3).
	Math.floor rounds the result down to an integer, which means that the number must be between 0 and 2.
	
Line 6:
	This says, the source of the image myPicture is set based on the array myPix, and the value at this moment is depdendent on the value of randomNum.
*/