window.onload = initAll;
var xhr = false;
var statesArray = new Array();

function initAll() {
	document.getElementById("searchField").onkeyup = searchSuggest;

	if (window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	}
	else {
		if (window.ActiveXObject) {
			try {
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch (e) { }
		}
	}

	if (xhr) {
		xhr.onreadystatechange = setStatesArray;
		xhr.open("GET", "us-states.xml", true);
		xhr.send(null);
	}
	else {
		alert("Sorry, but I couldn't create an XMLHttpRequest");
	}
}

function setStatesArray() {
	if (xhr.readyState == 4) {
		if (xhr.status == 200) {
			if (xhr.responseXML) {
				var allStates = xhr.responseXML.getElementsByTagName("item");
				for (var i=0; i<allStates.length; i++) {
					statesArray[i] = allStates[i].getElementsByTagName("label")[0].firstChild;
				}
			}
		}
		else {
			alert("There was a problem with the request " + xhr.status);
		}
	}
}

function searchSuggest() {
	var str = document.getElementById("searchField").value;
	document.getElementById("searchField").className = "";
	if (str != "") {
		document.getElementById("popups").innerHTML = "";
	
		for (var i=0; i<statesArray.length; i++) {
			var thisState = statesArray[i].nodeValue;
	
			if (thisState.toLowerCase().indexOf(str.toLowerCase()) == 0) {
				var tempDiv = document.createElement("div");
				tempDiv.innerHTML = thisState;
				tempDiv.onclick = makeChoice;
				tempDiv.className = "suggestions";
				document.getElementById("popups").appendChild(tempDiv);
			}
		}
		var foundCt = document.getElementById("popups").childNodes.length;
		if (foundCt == 0) {
			document.getElementById("searchField").className = "error";
		}
		if (foundCt == 1) {
			document.getElementById("searchField").value = document.getElementById("popups").firstChild.innerHTML;
			document.getElementById("popups").innerHTML = "";
		}
	}
}

function makeChoice(evt) {
	if (evt) {	
		var thisDiv = evt.target;
	}
	else {
		var thisDiv = window.event.srcElement;
	}
	document.getElementById("searchField").value = thisDiv.innerHTML;
	document.getElementById("popups").innerHTML = "";
}

/* AUTO-COMPLETING FORM FIELDS */
/*

<br />
<input type="text" id="searchField" autocomplete="off" />
<br />
<div id="popups"> </div>

autocomplete attribute. It tells the browsers not to do any auto-completion on this field, as we'll be handling it with the script. While it isn't part of any W3C 
recommendations, autocomplete, like XMLHTTPRequest itself, has excellent cross-browser support.
		
LINE 6: In order to grab and process each keystroke, we need an event handler, and here's ours, set in initAll().		
		
LINES 21 - 23: The names of the United States aren't likely to change. We can read the XML file in once, initialize our array, and safely assume that our list will still be valid
			   at the end of this session.		

LINES 33 - 38: Here's where we read that file in, looking at each item node, finding the label node inside, and then storing label's firstChild-the name of the state itself. Each
			   of them goes into a slot in the statesArray array.

LINES 47 - 48: When you start typing in the field, you'll end up here, in the searchSuggest() event handler function. We start off by getting the value of searchField, which is
			   whatever has been typed so far. NExt, we clear that field's class attribute.
			   
LINES 52 - 53: Now, we loop through the list of states, storing the current state we're looking at in thisState.			  	
		
LINE 55: We want to see if what they've entered so far is part of a state name-but that alone isn't sufficient; we also have to make sure that what they've entered is at the
		 beginning of the name. If you type in Kansas, you don't want to see a drop-down box asking if you want Arkansas or Kansas after all. And so long as we're doing that
		 check, we'll also force the comparision to be lowercase on both sides before checking indexOf().
		 
		 If indexOf() returns 0-that is, the entered string was found starting at position 1 of thisState-then we know we have a hit.
		 
LINES 56 - 60: Because this state is a possibility, we want to add it to the list that will display . That's done by creating a temporary div, setting its innerHTML to the name
			   of the state, adding an onclick handler and className, and then appending the whole to the popups div. Adding each state as a separate div allows us to manipulate
			   each using JavaScript and CSS.
			   
LINE 63: When we've looped through all the states, we're done setting up the popups-but how many do we have? We calculate that, the foundCt, here.

LINES 64 - 66: If foundCt is 0, they've entered something unexpected. We let them know that by setting the className to "error", which causes the entry field to display with a
			   pale yellow background.
			   
LINES 67 - 70: If foundCt is one, however, we know that they've got a unique hit, so we can then put that state into the entry field. If they've typed in ca, they shouldn't have
			   to type in lifornia also; we already know which state they want. We give them the full state by using the single div in popups to fill in the entry field, and then
			   we blank out the popups div.
			   
LINES 74 - 83: Another way the user can enter a state name is to click one from the pop-up list. In that case, the makeChoice() event handler function is called. First, we figure
			   out which state the user clicked by looking at the target of the event, and that give us a particular div. Looking at the innerHTML for that div gives us the state
			   name, and we put that into the entry field. and finally. we clear out the pop-up list of possibilities.

*/
