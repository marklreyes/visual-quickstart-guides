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
	
	
	
	
	
	
	
*/