window.onload = rolloverInit;

function rolloverInit() {
	for (var i=0; i<document.links.length; i++) {
		var linkObj = document.links[i];
		if (linkObj.className) {
			var imgObj = document.getElementById(linkObj.className);
			if (imgObj) {
				setupRollover(linkObj,imgObj);
			}
		}
	}
}

function setupRollover(thisLink,textImage) {
	thisLink.imgToChange = textImage;
	thisLink.onmouseout = function() {
		this.imgToChange.src = this.outImage.src;
	}
	thisLink.onmouseover = function() {
		this.imgToChange.src = this.overImage.src;
	}
	
	thisLink.outImage = new Image();
	thisLink.outImage.src = textImage.src;

	thisLink.overImage = new Image();
	thisLink.overImage.src = "images/" + thisLink.id + "Text.gif";
}

/* 
lines 6-7: 
	use the class attribute. In this line we're looking for the className of the link object
			
lines 15-16: 
	setupRollover function is passed the current link object, thisLink and image object, textImage
	Note, when we passed these objects we called them linkObj and imgObj			
*/
