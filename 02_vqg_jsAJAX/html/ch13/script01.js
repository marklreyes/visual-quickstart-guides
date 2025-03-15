window.onload = initAll;
var xhr = false;

function initAll() {
	document.getElementById("makeTextRequest").onclick = getNewFile;
	document.getElementById("makeXMLRequest").onclick = getNewFile;
}

function getNewFile() {
	makeRequest(this.href);
	return false;
}

function makeRequest(url) {
	if (window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	}
	else {
		if (window.ActiveXObject) {
			try {
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch (e) { }
		}
	}

	if (xhr) {
		xhr.onreadystatechange = showContents;
		xhr.open("GET", url, true);
		xhr.send(null);
	}
	else {
		document.getElementById("updateArea").innerHTML = "Sorry, but I couldn't create an XMLHttpRequest";
	}
}

function showContents() {
	if (xhr.readyState == 4) {
		if (xhr.status == 200) {
			if (xhr.responseXML && xhr.responseXML.contentType=="text/xml") {
				var outMsg = xhr.responseXML.getElementsByTagName("choices")[0].textContent;
			}
			else {
				var outMsg = xhr.responseText;
			}
		}
		else {
			var outMsg = "There was a problem with the request " + xhr.status;
		}
		document.getElementById("updateArea").innerHTML = outMsg;
	}
}

/* Reading Server Data */

/* 

LINE 2: The xhr variable is an XMLHttpRequest object. At this point, we just need to create it outside any functions in order to make it globally available. 

LINES 4 - 7: When the page is first loaded, it knows to call the initAll() function. Here, we set two onclick handlers so that when a user clicks either of the links, the
			 getNewFile() function is triggered.
			 
LINES 9 - 12: Someone's clicked a link, so it's time to do something. Here, we call makeRequest()-but that function needs to know which file was requested. We know that this
   			  information is tucked away in this.href, so we can pass it along. When we come b ack, we know we're done, so we return a value of false, telling the browser that no, 
   			  we don't really want to load up a new Web page.
   			 
LINES 15 - 17: Now, we're inside makeRequest() and it's here that things get interesting. Modern browsers support a native XMLHttpRequest object as a property of window. So, we 
 			   check to see if that property exists, and if it does, we create a new XMLHttpRequest object.
 			
LINES 19 - 24: However, there's a browser that supports XMLHttpRequest that doesn't have a native version of the object, and that's MSIE (5.5 and 6). In that case, we have to
  			   check to see if the browser supports ActiveX. If it does, we then check (using a try/catch error check) to see if we can create an XMLHttpRequest object based on 
  			   ActiveX. If we can, great.
  			   
LINES 27 - 31: Either way, we should have a new xhr object, and if we do, we need to do something (in fact, three somethings) with it. Here are the three things that we always
       		   do with xhr:
       		   
       		   1.) Set the xhr's onreadystatechange event handler. Any time the xhr.readyState property changes its value, this handler is triggered.
       		   2.) We call open() and pass in three parameters: an HTTP request method (ie 'GET", "POST", or "HEAD"), a URL to a file on the server, and a Boolean telling the
       		       server if the request is asynchronous (that is, if we're sitting around waiting for it).
       		   3.) And finally, we send() the request we just created. If we were requesting a POST, the parameters would be passed here.
       		
LINES 32 - 34: If we end up here, we couldn't create an XMLHttpREquest for some reason, and there's nothing else that can be done.

LINES 38 - 39: Now we're down in the showContents() function. The readyState property can have one of several values, and every time the server changes its value, the
  			   showContents() function is triggered. However, we don't actually want to do anything 9at least not here) until the request is finished, so we start off by checking
  			   to see if readyState is 4. If it is, we're good to go, and we can check to see what the request returned.
  			   
  			   The first thing to check is the request's status, which will be a result code returned by the server. A status code of 200 means that everything's fine. The status
  			   here is the same status that is returned by any server call; for instance, if you ask for a file that doesn't exist you'll get a 404 error from the Web server.

LINES 40 - 45: If we're here, that means that everything is fine, and we want to look at what the server actually gave us. There were two different types of files we could be 
			   reading, so we need to check what type of data we got back. The responseXML property contains the data if it's XML. If the contentType property (which can also
			   be referred to as MIME type) contains "text/xml", then we know that we've got a properly formatted DOM object back, and we can use commands we've seen before (such 
			   as getElementsByTagName()) to traverse its nodes. But here, we're just trying to see if it worked, so we'll take everything and dump it all into outMsg. If what
			   we got back isn't valid XML then it's our text file. In that case, we want to put xhr's responseText property into outMsg.

LINES 47 - 49: If what we got back had a status other than 200, we've got a problem, so we set outMsg to say that and append the status error so we can try to figure out what the
   			   problem is.
   			   
LINE 50: Finally, we take outMsg and dump it onto the screen.

TIPS:

	* Because of the way that Ajax works, when you are doing your development and testing, the files that you're reading must reside on a server; they can't just be local files.
	
	* MSIE versions 7 and up have a native object so using an ActiveX control to create the XMLHttpRequest object is no longer required. However, this means that you always have
	  to check for the existance of a native object first-if you check for window.ActiveXObject first, that will be true for IE7+, and then you'll be going down the wrong path.
	  A considerable amount of older, pre-IE7 Ajax code has this problem.
	  
	* If it matters deeply to your code which version of MSIE's ActiveX object you actually get, here's a code snippet for you to use instead:
	
		if (window.ActiveXObject) {
			try {
				xhr = new ActiveXObject("MSxml2.XMLHTTP");
			}
			catch (e) {
				try {
					xhr = new ActiveXObject("MSxml2.XMLHTTP");
				}
				catch (e) {}
			}
		}
	* This approach attempts to use the MSIE6 version (Msxml2.XMLHTTP) of the XMLHttpRequest object first and only falls back to the older version if it can't find it. However,
	  the Microsoft.XMLHTTP version should always give you the latest version available on the PC, so we'll just be using that in this chapter-because eventually, the older code
	  will be going away.
	  
	* One drawback of Ajax calls is that they can be cached; that is, it looks like your application is contacting the server and getting new data, but it's really just looking
	  at stuff it read previously. If that's the case, setting the headers of the request can help. Adding one or more of these hel force calcitrant servers to fork
	  over the goods:
	  	
	  	xhr.setRequestHeader("If-Modified-Since", "Wed, 15 jan 1995 01:00:00 GMT"););
	  	xhr.setRequestHeader("Cache-Control","no-cache"););
	  	xhr.setRequestHeader("Cache-Control","must-revalidate"););
	  	xhr.setRequestHeader("Cache-Control","no-store"););
	  	xhr.setRequestHeader("Pragma","no-cache");
	  	xhr.setRequestHeader("Expires","0");	  	
	  	
	 * You can force the call to return XML data by overriding the MIME type:
	 	xhr.overrideMimeType("text/xml");
	 	
	 	However, this may cause problems with certain browsers and configurations, so use it with care.	
	  	
	  	
*/