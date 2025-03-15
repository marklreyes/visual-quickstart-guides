window.onload = initAll;

function initAll() {
	var allLinks = document.getElementsByTagName("a");
	
	for (var i=0; i<allLinks.length; i++) {
		if (allLinks[i].className.indexOf("menuLink") > -1) {
			allLinks[i].onmouseover = toggleMenu;
			allLinks[i].onclick = function() {
				return false;
			}
		}
	}
}

function toggleMenu() {
	var startMenu = this.href.lastIndexOf("/")+1;
	var stopMenu = this.href.lastIndexOf(".");
	var thisMenuName = this.href.substring(startMenu,stopMenu);

	document.getElementById(thisMenuName).style.display = "block";

	this.parentNode.className = thisMenuName;
	this.parentNode.onmouseout = function() {
		document.getElementById(this.className).style.display = "none";
	}
	this.parentNode.onmouseover = function() {
		document.getElementById(this.className).style.display = "block";
	}
}

/* ADDING PULL-DOWN MENUS 

Lines 8 - 11: Instead of adding an 'onclick' handler to call 'toggleMenu()' as we did previously, here we set 'onclick' to always return false-
	we don't want it to do anything at all. Instead, we'll have 'onmouseover' call 'toggleMenu()' which means that the menu will open up 
	whenever we move the mouse over it.
	
Line 21: Down in toggleMenu(), we're not toggling quite the same way any more. Instead, we're now just going to set this menu to always 
	display.

Line 23: Assign a 'class' to the parent of the current link (that's the div around the link) so that we can keep track of what menu triggered
	the initial toggle. 

	QUICKTRICK: If we got here, then by definition, the cursor is inside the div. And consequently, just setting the parent div's 'onmouseover'
	event handler causes it to immediately trigger.
	
Lines 24 - 26: We still need to tell the parent div when to open and close, and the latter is done here. Instead of setting the div to always
	display, we set it to hide-but only when the cursor moves off the entire div area.
	
Lines 27 - 29: Here we tell the entire div to display. Yes, we did it above in step 2, but we need to do it again here; otherwise, the moment 
	we moved off the link, the menu would snap shut again.

*/
