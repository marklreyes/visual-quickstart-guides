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
					classBack += thisClass;
			}
			return classBack;
		}
	}
}
/* MAKING FIELDS REQUIRED 

lines 3 - 5:
	When the page first loads, the initForms() function is called.
	This function loops through every form on the page.
	 
	For each one, it adds an event handler to that form's onsubmit: a call to function() {return validForm();}
	This is another anonymous function, but this time it does something: it returns true or false to tell the browser 
	whether or not to continue with the action attribute.
	
	When an onsubmit handler returns a value of false, the form doesn't get passed back to the server. 
	The server only gets the form (running whatever CGI is stored in the action attribute) when we return a value of true.

line 11:
	The document.getElementByTagname("*") object is very useful-that asterisk tells JavaScript to return an array 
	containing every tag on that page. 
	
	Once we have that, we can then just loop through the allTags array looking for things of interest.

line 13 - 15:
	This loop searches through allTags and the if conditional calls the validTag() function, 
	which checks each tag to see if there's anything there that should keep the form from submitting this page.
	
	It's passed allTags[i], which is the object that we're currently processing. 
	If any tag causes validTag() to return false, we set allGood to false. 
	
	However, if even one is false, we still keep going through all the tags.

line 18:
	We return allGood to signify whether or not we're good to go.
	
line 20:
	Create the validTag() function, and set it to receive the parameter thisTag.
	
	For each tag, we want to look at every class attribute.
	
	The allClasses array is created and set based on thisTag.className.split(" "); 
	which splits a string up into an array, broken up by the string that's passed in.
	
	Here the string is a space which would cause a string like, 
	"this that and the other" to turn into an array of five elements: this, that, and, the, other.
	
	We want to look at each class attribute, b/c class is where we're storing what we want each form field to have to provide. 
	
	In this task, the one we care about is reqd. If any form field has a class that incudes reqd, it's got to contain something.
	
lines 24 - 26:
	This loops uses j as its loop variable b/c we're inside a loop that's using i.
	We loop around once for each class attribute in allClasses.
	
	For each class, we perform outClass += validBasedOnClass(allClasses[j]) + " ";
	This calls the validBasedOnClass() function passing in the current class we're looking at.
	That function returns something and that something plus a space is appeneded onto the outClass variable.
	
line 28:
	When we've finished with the allClasses loop, we take the contents of outClass and put it into thisTag.className, 
	overwriting the current class attribute for this form field. That's b/c it can change during this process, as we'll see very shortly.
	
line 30:
	Something that can be returned in the new class attribute is the word "invalid".
	We check for it - if that's found anywhere in the new class, do the following as there's a problem.
	
line 31:
	If this form field can take focus, we want to put the focus into the field, and that's what this line does. 
	This is a way of forcing the user to know which field is the problem.
	
line 32 - 34:
	This tag I'm looking at: is it an input tag? If so, select its value so that the user has an easier time modifying it.
	
line 35:
	We're still inside the "invalid was returned" block, so we return false back to where we were called.
	
line 37:
	If all is good and valid, we return true.
	
line 39:
	Begin the new validBasedOnClass() function, and set it to receive the value thisClass.
	
line 40:
	Create the classBack variable, and fill it with nothing for now. 
	This is going to contain the class to be returned, the value we want to send back.
	
line 42:
	The switch statement looks at the single class attribute that was passed in (in thisClass) and does something based on it.
	
lines 43 - 45:
	If thisClass is empty or invalid, then break out of the conditional; otherwise, continue.
	
lines 46 - 51:
	If the attribute being processed is reqd and allGood is true and the current value of the current tag is "" (ie nothing), 
	then we set classBack to be invalid, b/c there's a problem, and we want to notify the user. 
	After that, whether there was a problem or not, we append the current class to classBack so that it doesn't get lost.
	
lines 52 - 53:
	The default block is executed whenever something happens that isn't caught by one of the above cases. 
	When that happens, it's a class we don't care about, so we just stick it onto classBack and don't fret.
	
line 55:
	Return classBack
*/
