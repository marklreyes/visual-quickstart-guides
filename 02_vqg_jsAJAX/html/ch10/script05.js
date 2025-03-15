window.onload = cookieDelete;

function cookieDelete() {
	var cookieCt = 0;

	if (document.cookie != "" && confirm("Do you want to delete the cookies?")) {
		var thisCookie = document.cookie.split("; ");
		cookieCt = thisCookie.length;
		
		var expireDate = new Date();
		expireDate.setDate(expireDate.getDate()-1);
						   
		for (var i=0; i<cookieCt; i++) {
			var cookieName = thisCookie[i].split("=")[0];
			document.cookie = cookieName + "=;expires=" + expireDate.toGMTString();
		}
	}
	document.getElementById("cookieData").innerHTML = "Number of cookies deleted: " + cookieCt;
}
/* DELETING COOKIES
This script is going to keep track of how many cookies we deleted.

line 4:
	- Creating the cookieCt variable and set it to zero.
	
line 6:
	- This test first checks to make sure that the cookie doesn't contain a null value, that is, there are some cookies.
	- If the test shows that the cookie is empty, then the script will do nothing.
	- The second part of the test tells the browser to put up a confirmation dialog with the included text.
	- If confirm() returns true, then we know the user wants to delete their cookies. If false, then we skip down to line 18.

line 7:
	- This line splits the contents of the cookie into an array with the split("; ") method and assigns that array 
	  to the variable thisCookie.
	  
line 8:
	- We now know how many cookies we're going to be deleting, so that's stored in cookieCt.
	
lines 10 - 11:
	- Create a new date object, expireDate which is then set to the current date minus 1 - in other worders, to yesterday.

line 13:
	- Now begin a for loop, so that we can delete all the cookies, not just one. First, set the value of i to 0, then as long as 
	  i is less than the number of cookies, increment i by 1.
	  
line 14:
	- Use split("=")[0] to get the name of the ith cookie in the array, which is then stored in the variable cookieName.
	
line 15:
	- Here's where the cookie with the changed expiration date gets written back out.

line 18:
	- The script is out of the for loop now, and this line sets the number of cookies deleted in the HTML document.
	
TIP:
	* Setting innerHTML to a value will now show the actual number of cookies deleted in those cases (always zero) as well.
*/
