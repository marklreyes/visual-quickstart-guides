if (top.location != self.location) {
	top.location.replace(self.location);
}

/* 
KEEPING A PAGE OUT OF A FRAME 

line 1:	
	Check to see if the location of the current page (self) is the 
	Top-most in the browser window hierarchy. If it is there's no need to do anything.

line 2:
	If the current page isn't at the top, replace the top with the location
	of the current page. This forces the current window to be our page and our
	page only.

TIP:
1 - Set top.location to self.location

	side effect: users can no longer use the browser's back button.
	
	If they try to, going back to the previous page automatically jumps them back to the current page.
	Using the replace() method shown above replaces the current page in the 
	history, which allows the back button to display the previous page.

*/
