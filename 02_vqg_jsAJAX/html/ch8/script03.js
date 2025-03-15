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
		var allClasses = thisTag.className.split(" ");
	
		for (var j=0; j<allClasses.length; j++) {
			validBasedOnClass(allClasses[j]);
		}

		function validBasedOnClass(thisClass) {
			switch(thisClass) {
				case "":
					break;
				case "nameList":
					thisTag.value = nameList(thisTag.value);
				default:
			}
		}
		
		function nameList(inNameList) {
			var newNames = new Array;
			var newNameField = "";

			var re = /\s*\n\s*/;
			var nameList = inNameList.split(re);

			re = /(\S+)\s(\S+)/;

			for (var k=0; k<nameList.length; k++) {
				newNames[k] = nameList[k].replace(re, "$2, $1");
			}

			for (k=0; k<newNames.length; k++) {
				newNameField += newNames[k] + "\n";
			}
			return newNameField;
		}
	}
}
/* EXTRACTING STRINGS 

line 38:
	- A new RegExp which simply searches for a pattern that consists of any white space \s*, followed by a new line character \n,
	  followed again by any white space \s*

line 39:
	- The string method split() takes the RegExp and applies it to the data entered by the user stored in inNameList
	- Every new line separates a name, and split() cuts up the entered data at each new line. The result is a string 
	  array of the entered names ,one name per array element, stored in the array nameList.
	
line 41:
	- We'll need another RegExp which splits each name into first and last names. It looks for any non-white space characters (\S+) 
	  followed by a single white space character \s, followed by any non-white space characters (\S+). The parenthesis are required 
	  around each group of characters so that the information can be used later.
	  
line 43:
	- Remember those parenthesis in line 41? When the replace() method is executed, the RegExp re breaks apart nameList 
	  into first and last names. 
	- Those parentheses tell JavaScript to store the first name in the regular expression property $1 and the last name in the 
	  regular expression property $2. 
	- The replace() method then uses the second parameter passed to it to return the last name $2, followed by a comma, 
	  followed the first name $1.
	- The names, now in last-name-first order, are stored in the new array newNames.
	
lines 47 - 49:
	- This loop sets up a new variable newNameField, which will contain the revised version of the user-entered text.	
	- For each name in the newNames array, append that name followed by a new line character to newNameField.

line 50:
	- We pass the result back up to update the web page. This happens in the switch/case section: thisTag.value = nameList(thisTag.value);
	  The result is shown after you click submit.

TIPS:
	- This script only handles first and last names that are separated by a space. You'll have to change it if you want it to 
	  handle middle names or multi-part last names.
	  
	- The variable re gets used more than once, with different values being assigned to it at different parts of the script.
	  That's perfectly ok to do in JavaScript, but yo might want to consider using different variable names in your own scripts.
	  It makes them easier to debug or change when you come back to them in a few months.
*/		
