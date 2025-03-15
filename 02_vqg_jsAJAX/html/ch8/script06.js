window.onload = initForms;

function initForms() {
	for (var i=0; i< document.forms.length; i++) {
		document.forms[i].onsubmit = function() {return validForm();}
	}
}

function validForm() {
	var allTags = document.getElementsByTagName("*");

	for (var i=0; i<allTags.length; i++) {
		validTag(allTags[i]);
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
		}
		
		function validBasedOnClass(thisClass) {
			var classBack = "";
		
			switch(thisClass) {
				case "":
				case "invalid":
					break;
				case "phone":
					if (!validPhone(thisTag.value)) classBack = "invalid ";
				default:
					classBack += thisClass;
			}
			return classBack;
		}
		
		function validPhone(phoneNum) {
			var re = /^\(?(\d{3})\)?[\.\-\/ ]?(\d{3})[\.\-\/ ]?(\d{4})$/;

			var phoneArray = re.exec(phoneNum);
			if (phoneArray) {
				document.getElementById("phoneField").value = "(" + phoneArray[1] + ") " + phoneArray[2] + "-" + phoneArray[3];
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
/* FORMATTING AND VALIDATING STRINGS 

line 51:
	- This RegExp looks for a string that has,
		* An optional left parenthesis 													\(?
		* 3 digits 																		(\d{3})
		* An optional right parenthesis													\)?
		* An optional period, dash, forward, slash, or space							[\.\-\/]?
		* 4 digits																		(\d{4})
	- This pattern is anchored to both the beginning and ending of the string, so extraneous characters are not valid. The sequences
	  of three digits (the area code), three digits (the prefix), and four digits (the suffix) are saved, if found.	

line 53:
	- The exec() method performs the regular expression stored in re on phoneNum. If the pattern we're searching for isn't found, 
	  phoneArray will be set to null. Otherwise, phoneArray will be an array of the values stored by the regular expression.

line 54 - 56:
	- If phoneArray is true, the test was successfully passed, and the array has been initialized. 
	  So, we reset the form field on the page to the area code inside parentheses and a space, followed by the prefix, a dash, and the suffix.
*/
