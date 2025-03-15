window.onload = initPage;

function initPage() {
	var now = new Date();
	var expireDate = new Date();
	expireDate.setMonth(expireDate.getMonth()+6);
   
	var hitCt = parseInt(cookieVal("pageHit"));
	hitCt++;
	
	var lastVisit = cookieVal("pageVisit");
	if (lastVisit == 0) {
		lastVisit = "";
	}
	
	document.cookie = "pageHit=" + hitCt + ";expires=" + expireDate.toGMTString();
	document.cookie = "pageVisit=" + now + ";expires=" + expireDate.toGMTString();
	
	var outMsg = "You have visited this page " + hitCt + " times.";
	if (lastVisit != "") {
		outMsg += "<br />Your last visit was " + lastVisit;
	}
	document.getElementById("cookieData").innerHTML = outMsg;
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
/* HANDLING MULTIPLE COOKIES 

You will often want to deal with more than one cookie at a time. This script shows you how 
to read from more than one cookie and display the information. This example shares a fair 
amount of code from: http://www.marklreyes.com/tutorials/2_vqg_jsAJAX/html/ch10/script04.js, 'Using Cookies as Counters'

line 11:
	- Look for a cookie named pageVisit by passing that string to the cookieVal() function. 
	  It returns a value, which is then stored in lastVisit.

lines 12 - 14:
	- If the value of lastVisit is 0, then put a null value into lastVisit.
	- We know now the user has never been here before.
	
lines 16 - 17:
	- These two lines write the two cookies back to disk with an updated hit number and visit date.
	
lines 19 - 22:
	- The outMsg variable stores the outgoing message for our site's visitor and starts off by being set to tell them 
	  how many times they've been here. The next lines check if the user has been here before (in code:if lastVisit isn't null) 
	  and if they have, we remind them when.
	  
line 23:
	- outMsg is displayed on the screen, telling the user what they've one before.

*/
