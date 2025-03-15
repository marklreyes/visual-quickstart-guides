window.onload = newWinLinks;

function newWinLinks() {
	for (var i=0; i<document.links.length; i++) {
		if (document.links[i].className == "newWin") {
			document.links[i].onclick = newWindows;
		}
	}
}

function newWindows() {
	for (var i=1; i<5;i++) {
		var imgName = "images/pixel" + i + ".jpg";
		var winName = "window" + i;
		var catWindow = window.open(imgName,winName,"width=350,height=260");
	}
	return false;
}
/* 
OPENING MULTIPLE WINDOWS 

line 6:	
	In the newWinLinks() function, we've changed this line to call the newWindows() function, since we're opening more than one window.
	
line 12:
	The loop will execute 4 times-note that i is set to 1 instead of the usual 0.
	B/c we know that our four images are numbered 1,2,3 and 4 so why not use those same values for i.

lines 13-14:
	The imgName variable contains the constructed path of the images.
	The winName variable gets the current value of i and appends it to window.
	
line 15:
	The catWindow variable opens the window with the image, adds the window's name, and specifies the window size. 
	The key to this script is that winName (the second parameter to window.open) is unique. So long as each window name is different, new windows will open.
	
TIPS:
	-   The placement of the windows is up to wherever the browser descides to put the windows. 
		If you want to control those locations, see Putting Windows in their Place lesson.
	-	If you want a new window to open up everytime a user clicks a link (versus refreshing an existing window), add a raondom number to the window frame.
	- 	catWindow.focus() is missing from this script. From a user interface standpoint, when multiple windows are opened at once it's not clear where the focus should be.
*/