window.onload = nameFieldInit;

function nameFieldInit() {
	if (document.cookie != "") {
		document.getElementById("nameField").innerHTML = "Hello, " + document.cookie.split("=")[1];
	}
}
/* READING A COOKIE 

Get the value from the cookie and display it on the screen.

line 4:
	- Make sure that the value in the object document.cookie isn't null.

line 5:
	- If the cookie isn't empty, then write a text string(the "hello", and note the extra space after the comma) and combine it with the
	  split of the cookie.

TIP:
	- You don't need to specify which of the cookies in the cookie file you are reading.
	- A cookie can only be read y the server that wrote it in the first place.
	- The internal cookie mechanisms in the browser won't let you read or write cookies written by someone else.
	_ You only have to access your own cookies.

*/
