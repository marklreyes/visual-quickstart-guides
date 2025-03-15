window.onblur = moveUp;

function moveUp() {
	self.focus();
}
/* THE ONBLUR EVENT 

line 1:
	- The window and event handler object calling a function, moveUp.

lines 3 - 5:
	- If the browser becomes the inactive window, tis function is triggered and forces the window to become active.
	
TIPS:
	- Be careful not to open up two windows that both contain this bit of code. Your browser will not handle the result gracefully.
	- Instead of using this script on the control panel, you could use script03.js on the main window to always make it go to the back
	  making the control panel always the front-most window.
	- More familiar uses of onblur event:
		* Advertisers who open ad windows behind your current web page, which you don't discover until you close the window and find a stack
		  of them piled up. Unfortunately, people blame the last web site they opened, when in fact the ads were likely created by a page 
		  browsed much earlier.
*/