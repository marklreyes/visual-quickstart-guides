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

			re = /^(\S)(\S+)\s(\S)(\S+)$/;

			for (var k=0; k<nameList.length; k++) {
				if (nameList[k]) {
					re.exec(nameList[k]);
					newNames[k] = RegExp.$1.toUpperCase() + RegExp.$2.toLowerCase() + " " + RegExp.$3.toUpperCase() + RegExp.$4.toLowerCase();
				}
			}

			for (k=0; k<newNames.length; k++) {
				newNameField += newNames[k] + "\n";
			}
			return newNameField;
		}
	}
}
/* FORMATTING STRINGS 

line 41:
	- This RegExp expects to find names in first name, space, last name order, and separates each name into four parts:
		1: the first letter of the first name ^(\S)
		2: the remainder of the first name (\S+)
		3: the first letter of the last name (\S)
		4: the remainder of the last name (\S+)$
		
		Note that the ^ and 4 force the string to begin at the beginning and end at the ending-we don't want to leave any parts out.

line 43:
	- We want to look at each name in the nameList array (what you type into the text field prior to submit)

line 45:
	- This step uses the exec() method to execute the re pattern on the string nameList[k], breaking the string into four parts and
	  automatically setting JavaScript's built-in RegExp object. These four parts will be stored in RegExp.$1, RegExp.$2, RegExp.$3, RegExp.$4

line 46:
	- The new version of the name is stored in the newNames array. 
	  It consists of the first letter of the first name (RegExp.$1), forced to uppercase.
	- Then the remainder of the first name (RegExp.$2) forced to lowercase.
	- Then a space.
	- Then the first letter of the last name (RegExp.$3) forced to uppercase.	
	- Finally, the remainder of the last name (RegExp.$4) forced to lowercase.
	- The name is then displayed.
*/
