window.onload = newWinLinks;

function newWinLinks() {
	for (var i=0; i<document.links.length; i++) {
		if (document.links[i].className == "newWin") {
			document.links[i].onclick = newWindow;
		}
	}
}

function newWindow() {
	var catWindow = window.open("images/pixel1.jpg", "catWin", "resizable=no,width=350,height=260");
	return false;
}

/* 
OPENING A NEW WINDOW 

line 11:
	Define a function called newWindow()

line 12: 
	The variable catWindow contains a new window object, referencing the image file, pixel1.jpg
	The name of this new window is catWin.
	Names are required b/c we might want to reference this window later in a link or in another script.
	The new window has a width of 350px and a heigh of 260px-these parameters are optional.
	
TIP:
	You can't have any spaces between the commas in the width and height parameters.
	Your scripts may not work in some browsers. In general when you get script errors and you need to debug your scripts, look for this.


	IE6 and later does some incosistent window stuff for security reasons.
	If security is turned off, everything in this chapter works.
	IE7 and later may open new tabs instead, based on your tabbed browsing settings.
*/