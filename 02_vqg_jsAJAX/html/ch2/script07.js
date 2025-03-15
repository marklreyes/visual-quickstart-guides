window.onload = initAll;											//when the page finishes loading, it triggers the initAll() function

function initAll() {												//this function tells the element with the id redirect that it should call the initRedirect() function when a user clicks that link
	document.getElementById("redirect").onclick = initRedirect;
}

function initRedirect() {											//if this function is called, it sets window.location to a new page
	window.location = "jswelcome.html";
	return false;													//return false says to stop processing the user's click, so the href page doesn't also get loaded
}

/* 
	TIPS:
		On first glance we might think that we could just set the onclick 
		handler globally, as the page is loading. But we can't.
		
		There's a chance, for a large and complex page, that the browser 
		will not yet have come across the redirect id.
		
		If that happens, JavaScript won't be able to assign the onclick handler. 
		
		Instead we have to wait until the page has completely
		loaded, which is done via onload. 
*/
