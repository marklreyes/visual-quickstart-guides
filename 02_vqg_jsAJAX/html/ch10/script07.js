window.onload = initPage;

function initPage() {
	var now = new Date();
	var lastVisit = new Date(cookieVal("pageVisit"));
	var expireDate = new Date();
	expireDate.setMonth(expireDate.getMonth()+6);
	
	document.cookie = "pageVisit=" + now + ";expires=" + expireDate.toGMTString();
	var allGrafs = document.getElementsByTagName("p");
	
	for (var i=0; i<allGrafs.length; i++) {
		if (allGrafs[i].id.indexOf("New-") != -1) {
			newCheck(allGrafs[i],allGrafs[i].id.substring(4));
		}
	}	
	
	function newCheck(grafElement,dtString) {
		var yyyy = parseInt(dtString.substring(0,4),10);
		var mm = parseInt(dtString.substring(4,6),10);
		var dd = parseInt(dtString.substring(6,8),10);
		var lastChgd = new Date(yyyy,mm-1,dd);
			
		if (lastChgd.getTime() > lastVisit.getTime()) {
			grafElement.className += " newImg";
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
	return "1 January 1970";
}
/* DISPLAYING "NEW TO YOU" MESSAGES 

Add a little "New!" iamge to the beginning of lines when the cookie says that a line has been added 
since the last time visitor was there.

lines 5 - 7:
	- This section initializes the lastVisit, and expireDate dates.
	- The first is the saved date of the surfer's last visit to the site and 
	- The second will be the expiration date of the cookie when it's rewritten.

line 9:
	- This line writes the cookie, putting the current date into the pagevisit value and the value 
	  of expireDate into expires.
	  
line 10:
	- This line creeates an array of all the p elements on the pge, which allows us to go through each of 
	  them one by one looking for jsut the ones we care about.

line 12:
	- Start a loop to go through the array, looking at each paragraph element in turn.
	
line 13:
	- If this paragraph has an id attribute that contains the text "New-", then we know that this 
	  is a paragraph we care about
	  
line 14:
	- Check to see if this paragraph has something in it that will be new to the visitor.
	- The newCheck() function will do that, and it's passed two paramenters:
	  		* the current paragraph element (allGrafs[i])
	  		* the second part of the id attribute
	- The substring() grabs the part of the string from the fifth character on to the end, and as 
	  that's all we care about here, that's all we'll pass.
	  		* Remember that JavaScript strings are zero-relative, 
	  		  which is why the fifth character of the string is found at position 4.
	  		  
line 18:
	- This function is expecting two parameters to passed in, which will be referred to internally as 
			* grafElement (that paragraph element)
			* dtString (the second part of the id attribute)

lines 19 - 21:
	- The date is parsed out of a string (ie "20060901" is 1 September 2006)
	- The yyyy variable gets the firs 4 digits (starting at digit 0 and ending just before digit 4), 
	  with the result of "2006"
	- The mm variable gets the fourth and fifth digits
	- The dd variable gets the sixth and seventh digits.
	- In each case we also do a parseInt() on the result, which forces the value returned by substring() 
	  into an integer.
	  
line 22:
	- Set lastChgd b/c we've got a year, month, and day. 
	- Subtract 1 from the month to get the correct result
		* Months are zero-relative
		* Years and days are one-relative. See Ch. 12: Making Your Pages Dynamic for more info on 
		  dates and their oddities
		
line 24:
	- Compare the two dates, and only do the following line if the date that the information alst changed 
	  is after the date the surfer last visited.

line 25:
	- Use JavaScript to add an attribute (and its associated value) to an element.
	- The element is a <p> the attribute is class, and the value of the attributes is "newImg"
	- As the element may already have an existing class, this code takes care to add the value and not just overwrite 
	  what's currently there.
	- Once this new attribute has been added, it triggers the browser's rendering engine to immediately and 
	  automatically apply the style to the element, causing the iamge to appear.

lines 30 - 38:
	- This is the now-familiar cookieVal() function. The only difference here is that it has been changed to return
	  "1 January 1970" instead of 0 if no cookie with that name was found, which makes the code a bit simpler elsewhere.
	  The oddity of that date is that JavaScript thinks that is when time began, so everything should be after that.
	  That date won't appear to the user; it's just a internal referenc date for JavaScript.
	  
TIP:
	* You're probably more familiar w/ parseInt() being passed only a single parameter. Here, two are passed: the
	  string to be converted, and 10.
	* That last parameter tells parseInt() to always return a decimal number. Otherwise parseInt() is passed a string
	  starting with 0, it may try to turn the result into octal (base 8 numbering), with incorrect results.
	* In this case, a call to parseInt("09") doesn't return the same result as parseInt("09",10), and the latter is 
	  what we want.
	* It's just a weird JavaScript thing you need to aware of.sfd
	

*/