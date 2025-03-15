window.onload = initImages;

function initImages() {
	for (var i=0; i<document.images.length; i++) {
		document.images[i].ondblclick = newWindow;
	}
}

function newWindow() {
	var imgName = "images/" + this.id + ".jpg"
	var imgWindow = window.open(imgName, "imgWin", "width=320,height=240,scrollbars=no")
}
/* THE ONDBLCLICK EVENT 

line 5:
	The newWindow() event handler gets triggered when a user double-clicks one of the thumbnail images. In that case, a new 
	window pops up, showing the same image in a larger format.

*/
