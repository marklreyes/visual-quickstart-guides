window.onload = initStyle;
window.onunload = unloadStyle;

function initStyle() {
	var thisCookie = cookieVal("style");	
	if (thisCookie) {	
		var title = thisCookie;
	}
	else {
		var title = getPreferredStylesheet();
	}
	setActiveStylesheet(title);
	
	var allButtons = document.getElementsByTagName("input");
	for (var i=0; i<allButtons.length; i++) {
		if (allButtons[i].type == "button") {
			allButtons[i].onclick = setActiveStylesheet;
		}
	}
}

function unloadStyle() {
	var expireDate = new Date();
	expireDate.setYear(expireDate.getFullYear()+1);
	document.cookie = "style=" + getActiveStylesheet() + ";expires=" + expireDate.toGMTString() + ";path=/";
}

function getPreferredStylesheet() {
	var thisLink, relAttribute;
	var linksFound = document.getElementsByTagName("link");
	
	for (var i=0; i<linksFound.length; i++) {
		thisLink = linksFound[i];
		relAttribute = thisLink.getAttribute("rel");
		if (relAttribute.indexOf("style") > -1 && relAttribute.indexOf("alt") == -1 && thisLink.getAttribute("title")) {
		 	return thisLink.getAttribute("title");
		}
	}
	return "";
}

function getActiveStylesheet() {
	var thisLink;
	var linksFound = document.getElementsByTagName("link");
	
	for (var i=0; i<linksFound.length; i++) {
		thisLink = linksFound[i];
    	if (thisLink.getAttribute("rel").indexOf("style") > -1 && thisLink.getAttribute("title") && !thisLink.disabled) {
			return thisLink.getAttribute("title");
		}
	}
	return "";
}

function setActiveStylesheet(inVal) {
	var thisLink;
	var linksFound = document.getElementsByTagName("link");
	
	if (inVal) {
		if (typeof inVal == "string") {
			var title = inVal;		
		}
		else {
			var title = inVal.target.id;
		}
	}
	else {
		var title = window.event.srcElement.id;
	}

	for (var i=0; i<linksFound.length; i++) {
		thisLink = linksFound[i];
    	if (thisLink.getAttribute("rel").indexOf("style") > -1 && thisLink.getAttribute("title")) {
			thisLink.disabled = true;
			if (thisLink.getAttribute("title") == title) {
				thisLink.disabled = false;
			}
		}
	}
}

function cookieVal(cookieName) {
	var thisCookie = document.cookie.split("; ");
	for (var i=0; i<thisCookie.length; i++) {
		if (cookieName == thisCookie[i].split("=")[0]) {
			return thisCookie[i].split("=")[1];
		}
	}
	return "";
}

/* STYLE SHEET SWITCHER 

Lines 5-12:
	The initStyle() function is loaded when the page runs, and its goal is to initialize everything that the page needs. Here, we're checking
	to see if the user has a cookie already set that saved their preferred style. Out old buddy the cookieVal() function comes back from
	Chapter 9 to read the cookies and see if there's one called "style". If there is, its value is the stylesheet we want; if not,
	getPreferredStylesheet() is called. Once the desired style sheet is known, setActiveStylesheet() is called to set the wanted appearance.
	
Lines 14-19:
	The initStyle() function also needs to add event handlers to our buttons. Here, we tell them both to call setActiveStylesheet() when
	they're clicked. 
	
Lines 22-26:
	When the page is unloaded, we need to set the cookie for the future. The cookie's expiration date is set to one year from today,
	getActiveStylesheet() is called to establish what the user currently has, and the cookie is written out for future use.
	
Lines 28-30:
	If, when the page is loaded, there's no cookie saying which style the user has previously chosen, our script needs to be able to figure
	out what the preferred style sheet is. That's the goal of the getPreferredStylesheet() function in this step and the next.
	
Lines 32-38:
	This function loops through each link tag, looking to see if each has a rel attribute, if that attribute has a value that does not contain
	"alt", and if the tag has a 'title' attribute. If one is found that matches all these criteria, that's the preferred style sheet, and its
	'title' attribute is returned.
	
	To see wich of the actual tags in our code is the preferres style sheet, look at the link tags in our HTML file. While there are three
	link tags, only two of them have 'title' attributes. And of theose two, one has a rel attribute of "stylesheet", while the other is 
	"alternate stylesheet'. Consequently, the preferred style sheet has to be 'default'.
	
Lines 46-51:
	As mentioned above, we're going to want to use a cookie to store the user's chosen style sheet when they leave this site, so that
	they'll be greeted with their favorite font when they return. While we could write out a cookie every time they click the style
	button, it's a better idea to only write it out once when they leave the site. Here, the getActiveStylesheet() function (which is called 
	when the page is unloaded, as we saw above) looks through all the link tags, chooses the one that's currently enabled, and returns the 
	'title' of that style.
	
Lines 56-69:
	When the user loads this page, the setActiveStylesheet() function is called and passed a parameter that's referred to inside the function
	as inVal. When setActiveStylesheet() is called after a button is clicked, however, there may or may not be a parameter passed, depending
	on which browser is being used and how it handles events. Here's where we do a little checking to figure out how we got here and what the
	user wants to do. There are three possibilities.
	
	- initStyle() called this function and passed it a string containing the preferred stylesheet. In this case, inVal exists and it's a
	string, so 'title' is set to 'inVal'.
	
	- A style button was clicked in a browser that supports W3C style events. In this case, 'inVal' is automatically set to the event that
	triggered the function, so 'inVal' will exist but it won't be a string. When that happens, we know that the 'target' of the event 
	(what caused the event to trigger) is the button that was clicked, and the 'id' of that button stores the style desired.
	
	- A style button was clicked in a browser that doesn't support W3C standards but does support the IE event model. If that's the case, the
	inVal varaible won't exist, so we instead grab the style desired from window.event.srcElement.id.

Lines 73-78:
	The setActivityStylesheet() function looks through all the link tags in the document, checking each one to make sure that it has both
	a 'rel' attribute that contains "style" and an existing title attribute. If both of these are true, the link is first disabled and then
	(and only then) re-enabled if the 'title' attribute is set to the 'title' value.
	
	So, if the current style sheet being used has the title attribute of "default" and the user clicks the Lg Serif button, JavaScript sees
	that it should load the serif style sheet. There's one link tag with a title of "serif", so all others (ie the 'default' style sheet, in
	this case) are disabled, and only the serif style sheet is turned on.	
	
*/
