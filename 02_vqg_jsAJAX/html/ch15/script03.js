window.onload = initAll;

function initAll() {
	var allLinks = document.getElementsByTagName("a");
	
	for (var i=0; i<allLinks.length; i++) {
		if (allLinks[i].className.indexOf("menuLink") > -1) {
			allLinks[i].onmouseover = toggleMenu;
			allLinks[i].onclick = clickHandler;
		}
	}
}

function clickHandler(evt) {
	if (evt) {
		if (typeof evt.target == "string") {
			toggleMenu(evt,evt.target);
		}
		else {
			toggleMenu(evt,evt.target.toString());
		}
	}
	else {
		toggleMenu(evt,window.event.srcElement.href);
	}
	return false;
}

function toggleMenu(evt,currMenu) {
	if (toggleMenu.arguments.length < 2) {
		var currMenu = this.href;
	}

	var startMenu = currMenu.lastIndexOf("/")+1;
	var stopMenu = currMenu.lastIndexOf(".");
	var thisMenuName = currMenu.substring(startMenu,stopMenu);

	var thisMenu = document.getElementById(thisMenuName);
	thisMenu.style.display = "block";

	thisMenu.parentNode.className = thisMenuName;
	thisMenu.parentNode.onmouseout = function() {
		document.getElementById(this.className).style.display = "none";
	}
	thisMenu.parentNode.onmouseover = function() {
		document.getElementById(this.className).style.display = "block";
	}
}

/* ENHANCING PULL-DOWN MENUS (If you want to make your menus more accessible, like people who navigate using the keyboard)

Line 9: We'll need to add more code to the 'onclick' event handler, so we're giving it a function of its own, 'clickhandler'.

Line 14: here's the vent handler, being passed the 'evt' parameter. 
	* RECALL: Some browsers pass an event object and some don't.

Lines 15 - 26: First, we check to see if we have an event object-if we do, 'evt' exists. Next, once we know we've got it, we check to see if
	its 'target' property is a string, because we're going to need it to be one. If it is, we pass both the vent and its target to 
	'toggleMenu()'
	
	If 'target' isn't a string, we force it to be one, by calling the 'toString()' method, and use that (along with 'evt') as our parameters
	to 'toggleMenu()'.
	
	If there wasn't any event object, we'll send 'toggleMenu()' a dummy 'evt' object and 'window.event.srcElement.href' which is where IE
	stores the value we need.

Lines 29 - 32: Here's where the menu gets toggled, and because both a click and a mouse movement can trigger the display, 'toggleMenu()' needs
	to be a little more complex to handle things. Start off the function with two paramenters, but here's an important thing about JavaScript:
	just because a function is expecting to be passed two arguments, doesn't mean that it always must be passed both. In fact, the way we've 
	written 'toggleMenu()', it can get:
		* zero arguments, when the browser is IE and 'toggleMenu()' was triggered via the mouse
		* one argument (the event object), when the browser isn't IE and 'toggleMenu()' was triggered via the mouse
		* two arguments (the event object and the menu name) when 'toggleMenu()' was called by 'clickHandler()'
		
	If we come in here with 0 or 1 arguments (which we can check by looking at 'toggleMenu.arguments.length'), we know that we can find the
	menu name by looking at this.href-in other words, it should work just the way it used to. But because we need the value in currMenu, that's
	where we'll store it.

Lines 34 - 36: Calculate the 'startMenu', 'stopMenu' and 'thisMenuName', but now it's based off of 'currMenu'.

Lines 38-39: Because we can't always just refer to 'this' (as it's not accurate if we clicked to get here), we'll store the current menu in 
	'thisMenu' and then as before, we set it to display.
	
Line 41: Finally, we have to change the parent class name to match the menu's id, and that's handled here.

TIPS: In this example, clicking on a menu item expands the menu, but a mouse is required to close it again.

*/
