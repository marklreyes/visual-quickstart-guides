window.onload = initForms;

function initForms() {
	for (var i=0; i< document.forms.length; i++) {
		document.forms[i].onsubmit = function() {return validForm();}
	}
	document.getElementById("sunroof").onclick = doorSet;
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
				case "reqd":
					if (allGood && thisTag.value == "") {
						classBack = "invalid ";
					}
					classBack += thisClass;
					break;
				case "radio":
					if (allGood && !radioPicked(thisTag.name)) {
						classBack = "invalid ";
					}
					classBack += thisClass;
					break;
				case "isNum":
					if (allGood && !isNum(thisTag.value)) {
						classBack = "invalid ";
					}
					classBack += thisClass;
					break;
				case "isZip":
					if (allGood && !isZip(thisTag.value)) {
						classBack = "invalid ";
					}
					classBack += thisClass;
					break;
				case "email":
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
			return (inTag.value != "" || document.getElementById(otherFieldID).value != "");
		}
		
		function radioPicked(radioName) {
			var radioSet = "";

			for (var k=0; k<document.forms.length; k++) {
				if (!radioSet) {
					radioSet = document.forms[k][radioName];
				}
			}
			if (!radioSet) {
				return false;
			}
			for (k=0; k<radioSet.length; k++) {
				if (radioSet[k].checked) {
					return true;
				}
			}
			return false;
		}
		
		function isNum(passedVal) {
			if (passedVal == "") {
				return false;
			}
			for (var k=0; k<passedVal.length; k++) {
				if (passedVal.charAt(k) < "0") {
					return false;
				}
				if (passedVal.charAt(k) > "9") {
					return false;
				}
			}
			return true;
		}
		
		function isZip(inZip) {
			if (inZip == "") {
				return true;
			}
			return (isNum(inZip));
		}
		
		function invalidLabel(parentTag) {
			if (parentTag.nodeName == "LABEL") {
				parentTag.className += " invalid";
			}
		}
	}
}

function doorSet() {
	if (this.checked) {
		document.getElementById("twoDoor").checked = true;
	}
}
/* VALIDATING ZIP CODES 

lines 61 - 63:
	This goes into the isNum block of the switch/case conditional. If the entry is non-numeric, isNum() returns false.

lines 66 -69:
	This line has been added to the isZip switch/case block. If the field is not blank and it's not a Zip code, isZip() returns false.
	
lines 111 - 112:
	Inside the isNum() function, if passedVal is empty, then the field we're looking at isn't a number. 
	When that happens, return false, signalign an error.

line 114:
	Scan through the length of passedVal, incrementing the k counter each time it goes through the loop. We're using k b/c we're 
	already inside two other loops (i and j).
	
lines 115 - 120:
	The charAt() operator checks the character at the position k. If the character is less than "0" or greater than "9" it 
	isn't a digit, so bail out and decalre the input to be non-numeric, or false.

line 122:	
	If we make it here, we've got a number, so we return true.
	
lines 125 - 130:
	In the context of this form, it's valid for the zip code field to be empty. Because of that, we first check the field to see if 
	the user entered anything, and if they didn't, we return true-it's a valid entry. If they did enter anything, though, it needs to 
	be numeric, so that's the next check.
	
TIPS:
	- If at some later point we wanted to add a new field to the HTML form that had to be numeric, no new JavaScript code would need to 
	  be written. Instead we'd just use the now-existing isNum check.
	  
	- If your site is likely to draw attention from outside the United States, don't require that the user enter a zip code. 
	  Addresses outside the United States may or may not have postal codes, and those postal codes may not be numeric.
*/
