window.onload = initBannerLink;

var thisAd = 0;

function initBannerLink() {
	if (document.getElementById("adBanner").parentNode.tagName == "A") {
		document.getElementById("adBanner").parentNode.onclick = newLocation;
	}
	
	rotate();
}

function newLocation() {
	var adURL = new Array("negrino.com","sun.com","microsoft.com");
	document.location.href = "http://www." + adURL[thisAd];
	return false;
}

function rotate() {
	var adImages = new Array("images/banner1.gif","images/banner2.gif","images/banner3.gif");

	thisAd++;
	if (thisAd == adImages.length) {
		thisAd = 0;
	}
	document.getElementById("adBanner").src = adImages[thisAd];

	setTimeout(rotate, 3 * 1000);
}
/* 
ADDING LINKS TO CYCLING BANNERS 

In this script we'll add a new array. This new array contains destinations that users will be sent to when they click the banner.

line 1:
	When the window finishes loading, trigger the initBannerLink() function.

lines 5-11:
	First check to see if the adBanner object is surrounded by a link tag.
	If so, when the link is clicked, the newLocation() function will be called.
	Finally, the rotate() function is called.

lines 13-14:
	In the new function newLocation(), the addURL variable gets assigned the three constiuents of a new array. 
	Just the domain names need to go in here, b/c we'll complete the URLs next.

line 15:
	Still inside newLocation() function, we set the document.location.href object (i.e. the current document window), 
	to the value of the text string http://www., plus the value of one item from adURL.
	Since adURL is an array, you need to specify a member of the array.
	That's stored in thisAd, and the resulting string can be any of the three links, depending on when the user clicks.
	Last, it returns false, which tells the browser that should not also load in the href. Otherwise, the browser would do both.
	We've handled everything within JavaScript, so the href doesn't need to be loaded.

*/