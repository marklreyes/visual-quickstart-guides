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
					if (allGood && !validEmail(thisTag.value)) {
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
		
		function validEmail(email) {
			var invalidChars = " /:,;";
		
			if (email == "") {
				return false;
			}
			for (var k=0; k<invalidChars.length; k++) {
				var badChar = invalidChars.charAt(k);
				if (email.indexOf(badChar) > -1) {
					return false;
				}
			}
			var atPos = email.indexOf("@",1);
			if (atPos == -1) {
				return false;
			}
			if (email.indexOf("@",atPos+1) != -1) {
				return false;
			}
			var periodPos = email.indexOf(".",atPos);
			if (periodPos == -1) {	
				return false;
			}
			if (periodPos+3 > email.length)	{
				return false;
			}
			return true;
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

/* VALIDATING EMAIL ADDRESSES 

lines 73 - 74:
	This line has been added to the email switch/case block. If the validEmail() function returns false, set the class to be invalid.

line 136:
	Inside the validEmail() function, create a variable, invalidChars, that contains the five most likely invalid characters in an 
	email address: blank space, slash, colon, comma, and semicolon.

lines 138 - 139:
	This test says, "If the contents of email is nothing (or empty), then the result is false."
	
line 141:
	In this for statement, start a loop that scans through the invalidChars string. Start by initializing the counter k to zero, 
	then, each time through the loop that k is less than the length of the string, add 1 to k with the ++ increment operator.

lines 142 - 145:
	The badChar variable is set to the invalid character in position k in the invalidChars string, and we then check to see if that 
	character is in email. If so, indexOf() returns the position where it was found; if not, it returns a - 1. If we get a value other 
	than -1, we've found a bad character, and so we then return a value of false.
	
lines 147 - 150:
	The atPos variable holds the position of the @ sign. Using indexOf, the script checks for the first @ sign, starting at the second 
	character in the address. If the result is that the position of the @ sign is -1, it means that there is no @ sign in the address, 
	and you've got trouble in Address City.
	
lines 151 - 153:
	Now the script is making sure that there is only one @ sign and rejecting anything with more than one @, by checking characters 
	beginning at 1 past where we found the first @.
	
lines 154 - 157:
	Now the script checks that there is a period somewhere after the @ sign. If not, we get a false result.
	
lines 158 - 160:
	Finally the script requires that there be at least two characters after the period in the address. If we made it this far without a 
	false result, then the value of the function validemail is true, meaning we have a good email address.

TIPS:
	- There's a difference between validating an email address and verifying it. This script validates addresses by making sure that what 
	  the user entered is in the proper form for an email address. But it doesn't verify that the address really exists. The only way to do 
	  that would be to send an email message to the address and see if the message bounces. Besides the fact that you would probably annoy 
	  your users a great deal if you sent such a verifying message to bounce, and the user isn't going to wait patiently at your form 
	  in the meantime.	
	  
	- This script routine doesn't catch every possible incorrect email address, just the most likely errors. A full check for every possible
	  bad email address would take several pages of code. If you think about it a bit, you can probably come up with possible mistakes that
	  fall outside the checks in this script.
*/
