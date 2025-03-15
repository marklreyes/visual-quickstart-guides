var bannerArray = new Array("images/redBanner.gif", "images/greenBanner.gif", "images/blueBanner.gif");

window.onload = initFrames;

function initFrames() {
	var leftWin = document.getElementById("left").contentWindow.document;

	for (var i=0; i<leftWin.links.length; i++) {
		leftWin.links[i].target = "content";
		leftWin.links[i].onclick = resetBanner;
	}
	
	setBanner();	
}

function setBanner() {
	var contentWin = document.getElementById("content").contentWindow.document;
	var randomNum = Math.floor(Math.random() * bannerArray.length);
	
	contentWin.getElementById("adBanner").src = bannerArray[randomNum];
}

function resetBanner() {
	setTimeout(setBanner,1000);
}

/* 
SHARING FUNCTIONS BETWEEN FRAMES 

line 1:
	Create a new array that contains all the possible banner image names, and assign the array to the bannerArray variable.
	
line 3:
	When the frameset loads, call initFrames() function
	
line 6:
	Start the code insude the initFrames() function.
	We begin by creating the leftwin variable and setting it the same way we've previously stored framed pages:
		Given the frame name left, get that element, given that element, get the contentWindow property, 
		and given the contentWindow property, get its document property.

lines 8 - 11:
	B/c this function's being called from the frameset's context, setting the left navigation bar's 
	links is slightly different than in previous examples. This time we reset both the target property 
	and the onclick handler for each link. The target is set to "content" and the onclick handler is 
	set to the resetBanner function.
	
line 13:
	As the last initialization step, the setBanner() function is called.

line 17:
	The setBanner() function loads up the content window and calculates a random number. 
	Then, the ad banner in the content window is set to a random ad from the array.
	
	Begin by creating contentWin variable and setting it the same way we've previously  stored framed pages:		
		Given the frame name content, get that element, given that element, get the contentWindow property, 
		and given the contentwindow property, get its document property.
		
line 18:
	This line uses the Math.random() function multiplied by the number of elements in 
	the bannerArray array to calculate a random number between 0 and the number of 
	elements in the array. Then it places the result into the randomNum variable.

line 20:
	Set src for adBanner to the current item in the array. That's the new image name, which will then be displayed on the page.
	
lines 23-25:
	resetBanner() function is waiting for the content frame to load with its new page, 
	after which it can then call setBanner() to reset the banner.
	
	If we instead called setBanner(0 immediately, the new content page might not have 
	loaded yet. In that case, we would have a problem as we would then either get an 
	error (b/c adBanner wasn't found), or we would reset the old adBanner-the one from 
	the page that's being unloaded.
	
TIP:
	- resetBanner does not return false-this means that the browser will both do what's here and load the page from the href. 
	  This script depends on that, which is why both onclick handler and target were set.
*/
