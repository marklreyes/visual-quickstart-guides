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
				case "email":
					if (allGood && !validEmail(thisTag.value)) classBack = "invalid ";
				default:
					classBack += thisClass;
			}
			return classBack;
		}
				
		function validEmail(email) {
			var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

			return re.test(email);
		}
		
		function invalidLabel(parentTag) {
			if (parentTag.nodeName == "LABEL") {
				parentTag.className += " invalid";
			}
		}
	}
}
/* VALIDATING AN EMAIL ADDRESS WITH REGULAR EXPRESSIONS 

line 56: 
	A RegExp in the validEmail() function.
		- re is just a variable
		- The line sets the value of re to the regular expression on the right side of the equals sign.
		- A RegExp always begins and ends with a slash, /
		- Everything in between the slashes is part of the RegExp.
		- The caret ^ means that we're going to use this expression to examine a string starting at he string's beginning.
		- If the ^ was left off, the email address might show as valid even though there was a bunch of garbage at the beginning 
		  of the string.
		- The expression \w means any 'one' character "a" through "z", "A" through "Z", "0' through "9", or underscore.
		  An email address must start with one of these characters.
		- The plus + sign 'one or more of' whatever the previous item was that we're checking on. In this case, an email address must 
		  start with one or more of any combination of the charactes "a" through "z", "A" through "Z" "0" through "9", or underscore.
		- The opening parenthesis ( signifies a group. It means that we're going to want to refer to everything inside the parenthesis 
		  in some way later, so we put them into a group now.
		- The brackets [] are used to show that we can have any one of the characters inside. In this example, the characters \.- are inside
		  the brackets. We want to allow the user to enter either a period or a dash, but the period has a special meaning to regular
		  expressions, so we need to preface it with a backslash \ to show that we really want to refer to the period itself, 
		  not its special meaning. Using a backlash before a special character is called 'escaping' that character. Because of the brackets,
		  the entered string can have either a period or a dash here, but not both. Note that the dash doesn't stand for any special
		  character, just itself.
		- The question mark ? means that we can have 'zero' or 'one' of the previous item. so along with it being okay to have either a 
		  period or a dash in the first part of the email address (the part before the @), it's also okay to have neither.
		- Following the ?, we once again have \w+ which says that the period or dash must be followed by some other characters.
		- The closing parenthesis ) says that this is the end of the group. That's followed by an asterisk * which means that we can have
		  'zero' or 'more' of the previous item-in this case, whatever was inside the parenthesis. So while 'Dori' is a valid email prefix, so
		  is 'testing-testing-1-2-3'
		- The @ character doesn't stand for anything besides itself, located between the email address and the domain name.
		- The \w+ once again says that a domain name must start with one or more of any character 'a' through 'z', 'A' through 'Z', '0' 
		  through '9', or underscore. That's again followed by ([\.-]?\w+)* which says that periods and dashes are allowed within the suffix
		  of an email address.
		- We then have another group within a set of parentheses: \.\w{2,3} which says that we're expecting to find a period followed by
		  characters. In this case, the numbers inside the braces mean 'either' 2 or 3 of the previous item (in this case the \w, meaning a
		  letter, a number, or an underscore). Following the right parenthesis around this group is a +, which again means that the previous
		  item (the group, in this case) must exist 'one'or 'more' times. This will match '.com' or '.edu' for instance as well as 'ox.ac.uk'
		- The RegExp ends with a dollar sign $, which signifies that the matched string must end here. This keeps the script from validating
		  an email address that starts off properly but contains garbage characters at the end. The slash closes the RegExp. The semicolon
		  ends the JavaScript statement as usual.
		  
line 58:
	This single line takes the RegExp defined in the previous step and uses the test() method to check the validity of email. If the entered
	string doesn't fit the pattern stored in re, test() returns false and the user sees the incorrect field and its label turned red and bold.
	Otherwise a valid entry returns true and the form submits the email address to a CGI, someAction.cgi for additional processing.
	
TIPS:
	- This code doesn't match every possible legal variation of email addresses, just the ones that you're likely to want to allow a 
	  person to enter.
	- Note that after we assigned a value of re, we used re as an object in return re.test(email);
	  Like any other JavaScript variable, the result of a regular expression can be an object.
	- Compare the validEmail() functions from, 
		http://www.marklreyes.com/tutorials/2_vqg_jsAJAX/html/ch7/script10.js
		http://www.marklreyes.com/tutorials/2_vqg_jsAJAX/html/ch8/script01.js
			The former has 27 lines of code, the latter only four. They do the same thing so can see that the power of regular
			expressions can save you a lot of coding.
	- someAction.cgi is just an example for a CGI-it's literally "some action"- any action that ou want it to be.
		
*/
