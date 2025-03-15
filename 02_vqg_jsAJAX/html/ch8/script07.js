window.onload = rolloverInit;

function rolloverInit() {
	for (var i=0; i<document.images.length; i++) {
		if (document.images[i].parentNode.tagName.toLowerCase() == "a") {
			setupRollover(document.images[i]);
		}
	}
}

function setupRollover(thisImage) {
	var re = /\s*_off\s*/;

	thisImage.outImage = new Image();
	thisImage.outImage.src = thisImage.src;
	thisImage.onmouseout = function() {
		this.src = this.outImage.src;
	}

	thisImage.overImage = new Image();
	thisImage.overImage.src = thisImage.src.replace(re,"_on");
	thisImage.onmouseover = function() {
		this.src = this.overImage.src;
	}

	thisImage.clickImage = new Image();
	thisImage.clickImage.src = thisImage.src.replace(re,"_click");
	thisImage.onclick = function() {
		this.src = this.clickImage.src;
	}

	thisImage.parentNode.childImg = thisImage;
	thisImage.parentNode.onblur = function() {
		this.childImg.src = this.childImg.outImage.src;
	}	
	thisImage.parentNode.onfocus = function() {
		this.childImg.src = this.childImg.overImage.src;
	}
}
/* REPLACING ELEMENTS USING REGULAR EXPRESSIONS 

In short, instead of creating the _click and _on names of an image on the fly based on the id of each image, 
we're instead creating the _click and _on names on the fly based on the _off name of the image. That way we 
don't need the image id's.

Compare:
	http://www.marklreyes.com/tutorials/2_vqg_jsAJAX/html/ch4/script03.html
	http://www.marklreyes.com/tutorials/2_vqg_jsAJAX/html/ch8/script07.html

line 12:
	- This line sets up a new regular expression pattern that looks for the text_off anywhere in a string

line 21:
	- thisImage.overImage.src = thisImage.src.replace(re,"_on"); 
			vs
	  overImage.src = "images/" = thisImage.id + "_on.gif"; 	
	  
	- The new line uses the re pattern to look for that particular bit of a string and when it's found, replace it with this string.
	  In this case, we're looking for _off and turning it into _on. This allows us to not worry about the id attribute being set on this
	  image-it just doesn't matter anymore.

line 27:
	- thisImage.clickImage.src = thisImage.src.replace(re,"_click");
			vs
	  clickImage.src = "images/" + thisImage.id + "_click.gif";

	- In this case, we're looking for _off and turning it into _click
	
TIPS:
	- This can be handy if your images are a mixture of GIF and JPEG files-now, your JavaScript code doesn't have to ever know what 
	  suffix each image has.
	  
	- You may have noticed that there's some code at the end of this script that isn't in,
		http://www.marklreyes.com/tutorials/2_vqg_jsAJAX/html/ch4/script03.html 
		
	  We've added a little bit of accessibility--now, for those people who use the keyboard instead of a mouse, tabbing onto an image 
	  will give the same effect that a hover does for a mousing user.
*/	
