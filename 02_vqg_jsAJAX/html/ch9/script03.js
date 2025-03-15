window.onfocus = moveBack;

function moveBack() {
	self.blur();
}
/* THE ONFOCUS EVENT 
line 1: 
	- The window and event handler object calling a function, in this case moveBack

lines 3 - 5:
	- If the browser window becomes the active window, this function is triggered and forces the window to be blurred (ie inactive).

*/
