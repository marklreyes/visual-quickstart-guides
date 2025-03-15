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
					newNames[k] = RegExp.$3.toUpperCase() + RegExp.$4.toLowerCase() + ", " + RegExp.$1.toUpperCase() + RegExp.$2.toLowerCase();
				}
			}

			newNames.sort();
			for (k=0; k<newNames.length; k++) {
				newNameField += newNames[k] + "\n";
			}
			return newNameField;
		}
	}
}
/* FORMATTING AND SORTING STRINGS 

line 46:	
	- We want to sort by last name, so we create the new newNames array by appending the uppercased first letter of the last name, the
	  lowercased remainder of the last name, a comma and space, the uppercased first letter of the first name, and the lowercased remainder 
	  of the first name.

line 50:
	- The array method sort() sorts the elements of an array in place, overwriting the previous contents.
		BEFORE: Ralph Spoilsport
				Audrey Farber
		AFTER:	Farber, Audrey
				Spoilsport, Ralph	
*/
