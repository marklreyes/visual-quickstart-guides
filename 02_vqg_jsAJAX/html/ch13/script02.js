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
		xhr.onreadystatechange = showPictures;
		xhr.open("GET", "flickrfeed.xml", true);
		xhr.send(null);
	}
	else {
		alert("Sorry, but I couldn't create an XMLHttpRequest");
	}
}

function showPictures() {
	var tempDiv = document.createElement("div");
	var tempText = document.createElement("div");
			
	if (xhr.readyState == 4) {
		if (xhr.status == 200) {
			var allImages = xhr.responseXML.getElementsByTagName("content");

			for (var i=0; i<allImages.length; i++) {
				tempText.innerHTML = allImages[i].textContent;
				tempDiv = tempText.getElementsByTagName("p");

				var theText = tempDiv[1].innerHTML;
				theText = theText.replace(/240/g,"75");
				theText = theText.replace(/180/g,"75");
				theText = theText.replace(/_m/g,"_s");
				document.getElementById("pictureBar").innerHTML += theText;
			}
		}
		else {
			alert("There was a problem with the request " + xhr.status);
		}
	}
}

/* PARSING SERVER DATA */

/*
LINES 18 - 19: Every time readyState changes, we want to call the showPictures() function. The file name we want to read off the server is flickrfeed.xml. Bot those values 
               are set here.

LINES 28 - 29: Down in showPictures() is where the real work is done. We start by creating variables to store two elements: tempDiv and tempText, both of which are temporary
 			   div placeholders.
 			   
LINE 33: The response back from the server contained XML, so we're taing that response and looking for every content node. If you take a look at the XML in Script 13.8, you'll
      	 see that there's a lot of stuff there that we don't care about at all-in fact, all we want is what's in the ,a> tags (and really, only half of those). Here, we've started
      	 to narrow down to just what we want.

LINE 35: Now we need to loop through all the nodes that we found to get the actual data we want.

LINES 36 - 37: Because we've got XML data, we can use its textContent property to get the text of the node. Given that, we want to find all the paragraphs inside of it-and there
			   should be two of them.
			   
LINES 39 - 42: As previously mentioned, we only want half the <a> nodes, so we winnow out the ones here that we don't want. In a file with information about 20 photos, there will
			   be 20 <content> nodes, each of which contains two paragraphs. Each <content> node contains the photographer's name (linked to their Flickr page), followed by an 
			   image that links to the Flicr-hosted version. We want just the latter, so we can just take the innerHTML from the second item in the tempDiv array, which gives us
			   the <a> inside the paragraph (and the ,img> tag it contains, as well).
			   
			   Next, we're using regular expressions to tweak the results. Flickr has sent us the tags for medium-sized version of the image, but we only want the thumbnail
			   version. Because our images are either 240 wide by 180 tall or 180 wide by 240 tall (that is, they're either horizontal or vertical), and we know the thumbnails
			   are always 75x75, we just find any use of the numbers 240 or 180 in the text and change them to 75. We finish up by changing the image name itself; Flickr gives
			   the medium-sized version a name that ends with _m, while the small version ends with -s, so we can just swap one for the other.
			   
LINE 43: Inside the loop, we take the now-modified node that we want and then append it onto the HTML page's picturear. The end result is as we see it in Figure 13.3, where
		 every thumbnail image on the page is a link back to the full-sized version.
		 
TIPS: 
	* While you can't read a data file that's stored on another server (see, "Getting Your Data"), you can always have your HTML file load information from another server. Here,
	  your Web page, not matter where it is, is able to display images from Flickr's servers.
	  
	* One of th best things about the Web 2.0 dot-coms is that they understand that people want access to data-and not just their own data, but other people's data (when they've
	  agreed to make it public) as well. For instance, it's possible to search Flickr for all the photographs containg the tags "Hawaii" and "sunset", and then get the result
	  as an XML file. Combine that with this scrupt or the next, and you'll always have new and lovely photos on your page. 








*/ 			                