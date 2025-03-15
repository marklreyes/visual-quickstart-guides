window.onload = initAdvert;

function initAdvert() {
	document.getElementById("annoyingAdvert").style.display = "block";
	document.getElementById("closeBox").onclick = function() {
		document.getElementById("annoyingAdvert").style.display = "none";	
	}
}

/* HIDING AND DISPLAYING LAYERS 
line 4: 
	- Once the page loads, set annoyingAdvert to display block.

lines 5-6:
	- Let the user close the layer by clicking what looks like a close widget. Setting the display property to none turns the layer back
	  off again.

*/
