if (top.location == self.location) {
	self.location.replace("frameset2.html");
}

/* 
FORCING A PAGE INTO A FRAME

line 1:
	Check to see if the current page (self) is at the top-most level. 
	If it isn't, we're in a frameset.
	
line 2:
	If the location of the current page is at the top, then replace the current page with the URL of the frameset.
	This then displays our framed site as we designed it.

TIP:
	This method works fine if you only have a few pages that might be called from outside their frames, b/c it requires
	a separate frameset page for every page that you might want loaded (in this example) into the content frame.

*/
