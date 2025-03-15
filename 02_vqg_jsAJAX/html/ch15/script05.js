window.onload = initAll;

function initAll() {
	document.forms[0].onsubmit = function() {
		document.getElementById("msgField").innerHTML = getSillyName();
		return false;
	}
}

function getSillyName() {
	var firstName = new Array("Runny", "Buttercup", "Dinky", "Stinky", "Crusty", "Greasy", "Gidget", "Cheesypoof", "Lumpy", "Wacky", "Tiny", "Flunky", "Fluffy", "Zippy", "Doofus", "Gobsmacked", "Slimy", "Grimy", "Salamander", "Oily", "Burrito", "Bumpy", "Loopy", "Snotty", "Irving", "Egbert");
	var lastName1 = new Array("Snicker", "Buffalo", "Gross", "Bubble", "Sheep", "Corset", "Toilet", "Lizard", "Waffle", "Kumquat", "Burger", "Chimp", "Liver", "Gorilla", "Rhino", "Emu", "Pizza", "Toad", "Gerbil", "Pickle", "Tofu", "Chicken", "Potato", "Hamster", "Lemur", "Vermin");
	var lastName2 = new Array("face", "dip", "nose", "brain", "head", "breath", "pants", "shorts", "lips", "mouth", "muffin", "butt", "bottom", "elbow", "honker", "toes", "buns", "spew", "kisser", "fanny", "squirt", "chunks", "brains", "wit", "juice", "shower");

	var firstNm = document.getElementById("fName").value.toUpperCase();
	var lastNm = document.getElementById("lName").value.toUpperCase();
	var validName = true;
	
	if (firstNm == "") {
		validName = false;
	}
	else {
		var firstNum = firstNm.charCodeAt(0) - 65;
		if (firstNum < 0 || firstNum > 25) {
			validName = false;
		}
	}

	if (!validName) {
		document.getElementById("fName").focus();
		document.getElementById("fName").select();
		return "That's not a valid first name";
	}

	if (lastNm == "") {
		validName = false;
	}
	else {
		var lastNum1 = lastNm.charCodeAt(0) - 65;
		var lastNum2 = lastNm.charCodeAt((lastNm.length-1)) - 65;
	
		if (lastNum1 < 0 || lastNum1 > 25 || lastNum2 < 0 || lastNum2 > 25) {
			validName = false;
		}
	}
	
	if (!validName) {
		document.getElementById("lName").focus();
		document.getElementById("lName").select();
		return "That's not a valid last name";
	}

	return "Your silly name is " + firstName[firstNum] + " " + lastName1[lastNum1] + lastName2[lastNum2];
}

/* A SILLY NAME GENERATOR 

Your silly name is found by taking the first letter of your first name, the last letter of your last name, and the last letter of your last
name, and looking each up on the chart in page 403. The first letter of your first name gives you your new first name and he two letters from
your last name give you the first and second parts of your new silly last name.
	
Line 5-6: 
	When the page first loads, the form's onsubmit handler is set to call a function, and this is its entire content. First we call 
	getSillyName(). That function returns a string value (either the silly name or an error message), which we then write out to the page.
	Then we return false, so that the onsumbmit doesn't actually try to submit the form to the server.

Lines 15-16:
	Anyone visiting this page will be asked to enter their first and last names	into form fields. When the form is submitted, we start off the 
	getSillyName() function by converting both names to all uppercase and storing the result in the variables 'firstNm' and 'lastNm'.
	
Lines 19-21:
	It's required that a visitor enter at least one character for the first name, so that check is done here. Remember, the expression is read
	as "if firstNm is equal to nothing, then." If that's the case, we set validName to false.
	
Line 23: 
	Otherwise, the charCodeAt() method takes a single character from a string. That single character in the string is based on the number 
	passed to the method; in this case, it is the character in the 0th place, which means the first character in the string (remember, 
	JavaScript starts counting at 0) and returns the ASCII value for that character. The uppercase alphabet starts with "A" having an ASCII
	value of 65 and ends with "Z" having a value of 90. We then subtract 65 to get a result between 0 and 25, and this result is saved
	at firstNum.
	
Lines 24-26:
	If the user enters a first name that doesn't start with a character between "A" to "Z", there won't be an equivalent silly name. Here,
	we make sure that it's within this range before checking the last name. If it isn't, we set 'validName' to false.

Lines 29-33:
	At this point, we know that if 'validName' is false, it means that the user didn't enter a valid first name. When this happens, we put
	the cursor in the field, select anything that's in that field, and return an error message.
		
Lines 35-37:
	Just as with the first name, they have to enter something in the last name field.
	
Lines 39-40:
	To figure out the visitor's new silly last name, we'll need to calculate the ASCII values of both the first and last characters of the 
	last name. The first is found in the same fashion as in line 23. The last character in the string is found by taking the length of 
	'lastFm', subtracting 1, and then passing that number to charCodeAt().
	
Lines 42-44:
	As with the first name field, we have to make sure that both the first and last letter of the last name contain a character between
	"A" and "Z", so once again, we set 'validName' to false if there's a problem.
	
Lines 47-51:
	Just as we did in lines 29-33, if the name isn't valid, we want to let the user know.
	
Line 53:
	If we've passed all the tests, it's time to calcualte the new silly name. Because we turned the characters into numbers between 0 and 25,
	we can use the results as indices into the name arrays 'firstName', 'lastName1', and 'lastName2'. The result of each array lookup is 
	concatenated to the next, with a blank space between the first name and the last name. Notice that the two parts of the last name are 
	concatenated without a space. When we're done, that name is returned and put into the document.
*/