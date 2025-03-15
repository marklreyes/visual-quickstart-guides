window.onload = nameFieldInit;

function nameFieldInit() {
	var userName = "";
	if (document.cookie != "") {
		userName = document.cookie.split("=")[1];
	}

	document.getElementById("nameField").value = userName;
	document.getElementById("nameField").onblur = setCookie;
	document.getElementById("cookieForm").onsubmit = setCookie;
}

function setCookie() {
	var expireDate = new Date();
	expireDate.setMonth(expireDate.getMonth()+6);
	
	var userName = document.getElementById("nameField").value;
	document.cookie = "userName=" + userName + ";expires=" + expireDate.toGMTString();
	
	document.getElementById("nameField").blur();
	return false;
}
/* BAKING YOUR FIRST COOKIE 

Sets a cookie from a value entered by the user into a form. When you try this one out 
it won't appear to do much, but the cookie is actually being created. 

line 3:
	- Set up the function nameFieldInit() to define the value of the cookie. This function is called when the window has completed loading.

line 4:
	- Initialize the variable userName with a null value.
	
lines 5 - 6:
	- Begin with a conditional test by first checking that the object document.cookie does not contain a null value. The method split("=")
	  splits a cookie into an array, where cookieField[0] is the cookie name and cookieField[1] is the cookie value.
	  
	  Note that cookieField can be any variable that you want ot use to store a particular cookie's fields. So you assign userName the value
	  returned by document.cookie.split("=")[1], the cookie value.
	  
line 9:
	- Setting getElementById("nameField").value puts the user's name into the text field when the page loads if there's a name stored 
	  in the cookie file.
	  
lines 10 - 11:
	- In the first line, the onblur evenet handler calls the setCookie() function when the user leaves the text field.
	  In the second, we do the same thing for te form's onsubmit handler.
	  
	  If you've pressed enter after you've typed your name, IE for some reason does not trigger the onblur handler. Adding the onsubmit
	  handler catches all the variants.
	  
line 14:
	- Now begin a new function, called setCookie()
	
line 15:
	- Get the current date, and put it into the new variable expireDate.
	
line 16:
	- This line gets the month portion of expireDate, adds 6 to the month, and then sets the month portion of the expireDate to the new value.	  In other words, it sets the expiration date of the coorie we're creating to six months in the future.

line 18:
	- This line creates a new userName variable and assigns it whatever the user typed into the text field. The userName variable has to be 
	  created twice (once inside each function) because it's not a global; that is, we're using it inside each function, but we're not
	  expecting it to keep its value across functions-it's new each time.
	  
line 19:
	- Here's where we write the cookie. We're setting document.cookie (remember, a cookie is just a text string, so you can use the same text
	  text string techniques to build it, like using the + sign to combine things) to contain the user's name and the cookie expiration date.
	  The toGMTString() method converts the expireDate Date object into a text string so that it can be written into the cookie.

lines 21 - 22:
	- Remember when we set up the form so that setCookie() could be called in one of two ways? Here's where we handle the fallout
	  of that choice:
	  
	  * If we're in IE, the first line causes the focus to leave the name field, so it's clear that something has occured, and the second
		(returning a value of false) keeps the form from actually submitting.
		
	  * If we're not in IE, the first line does nothing (that is, we've already left the name field, so leaving it again doesn't matter) and 
	    the second keeps the form submission from being triggered.
	    
TIPS:
	- This script assumes that the first cookie contains the user name. Later scripts show how to handle multiple cookies and get a cookie
	  by name instead of number.

	- The scripts in this chapter are ordered in such a way that they'll work fine if you run them in the order they appear. If you skip
	  around, you may encounter some weird results (such as the browser thinking that your name is a number). If you want to run them out
	  of sequence, try running script05.js in between scripts. 

*/		
