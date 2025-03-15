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

/* 
WORKING WITH RADIO BUTTONS 

lines 54 - 55:
	This goes into the radio block of the switch/case conditional. We want to check to make sure at least one 
	of the radio buttons was picked, and the new radioPicked() function handles that. If it returns false, then we set classBack to invalid.

lines 80 - 81:
	Start the new radioPicked() function and initialize the radioSet variable.
	This function takes in the name of the set of radio buttons, in this case DoorCt
	Note that that's not the id of the current tag or a class or anything that we usually see, but its name.
	The name attribute of <input> tags is how HTML knows which radio buttons are grouped together; that is all <input> 
	tags with the same name attribute are part of one radio button set.

lines 83 - 87:
	We next loop through all the forms on the current page We know the name of the radio button set, but we don't know what 
	form it's a part of, and any given page can have several forms. Because this function is inside another function looping on j, 
	we use k for our loop here.
	
	We then try to set radioSet to the name of this set of radio buttons inside the form we're looking at. If it's found, 
	radioset will then have a value.

lines 88-89:
	When the loop is done, we look at radioSet. If it hasn't been set yet, we return false, b/c we couldn't find it, and so couldn't check it.

lines 91 - 95:
	Okay, we've got the radio button set we want to inspect. Now, we start another loop to look through each button. 
	When we find one that's checked, we return true, because we're done.
	
line 96:
	If we make it to the end of the loop, we've looked at the entire set and nothing was clicked. 
	In that case, return false and change the radio buttons red and bold.

*/
