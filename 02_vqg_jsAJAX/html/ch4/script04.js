window.onload = rolloverInit;

function rolloverInit() {
	for (var i=0; i<document.links.length; i++) {
		var linkObj =  document.links[i];
		if (linkObj.id) {
			var imgObj = document.getElementById(linkObj.id + "Img");
			if (imgObj) {
				setupRollover(linkObj,imgObj);
			}
		}
	}
}

function setupRollover(thisLink,thisImage) {
	thisLink.imgToChange = thisImage;
	thisLink.onmouseout = function() {
		this.imgToChange.src = this.outImage.src;
	}
	thisLink.onmouseover = function() {
		this.imgToChange.src = this.overImage.src;
	}
	
	thisLink.outImage = new Image();
	thisLink.outImage.src = thisImage.src;

	thisLink.overImage = new Image();
	thisLink.overImage.src = "images/" + thisLink.id + "_on.gif";
}

/* 
lines 3 - 4: 	Start a loop, but instead of looking for images, document.images.length, we look for links, document.links.length 
				The loop begins by starting the counter variable i to zero.
				Everytime around, if the value of i is less than the number of links in the document, increment i by 1.

line 5:			Create the linkObj variable and set it to the current link

lines 6 - 7:	If linkObj has an id, then we check to see if there's another element on the page that has an id that's the same plus Img.
				If so, put that element into the new variable imgObj.

lines 8 - 9:	If imgObj exists, then call the setupRollover() function, passing it the link object and the image object.

lines 15 - 16: 	setupRollover function begins with the link and image parameters that were passed to it in lines 8-9
				then add a new property, imgToChange, to the link object.
				JavaScript needs some way of knowing what image is to be changed when the link is moused over, and this is where it's stored.
				
lines 17 - 22: When the mouseover and mouseout are triggered, "this.imgToChange.src" is being reset of "this.src" itself.

TIP:
1 - This technique is useful when you want to provide the user with a preview of 
	what they will see if they click the link at which you are pointing.
	
EX: A travel site describing trips to Scotland, Tahiti, and Cleveland. 
	On the left of the page, could be a column of text links for each destination.
	On the right of the page, could be a preview area where an image appears.
	As the user points at the name of a destination, a picture of that place appears in the preview area.
	Clicking the link takes the user to a page detailing their vacation spot.
*/