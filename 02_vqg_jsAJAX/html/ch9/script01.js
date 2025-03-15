addOnload(initOne);
addOnload(initTwo);
addOnload(initThree);

function addOnload(newFunction) {
	var oldOnload = window.onload;
	
	if (typeof oldOnload == "function") {
		window.onload = function() {
			if (oldOnload) {
				oldOnload();
			}
			newFunction();
		}
	}
	else {
		window.onload = newFunction;
	} 
}

function initOne() {
	document.getElementById("pageBody").style.backgroundColor = "#0000FF";
}

function initTwo() {
	document.getElementById("pageBody").style.color = "#FF0000";
}

function initThree() {
	var allTags = document.getElementsByTagName("*");

	for (var i=0; i<allTags.length; i++) {
		if (allTags[i].nodeName == "H1") {
			allTags[i].style.border = "5px green solid";
			allTags[i].style.padding = "25px";
			allTags[i].style.backgroundColor = "#FFFFFF";
		}
	}
}
/* THE ONLOAD EVENT 

This script demonstrates what to do when you have multiple things you need to have happen when the page loads.

lines 1 - 3:
	- In this script, we want three entirely separate things to happen when the page first loads. 
	  Setting window.onload three times wouldn't work, b/c the second time would overwrite the first, 
	  and the third would overwrite the second.
	  
	  Instead, we're calling a new function, addOnload(), which handles the onload handler for us. For each call, we're passing one parameter:
	  	* the name of the function we want to run when an onload event is triggered.
	  	
	  The script is setting multiple onload handlers (for color formatting) to be run when the page loads.

line 5:
	- This line starts off a new function, much like any other function. What's being passed in is the name of a function.
	- This can be a bit confusing, so here's an example (which works out the same in the end):
	
		  * Instead of calling:			window.onload = myNewFunction;
		  * We'll instead call:			addOnload(myNewFunction);

line 6:
	- This line declares a new variable oldOnload-if we've already set window.onload, we'll store its value here. 
	  If we haven't, it doesn't hurt anything.
	  
line 8:
	- In this line, we check to see what kind of variable oldOnload is. If we've previously set window.onload, it'll be a function call
	  (otherwise, it'll be nothing at all). If it's a function, do the following.

lines 9 - 14:
	- These lines of code rest the value of window.onload to do two things,
		* whatever it was doing before
		* our new function
	- The window.onload event handler is set to be an anonymous function (one that doesn't have a name). 
	  Then, if oldOnload has a value (which it should, but this works around a bug in IE7), we tell window.onload to do what it was 
	  already doing. But before the function ends, we add that it needs to also do our newFunction() as well.
	  
lines 16 - 18:
	- If oldOnload wasn't a function, ie undefined, we tell it do our new function when the page completes loading.
	- In this fashion, we can call addOnload() multiple times,
		* the first time it assigns its function to window.onload
		* the second and later times it creates that anonymous function, telling JavaScript to do everything it's been told to 
		  do previously and the new things as well.
		  
TIPS:
	- If you want to have an onload handler do more than one thing, the easiest way is to create one function that does everything, 
	  and then have the onload handler call that function. But make sure that each function returns-if , for example, your function 
	  contains a setTimeout() call to itself, it'll never return and therefore never go on to the rest of the called functions.
	  
	- If you're working with an existing body of code, it's easy to accidently reset window.onload-any given HTML page can call 
	  multiple external JavaScript files, any of which can set the event handler. If one place sets window.onload directly, but 
	  every time after that you call addOnload(), you're fine. But if you set window.onload after you've set it previously 
	  (whether directly or via addOnload()), you'll have walked on top of your handler and lost its original value.
	
	- This script is loosely based on one Simon Willison (simonwillison.net)	  	
*/

