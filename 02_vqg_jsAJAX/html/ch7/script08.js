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
				case "isZip":
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
/* SETTING ONE FIELD WITH ANOTHER 

line 7:
	This line of code has been added to initForms(). When the user clicks the sunroof check box, the doorSet() function will be called.
	
line 108 - 112:
	This new function checks to see if the sunroof field was checked; if so, it sets the twoDoor radio button to true. 
	If we've clicked the sunroof check box to turn it off, nothing happens.

TIP:
	- You may have noticed that there's no check to see if the user clicked the sunroof and then reset the fourDoor radio button. 
	  We'll leave that exercise for you, the reader.
*/
