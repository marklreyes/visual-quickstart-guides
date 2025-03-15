window.onload = rolloverInit;

function rolloverInit() {
	for (var i=0; i<document.images.length; i++) {
		if (document.images[i].parentNode.tagName == "A") {
			setupRollover(document.images[i]);
		}
	}
}

function setupRollover(thisImage) {
	thisImage.outImage = new Image();
	thisImage.outImage.src = thisImage.src;
	thisImage.onmouseout = function() {
		this.src = this.outImage.src;
	}

	thisImage.clickImage = new Image();
	thisImage.clickImage.src = "images/" + thisImage.id + "_click.gif";
	thisImage.onclick = function() {
		this.src = this.clickImage.src;
	}

	thisImage.overImage = new Image();
	thisImage.overImage.src = "images/" + thisImage.id + "_on.gif";
	thisImage.onmouseover = function() {
		this.src = this.overImage.src;
	}
}
/* 
A three-state rollover is one where the rollover has three versions. 

This script is the same as script02.js plus, 

lines 18 - 19:
	In the setupRollover function, we need to add a third image property for the clicked state.
	In the first line, we create a new image oject that will contain the clickImage version of the image.
	The second line, sets the source for clickImage. It builds the name of the source file on the fly concatenating "images/" with the id of the image and adding "_click.gif"

lines 20 - 22:
	This tells the browser what to do when the user clicks the mouse on the image.
	In this case, we want to set the image source to its clickImage version.




*/