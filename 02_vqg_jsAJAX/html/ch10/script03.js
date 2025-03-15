window.onload = showCookies;

function showCookies() {
	var outMsg = "";

	if (document.cookie == "") {
		outMsg = "There are no cookies here";
	}
	else {
		var thisCookie = document.cookie.split("; ");
	
		for (var i=0; i<thisCookie.length; i++) {
			outMsg += "Cookie name is '" + thisCookie[i].split("=")[0];
			outMsg += "', and the value is '" + thisCookie[i].split("=")[1] + "'<br />";
		}
	}
	document.getElementById("cookieData").innerHTML = outMsg;
}

/* SHOWING YOUR COOKIES 

How to write a script that reads all the cookies that came from your server and displays their names and values.
If there are no cookies, the script says "There are no cookies here".
If there are cookies, it displays a line per cookie showing what's in the cookie.

line 4:
	- Initializing the variable outMsg, which will contain the message we want to display.

lines 6-7:
	- This conditional test is read, "If the document.cookie object is null (empty), then set outMsg to "There are no cookies here".
	
line 10:
	- If the previous test failed (if there was at least one cookie present), then get the values of all of the cookies using
	  document.cookie.split("; ") and stuff those values into an array called thisCookie
	- Remember that the split("; ") command creates an array of all of the cookies. Later the script will be able to reference each of
	  of the values in the array.

line 12:
	- This line starts a loop by first setting the value of i, the counter variable to 0.
	- If i is less than the number of cookies in the thisCookie array, increment the value of i by 1.
	
lines 13-14:
	- As the script moves through the array, it puts the text string "Cookie name is '" into outMsg, followed by the name of the cookie.
	- Then it concatenates the text string "', and the value is '" and the value of the cookie.
	- At the end of each line, we add an HTML break.

line 17:
	- After setting the variable outMsg, it gets dumped out to the page via innerHTML when all the cookies have been gone through.
*/
