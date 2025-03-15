window.onload = initAdvert;

function initAdvert() {
	document.getElementById("annoyingAdvert").style.display = "block";
	document.getElementById("annoyingAdvert").onmouseover = slide;
	document.getElementById("closeBox").onclick = function() {
		document.getElementById("annoyingAdvert").style.display = "none";	
	}
}

function slide() {
	if (currPos("annoyingAdvert") < (document.body.clientWidth-150)) {
		document.getElementById("annoyingAdvert").style.left = currPos("annoyingAdvert") + 1 + "px";
		setTimeout(slide,100);
	}
	
	function currPos(elem) {
		return document.getElementById(elem).offsetLeft;
	}
}

/* MOVING AN OBJECT IN THE DOCUMENT 
line 5:
	- Add onmouseover event handler to our advertisement, which tells it to trigger the slide() function.
	
line 12:
	- Before we move the layer, we need to figure out if it's within the restrictions that we've placed on it-that's done by checking its 
	  current position using the currPos() function and comparing it to the width of the document window. If it's less than that (minus 
	  another 150 pixels, to take the width of the layer itself into account), then we want to move is some more.

line 13: 
	- To move the layer, we have to change its style.left property. Here, we change it by getting the object's current position,
	  incrementing by 1, and finally adding px to the end to put it i the correct format. Changing style.left is all that's needed to
	  move it to its new location.

line 14:
	- Here's where we tell JavaScript to keep on moving, by calling setTimeout() to call slide() again in one hundred milliseconds
	  (one-tenth of a second).
		  
lines 17:
	- Two places above needed to get the current position of an element, and here's how we'll do it. All we need is the id of 
	  that element.

line 18:
	- Given the id of the object, we can get the object. And given that, all we need is its offsetLeft property, which is the object's
	  left position. The offsetLeft property contains a nueric value, so we can just return it as-is.
	  
TIP:

- If offsetLeft is numeric, why jump through all those hoops to instead change the style.left property?
	* We have to do that b/c offsetLeft is read-only. That is, you can read its value, but you can't change it. There aren't any
	  cross-browser, writeable, numeric positioning elements.

*/