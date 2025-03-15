window.onload = initAll;
var imgDiv = "";

function initAll() {
	document.getElementById("pictureBar").innerHTML = imgDiv;
}

function jsonFlickrFeed(flickrData) {
	for (var i=0; i<flickrData.items.length; i++) {
		imgDiv += "<img src='";
		imgDiv += flickrData.items[i].media.m.replace(/_m/g,"_s");
		imgDiv += "' alt='" + flickrData.items[i].title + "' />";
	}
}

/* GETTING DATA FROM A SERVER */


/* 
Call a script file on another server - see script04.html file.

LINE 5: This single line of code puts all the images into the page when it loads.

LINE 8: What JSON gets you is a data file that contains code that JavaScript recognizes. In this case, the data file says that it's expecting to find a function named
  		jsonFlickrFeed(), so here we've created one. Whatever name we give the parameter coming in is where the data itself is stored.
  		
LINES 9 - 13: Loop through all the images in the items array, building one large text string that will be displayed on the screen. Each element in items has a variety of
			  information about an image, but all we want is the URL, which is stored in media.m.
			  
			  A little bit of REGEX turns our medium-sized image into a thumbnail.
			  
TIPS:
	* The JSON format itself is a subset of the object literal. 
	
	* You won't always use exactly the URL that's in step 1. If you do, you'll get the same results shown on this page. Flickr allows you to put in many combinations of tags,
	  sets, and groups so that you'll get personalized results. Go to Flickr, find the Web page that matches what you want in your images file, and find the feed directions
	  on that page. Once you've got that, just add &format=json to the end of the URL, and you should be set.	
*/

