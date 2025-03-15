var framesetPage = "frameset3.html";
var currPage = justTheFilename(self.location.pathname);

if (top.location == self.location && framesetPage != currPage) {
	self.location.replace(framesetPage + "?" + currPage);
}

window.onload = chgFrame;

function chgFrame() {
	if (top.location == self.location && document.location.search) {
		var linkURL = justTheFilename(document.location.search);
		var contentWin = document.getElementById("content").contentWindow;
		var currURL = justTheFilename(contentWin.location.pathname);

		if (currURL != linkURL) {
			contentWin.location.replace(linkURL);
		}
	}
}

function justTheFilename(thisFile) {
	if (thisFile.indexOf("/") > -1) {
		thisFile = thisFile.substring(thisFile.lastIndexOf("/")+1);
	}

	if (thisFile.indexOf("?") == 0) {
		thisFile = thisFile.substring(1);
	}

	return thisFile;
}

/* 
FORCING A SITE INTO A FRAME 

lines 1 - 2:
	Creating and setting two variables: 
		- framesetPage: the frameset of the page that we always want to load overall
		- currPage: name of the HTML page that called this external JavaScript file. 
					It needs to be calculated, using justTheFilename() function, line 22
					
					That function gets passed a variable, self.location.pathname, a variable that 
					holds that part of a URL that comes after the domain name.
					
					All we want is the index.html, that's what justTheFilename() calculates and returns,
					which is stored in variable, currPage

lines 4 - 6:
	Run the usual check to see if top.location is the same as self.location, plus check to see if 
	we're currently on the frameset page.
	
	If we are, we don't need to do anything. 
	
	If currPage isn't the frameset, something's wrong, so we need to reload this page, going to the 
	frameset page, and passing currPage in the bargain so that it ends up in the content frameset.

line 8:
	The onload handler is here because we want every page that uses this external JavaScript file to call the chgFrame() function.

line 10:
	chgFrame() function checks to see if,
		a:  It's the frameset page
		b:  There was a question mark in the URL followed by a file name. 
			If that's the case, that file needs to be loaded into the content frame.

line 11:
	Run the usual check to se if top.location is the same as self.location
	If the two are equal, we know we're in a the frameset.
	After that, we look at document.location.search, another built-in field that will contain everything in a URL from a question mark (if one exists) to the end.
	If there's no question mark, document.location.search has no value and we kicked out of this function.
	
line 12:
	This is the first of three variables we'll need to set before we load in a new content frame.
	linkURL, is the file to load in the content frame.
	The linkURL field is set by calling justTheFilename() function and passing in document.location.search
	
line 13: 
	contentWin variable needs to contain what JavaScript knows about the content frame.
	Set it by looking for the id=content, taking its result (which will be a frame), and then getting contentWindow of that frame, which is the page loaded into that frame.
	
line 14: 
	currURL variable is set here to the current content frame page, that is, the current HTML page loaded in the content frame. 
	That is done by calling justTheFilename() function, this time passing it contentWin.location.pathname and storing the result.
	
lines 16 - 18:
	Check to see if currURL is equal to linkURL. If it is, we're on the right page already, so don't do anything. 
	If it isn't, call that same old replace() function and we're done.
	
lines 23 - 31:
	This function takes in a string and tries to to clean it up and turn it into a filename.
	
	First we check to see if it contains a /
	If it does, then we look for the last / in the filename (note that lastIndexOf), and then reset the filename to be verything after it.
	
	Then, we look for a question mark.
	If it's the first character in the filename (ie at position 0), then we rest the filename to be everything from position one to the end.
	
	The filename is returned to wherever the function is called.
	
TIPS:
	- Search engines aren't the only reason why someone might be trying to load a single page of your framed site.
	- If you've bookmarked a page inside a frame, your browser may or may not understand that you're on a particular framed content page, which isn't necessarily the default view of the frameset.
	- If someone has bookmarked a particular single page of your site, this script will set everything up just the way it should be.
*/
