window.onload = initAll;

function initAll() {
	var allLinks = document.getElementsByTagName("a");
	
	for (var i=0; i<allLinks.length; i++) {
		if (allLinks[i].className.indexOf("menuLink") > -1) {
			allLinks[i].onclick = toggleMenu;
		}
	}
}

function toggleMenu() {
	var startMenu = this.href.lastIndexOf("/")+1;
	var stopMenu = this.href.lastIndexOf(".");
	var thisMenuName = this.href.substring(startMenu,stopMenu);

	var thisMenu = document.getElementById(thisMenuName).style;
	if (thisMenu.display == "block") {	
		thisMenu.display = "none";
	}
	else {
		thisMenu.display = "block";
	}

	return false;
}

/* USING SLIDING MENUS 

Line 4: When the page loads, the initAll() function is called, and it begins by creating an array of all the links on the page.

Lines 6 - 10: Once we have all the links up, we loop through them, looking for those links with a class of 'menuLink' and adding an onclick
	handler to just those links. Here, the onclick handler is set to call the toggleMenu() function when they're clicked.

Lines 14 - 15: Inside toggleMenu(), JavaScript has give us 'this'. Here, 'this' is the link object that the user clicked, which means that 
	'this.href' is the full link URL. But we only want the part between the last forward slash and the last period so we create and set 
	'startMenu' and 'stopMenu' to be the locations in 'this.href' where we want to start and stop finding the string that will end up being
	our menu name.
		* If the link was to http://www.javascript.world.com/index.html, we'd only want 'index'

Line 16: The menu name we want begins and ends at these two positions, so here's where we set it.

Line 18: The variable thisMenu is set to the desired menu using the getElementById() method.

Lines 19 - 24: If the 'display' property of 'thisMenu' is 'block' then this code changes it to 'none'. Alternatively, if it's 'none', it's
	changed to 'block'. This is what toggles the menu display.

Line 26: We return a value of false. That's because the toggleMenu() function was called due to an onclick event handler on a link. When we 
	return false, the 'href' attribute never gets loaded into the browser window, so the viewer stays on the same page.
*/
