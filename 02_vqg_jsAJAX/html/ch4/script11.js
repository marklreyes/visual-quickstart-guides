window.onload = choosePic;

var adImages = new Array("images/reading1.gif","images/reading2.gif","images/reading3.gif");
var thisAd = 0;

function choosePic() {
	thisAd = Math.floor((Math.random() * adImages.length));
	document.getElementById("adBanner").src = adImages[thisAd];
	
	rotate();
}

function rotate() {
	thisAd++;
	if (thisAd == adImages.length) {
		thisAd = 0;
	}
	document.getElementById("adBanner").src = adImages[thisAd];

	setTimeout(rotate, 3 * 1000);
}

/* 
CYCLING IMAGES WITH A RANDOM START 

line 3:
	Set up the array and the varaible that contains the number of items in the array.

line 6:
	The variable, thisAd gets the value of a math expression that's best read from the inside outwards.
	Math.random generates a random number between 0 and 1, which then multiplied by adImages.length, which is the number of items in the array (in this case, 3).
	Math.floor rounds the result down to an integer, which means that the number must be between 0 and 2.

lines 13:
	Start off w/ a new function called rotate().
	Next line, create a new array called adImages.
	Array contains the names of the three GIF files that make up the cycling banner.

line 14:
	Take the value of thisAd, and add one to it.

lines 15-16:
	This code checks to see if the value of this is equal to the number of items in the adImages array.
	If it is, then set the value of thisAd back to zero.

line 18:
	The image on the web that is being cycled has the id adBanner, which is defined in the img tag of the HTML.
	This line says: The new sources for adBanner are in the array adImages, and the value of the variable thisAd defines which of the three GIFs the browser should use at the moment.

line 20:
	This line tells the script how often to change GIFs in the banner.
	The built-in JavScript command setTimeout lets you specify that an action should occur on a partucular schedule, always measured in milliseconds.
	In this case, the function rotate() is called every 3,000 milliseconds (3 seconds), so the GIFs will cycle in the banner every three seconds.	
*/

