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
		
		function invalidLabel(parentTag) {
			if (parentTag.nodeName == "LABEL") {
				parentTag.className += " invalid";
			}
		}
	}
}
/* IDENTIFYING PROBLEM FIELDS 

line 31:
	This line of code is added to the invalid check inside validTag()
	When the current field fails validation, we want to check to see if we can also invalidate the label surrounding the problem child. 
	To do this, call the new invalidLabel() function and pass it the parent of our current tag. That is, if there's a problem with the 
	passwd1 input field, we want both that tag and the label tag around it to be assigned a class of invalid. So once we know what the 
	passwd1 input has a problem, we pass its parent (the label tag) over to invalidLabel() to see if it;s an appropriate element to mark invalid.

lines 69 - 72:
	This function takes in a tag and checks to see if that tag is a label. If it is, it adds the attribute invalid to its class.
	If we now try to submit the form and there's an error, we'll notice that the field labels for the problem fields turn bold and 
	red when there's a problem. Fix the error, submit the form, and they'll truen black again.








*/
