window.onload = rotate;

var thisAd = 0;

function rotate() {
	var adImages = new Array("images/reading1.gif","images/reading2.gif","images/reading3.gif");

	thisAd++;
	if (thisAd == adImages.length) {
		thisAd = 0;
	}
	document.getElementById("adBanner").src = adImages[thisAd];

	setTimeout(rotate, 3 * 1000);
}
/* 
Creating Cycling Banners 

line 3:
	Start by adding creating thisAd
	
lines 5-6:
	Start off w/ a new function called rotate().
	Next line, create a new array called adImages.
	Array contains the names of the three GIF files that make up the cycling banner.

line 8:
	Take the value of thisAd, and add one to it.

lines 9-10:
	This code checks to see if the value of this is equal to the number of items in the adImages array.
	If it is, then set the value of thisAd back to zero.

line 12:
	The image on the web that is being cycled has the id adBanner, which is defined in the img tag of the HTML.
	This line says: The new sources for adBanner are in the array adImages, and the value of the variable thisAd defines which of the three GIFs the browser should use at the moment.

line 14:
	This line tells the script how often to change GIFs in the banner.
	The built-in JavScript command setTimeout lets you specify that an action should occur on a partucular schedule, always measured in milliseconds.
	In this case, the function rotate() is called every 3,000 milliseconds (3 seconds), so the GIFs will cycle in the banner every three seconds.
	
TIPS:
	1 - One good reason to use JavaScript for cycling banners is that it lets you use jpegs, pngs, giving you higher quality images.
	2 - The images in this task were not pre-cached. Each downloads from the server the first time that it is displayed. 
		This is because you might have any number of images in your ad array, and it's not polite to force users to download, 
		100 images if they're only going to see 2 or 3 of them.
*/