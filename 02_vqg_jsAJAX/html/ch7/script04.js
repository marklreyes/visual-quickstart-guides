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
	return allGood;

	function validTag(thisTag) {
		var outClass = "";
		var allClasses = thisTag.className.split(" ");
	
		for (var j=0; j<allClasses.length; j++) {
			outClass += validBasedOnClass(allClasses[j]) + " ";
		}
	
		thisTag.className = outClass;
	
		if (outClass.indexOf("invalid") > -1) {
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
				case "reqd":
					if (allGood && thisTag.value == "") {
						classBack = "invalid ";
					}
					classBack += thisClass;
					break;
				default:
					if (allGood && !crossCheck(thisTag,thisClass)) {
						classBack = "invalid ";
					}
					classBack += thisClass;
			}
			return classBack;
		}
				
		function crossCheck(inTag,otherFieldID) {
			if (!document.getElementById(otherFieldID)) {
				return false;
			}
			return (inTag.value == document.getElementById(otherFieldID).value);
		}
	}
}

/* CHECKING FIELDS AGAINST EACH OTHER 

lines 53 -54:
	Checking to make sure that the two password fields are the same. Because the second password field has a class containing passwd1, 
	this JavaScript knows that it has to crosscheck the second field against the first. Here in the default block of the conditional is where 
	that's handled. If allGood is true and the crosscheck() function spotted a problem (and returned false), then we want to set classBack to invalid.

lines 61 - 65:
	It takes in the current tag and the id of the other field to check against. In this case, the current tag is the passwd2 <input> and the id of 
	the other field is passwd1. If the other field doesn't exist, no check can be done; that's a problem, so the function returns to false. 
	Otherwise the fields both exist, so we compare their values: if they're equivalent, trie is returned; if they aren't, false is returned.


TIP:
	- This script does not check against a master password database to see if the password the user entered is valid; that requires a CGI on the server.
	  It just makes sure that when a password is entered twice, it is the same value both times.
*/