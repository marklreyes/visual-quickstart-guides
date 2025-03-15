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

	thisImage.overImage = new Image();
	thisImage.overImage.src = "images/" + thisImage.id + "_on.gif";
	thisImage.onmouseover = function() {
		this.src = this.overImage.src;
	}
}

/* 
You need to make sure the replacement image appears 
immediately with no delay while it is fetched from the server 

Use JavaScript to place the images into variables used by your script,
which preloads all the images into the browser's cache 
(so they're already used on the user's hard disk when they are needed).

Then, when the users moves the mouse over an image, the script swaps out
one variable containing an image for a second variable containing the replacement image.



line 1: window.onload event handler is triggered when the page has finished loading
		the handler calls the rolloverInit() function.
		
		This handler is used here to make sure that the script doesn't execute 
		before the page is done loading.

line 3: rolloverInit function scans each image on the page, looking to see if the tag around the image is
		an <a> tag, indicating that it is a link. The first of these two lines begins the function.
		
		The second begins the for...next loop that goes through all of the images.
		The loop begins by setting counter variable i to 0. Then each time it loops, if the value of i is
		less than the number of images in the document, increment i by 1.
		
line 5: this is where we test to see if the tag surrounding the image is an anchor tag.
		We do it by looking at an object and seeing if the object's value is A (the anchor tag).
		
		1 - document.images[i] is the current image
			its parentNode property is the container tag that surrounds it
			tagName then provides the name of the container tag
			Read it as, "For this particular image, is the tag around it an 'A'?"
		
line 6: if the result of line 5 is true, then setupRollover function is called and passed through the current image

line 11: this function adds two new properties to the image object that's passed in.
		1 - outImage: the version of the image when you're not on it
		2 - overImage: the version of the image when you're on it
		
		Both of which are image objects themselves. 
		B/c they're image objects, once they're created, we can add their src property.
		
		The src for outImage is the current (off) image src.
		The src value for overImage is calculated based on the id attribute of the original image.
		
		This line starts off the function with the image that was passed to it by the rolloverInit() function.

line 12: takes the image object that was passed in and adds the new outImage property to it.
		B/c you can add a property of any kind to an object, and b/c properties are just objets themselves,
		what's happening is that we're adding an image object to an image.
		
		The parentheses for the new image object are optional, but it's good coding practice to include them.
		If needed, you can set properties of the new image object by passing certain parameters.
		
line 13: set the source for the new outImage to be the same as the source of thisImage
		The default image on the page is always the version you see when the cursor is off the image.
		
line 14: start of an anonymous function, a function without a name.
		
		Tell the browser to trigger what should happen when the user moves the mouse away from the image.
		
		Whenever that happens, we want to set the image source back to the initial source value,
		the outImage version of the image.

lines 18-19: in the first line we create a new image object that will contain the overImage version of the image.

		The second, sets the source for overImage.
		It builds the name of the source file on the fly, concatenation "images/" with the id of the image.

lines 20-22: another anonymous function that tells the browser that when the user moves the cursor over the image, 
			 it should reset the curent inage's source to that of the overImage version.

TIPS: 
	1 - When you prepare your graphics for rollovers, make sure that all your GIF images are not transparent.
		If they are, you'll see the image you're trying ro replace beneath the transparent image.
		
	2 -	Both the original and the replacement images need to have identical dimensions. 
		Some browsers resize the i mage for you, ending a distorted result.
	
	3 -	The rollover happened when you moved the cursor over the image, hence on mouseover and mouseout are now attahed to the image, not the link.
	
	4 - tagName always returns an uppercase value
*/

