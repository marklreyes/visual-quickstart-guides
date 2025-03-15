window.onload = initAll;

function initAll() {
	document.getElementById("redirect").onclick = initRedirect;
}

function initRedirect() {
	alert("We are not responsible for the content of pages outside our site");				//This alert appears after the link has been clicked
	window.location = this;																	//Allows us to set the browser window to the location specified by the keyword, this, which contains the link
	return false;
}

/* 
	You may want to perform an action after the user clicks a link, but before the browser loads the new page.
	This example puts an alert dialog before continuing on to its final destination. 
	
	TIPS:
	'this' keyword grabs the URL from the HTML link
	We don't have to touch the script if we someday change the HTML link
	You can have links all over calling the same script and the one line of code would automatically grab their href values as well.
	
	HTML pages can be modified by people who don't know JavaScript. 
	
	If the browser doesn't interpret JavaScript, it loads only the HTML page. when they click the link it loads as it would normally do.
	
	Unobtrusive Scripting: where the code is separated out from the HTML, so that both are more flexible
*/
