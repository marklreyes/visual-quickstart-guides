window.onload = initForms;

function initForms() {
	for (var i=0; i< document.forms.length; i++) {
		document.forms[i].onsubmit = function() {return validForm();}
	}
}

function validForm() {
	var allGood = true;
	var allTags = document.getElementsByTagName("*");

	for (var i=0; i<allTags.length; i++) {
		if (!validTag(allTags[i])) {
			allGood = false;
		}
	}
	return false;

	function validTag(thisTag) {
		var outClass = "";
		var allClasses = thisTag.className.split(" ");
	
		for (var j=0; j<allClasses.length; j++) {
			outClass += validBasedOnClass(allClasses[j]) + " ";
		}
	
		thisTag.className = outClass;
	
		if (outClass.indexOf("invalid") > -1) {
			invalidLabel(thisTag.parentNode);
			thisTag.focus();
			if (thisTag.nodeName == "INPUT") {
				thisTag.select();
			}
			return false;
		}
		return true;
		
		function validBasedOnClass(thisClass) {
			var classBack = "";
		
			switch(thisClass) {
				case "":
				case "invalid":
					break;
				case "imgURL":
					if (allGood && !imgURL(thisTag.value)) classBack = "invalid ";
				default:
					classBack += thisClass;
			}
			return classBack;
		}
				
		function imgURL(newURL) {
			var re = /^(file|http):\/\/\S+\/\S+\.(gif|jpg|jpeg|png)$/i;

			if (re.test(newURL)) {
				document.getElementById("chgImg").src = newURL;
				return true;
			}
			return false;
		}
		
		function invalidLabel(parentTag) {
			if (parentTag.nodeName == "LABEL") {
				parentTag.className += " invalid";
			}
		}
	}
}
/* VALIDATING A FILE NAME 

line 56:
	- This is in the imgURL() function. We want to check the full field entered, so the regular expression begins with /^ and ends with $/.
	- The input can begin with either the text "http" or "file" so the two are grouped together with a | to show that either one or the 
	  other variable is acceptable.
	- Whether the user is getting the image off of their hard drive or off the web, the next characters have to be "://" so that's checked
	  for next.
	- Note that each of the forward slashes must be escaped individually (that's what the two instances of \/ are, escaped forward slashes.)
	  b/c forward slashes are regular expression characters.
	- After that nearly anything goes, so \S+ is used to signify that one ore more non-white space characters follow. Then there's 
	  another required forward slash to separate the domain from the file name, and then another \S+ to handle the file name.
	- The file name needs to end with a period and then "gif", "jpg", "jpeg", or "png"
	- The period is escaped, and the suffixes are grouped together to test for any match.
	- After the RegExp, the modifier i is used, to allow the user input to be eiether upper-or lowercase. This modifer tells the RegExp 
	  not to be case-sensitive.
*/
