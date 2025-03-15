window.onload = initAll;
var xhr = false;

function initAll() {
	if (window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	}
	else {
		if (window.ActiveXObject) {
			try {
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch (e) { }
		}
	}

	if (xhr) {
		getPix();
	}
	else {
		alert("Sorry, but I couldn't create an XMLHttpRequest");
	}
}

function getPix() {
	xhr.open("GET", "flickrfeed.xml", true);
	xhr.onreadystatechange = showPictures;
	xhr.send(null);

	setTimeout(getPix,5 * 1000);
}

function showPictures() {
	var tempText = document.createElement("div");
	var allLinks = new Array;
			
	if (xhr.readyState == 4) {
		if (xhr.status == 200) {
			var allImages = xhr.responseXML.getElementsByTagName("content");

			for (var i=0; i<allImages.length; i++) {
				tempText.innerHTML = allImages[i].textContent;
				allLinks[i] = tempText.getElementsByTagName("p")[1];
			}
			
			var randomImg = Math.floor(Math.random() * allLinks.length);
			document.getElementById("pictureBar").innerHTML = allLinks[randomImg].innerHTML;
		}
		else {
			alert("There was a problem with the request " + xhr.status);
		}
	}
}

/* REFRESHING SERVER DATA */

/* 
Make the application retrieve a new version of the data from the server, which automatically refreshes the page. 

LINES 25 - 31: Where the previous script did the xhr call inside initall(), this script pushes it down into its own function, getPix(). There's one addition: the setTimeout()
 			   afterwards. Five seconds after the script has grabbed a random image, ir goes and gets another.

LINES 41 - 44: This is almost the same loop that's in the previous task, with one difference: instead of appending the nodes to the Web page, it adds them to a temporary array.

LINES 46 - 47: When the loop completes, we want to figure out one random image out of all of them to display. We start by calculating a random number between zero and one less
			   than the number of images, using Math.random() and Math.floor() as we did in Ch.4 "Display a Random Image." And finally, we use that random number as an index into
			   the allLinks array to grab the one image, and we put that into our Web page.

TIPS: 
	* Why bother to read from the same XML files every time if the file isn't changing? The XML file could be changing at any point. Say your server-side program grabs a 
	  new version of the XML file every few minutes-why should anyone have to wait to see the latest pictures? This way, your site's visitors always gets the latest 
	  possible version.
	  
	* If you take the approach just mentioned, you're likely to the ajax drawback from earlier: caching. Different browsers and platforms all have their own unique caching
	  peculiarities, most of which are solved by modifying the headers as discussed earlier. Another solution many recommend is to change the GET to a POST.
	  
	  But here's what we've found that works: instead of the order they're seen in Script 13.2, we've swapped the order of the open() and onreadystatechange in 
	  Script 13.9 as shown above in step 1.
	  




*/
