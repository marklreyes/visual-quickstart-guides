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
	thisLink.imgToChange = new Array;
	thisLink.outImage = new Array;
	thisLink.overImage = new Array;

	thisLink.imgToChange[0] = textImage;
	thisLink.onmouseout = rollOut;
	thisLink.onmouseover = rollOver;	
	
	thisLink.outImage[0] = new Image();
	thisLink.outImage[0].src = textImage.src;

	thisLink.overImage[0] = new Image();
	thisLink.overImage[0].src = "images/" + thisLink.id + "Text.gif";
	
	var rolloverObj = document.getElementById(thisLink.id + "Img");
	if (rolloverObj) {
		thisLink.imgToChange[1] = rolloverObj;

		thisLink.outImage[1] = new Image();
		thisLink.outImage[1].src = rolloverObj.src;
	
		thisLink.overImage[1] = new Image();
		thisLink.overImage[1].src = "images/" + thisLink.id + "_on.gif";
	} 
}

function rollOver() {
	for (var i=0;i<this.imgToChange.length; i++) {
		this.imgToChange[i].src = this.overImage[i].src;
	}
}

function rollOut() {
	for (var i=0;i<this.imgToChange.length; i++) {
		this.imgToChange[i].src = this.outImage[i].src;
	}
}

/* 
To work with multiple rollovers 

lines 16-18:
	These lines were added b/c the script has more images to work with (two for each rollover).
	In each line, we're creating a new property of thisLink, each of which is an array.
	
line 20: 
	imgToChange is an array that will contain images.
	textImage is stored in the first element of the outImage array.

lines 27-28:
	The over(on) version of the image is calculated and stored in the first element of overImage.

lines 30-31:
	Figure out if this rollover will trigger multiple images, not just an individual image.
	If that's the case, there'll be an element on the HTML page whose id is the same as this one, but with Img appended.
	That is, if we're working on flyer, we'll be checking to see if there's a flyerImg element on the page.
	If there is, it's saved in rolloverObj, and we should do the next 3 steps.

line 32: 
	In the same way we set imgToChange[0], we now set imgToChange[1] (the second element in the array) to the new rolloverObj
	When the onmouseout and onmouseover event handlers are triggered, both images swap to their alternate versions.

lines 34-45:
	This sets the second array element of outImage to the out(off) version of the image.
	
lines 37-38:
	The over(on) version of the image is calculated and stored in the second element of overImage
	***If we wanted a third image to also change during this same rollover, repeat lines 32-38 with the third image object.
	
line 43-44: 
	rollOver function is where the images get swapped.
	B/c one/more images can be changed, we need to start by asking how many images we have stored, that's the value of this.imgToChange.length
	Here the value is 2, b/c we want two images to change.
	We then loop through two times, setting the source of imgToChange[0] and then imgToChange[1] to their resepctive over values.
	
line 49-50:
	Code inside of rollOut function is the same as rollOver except we're now resetting those images to their out source values.

TIP:
	1 - Remember that every image that ever gets rolled over must have a unique id.
	
	2 - What if you want some of the links on your page to trigger multiple rollovers, but others to be individual rollovers?
		
		You don't have to change one line of JavaScript. So long as the check in line 30-31 doesn't find the alternate id on the page, 
		no second element is stored, and the rollOver() and rollOut() loops only animate the initial image.
*/
