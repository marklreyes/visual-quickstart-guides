window.onload = initPage;

function initPage() {
	var expireDate = new Date();
	expireDate.setMonth(expireDate.getMonth()+6);

	var hitCt = parseInt(cookieVal("pageHit"));
	hitCt++;

	document.cookie = "pageHit=" + hitCt + ";expires=" + expireDate.toGMTString();
	document.getElementById("pageHits").innerHTML = "You have visited this page " + hitCt + " times.";
}

function cookieVal(cookieName) {
	var thisCookie = document.cookie.split("; ");
	
	for (var i=0; i<thisCookie.length; i++) {
		if (cookieName == thisCookie[i].split("=")[0]) {
			return thisCookie[i].split("=")[1];
		}
	}
	return 0;
}
/* USING COOKIES AS COUNTERS 

lines 4-5:
	- These two lines are the same as, http://www.marklreyes.com/tutorials/2_vqg_jsAJAX/html/ch10/script01.js lines 15-16

line 7:
	- The string pageHit is the name of the cookie.
	- In a few steps, you'll see the function cookieVal()
	- This line takes the name of the cookie from cookieVal(), turns it into a number using the parseInt() method, and then stores
	  the result in the variable htCt.
	- The parseInt() method changes a string (which is what is in the cookie) into a number (which is what the variable needs to 
	  use it as a counter).
	  
line 8:
	- Take the value of hitCt and add 1 to it, incrementing the counter.

line 10:
	- This writes back the updated information to the cookie for future use.
	- What's being written is a text string that combines the string "pageHit=" with the incremented value of hitCt and adds ";expires="
	  with the expiration date, which was incremented by six months back in line 5.

line 11:
	- This line displays the user message in the document.
	- There are extra spaces after "page" and before "times" to make the line look right on screen.
	
line 14:
	- This line begins a new functon called cookieVal(). 
	- It is passed some data, whih can then be referenced inside the function as the variable cookieName.

line 15:
	- The variable thisCookie is set to the array generated by the split("; ") method.

line 17:
	- We begin a loop.

line 18:
	- This conditional checks to see if cookieName is the same as the i th element of the cookie array.

line 19:
	- If the test in line 18 succeeded, then return the cookie's value.

line 22:
	- If we've looked at all the items in the array and found match, return a 0 value.
	
TIPS:
	- When you load the HTML page that calls this script, press the reoload button in your browser to see the counter increment.
	- You can adapt script04.js
		* Use a cookie to track when a particular user had last visited your site and display different pages depending on when that was.
		* EXAMPLE:
			- Online magazines have a cover page with artwork and the names of the stories in the day's issue.
			- If the user visits the site more than once in a 24-hour period, they only see the cover page the first time,
			  subsequent visits jump the user directly to the site's Table of Contents page.
		* If you want a true page hit counter, one that tells how many times a page has been loaded by all users, you'll need to use a
		  counter program that is installed on your Web server. Check with your web hosting company to see if they have counters
		  available, or put "Web page hit counter" into your favorite search engine.
*/
