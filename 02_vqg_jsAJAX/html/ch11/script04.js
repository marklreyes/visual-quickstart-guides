window.onload = initAll;
var nodeChgArea;

function initAll() {
	document.getElementsByTagName("form")[0].onsubmit = nodeChanger;
	nodeChgArea = document.getElementById("modifiable");
}

function addNode() {
	var inText = document.getElementById("textArea").value;
	var newText = document.createTextNode(inText);

	var newGraf = document.createElement("p");
	newGraf.appendChild(newText);

	nodeChgArea.appendChild(newGraf);
}

function delNode() {
	var grafChoice = document.getElementById("grafCount").selectedIndex;
	var allGrafs = nodeChgArea.getElementsByTagName("p");
	var oldGraf = allGrafs.item(grafChoice);

	nodeChgArea.removeChild(oldGraf);
}

function insertNode() {
	var grafChoice = document.getElementById("grafCount").selectedIndex;
	var inText = document.getElementById("textArea").value;

	var newText = document.createTextNode(inText);
	var newGraf = document.createElement("p");
	newGraf.appendChild(newText);

	var allGrafs = nodeChgArea.getElementsByTagName("p");
	var oldGraf = allGrafs.item(grafChoice);

	nodeChgArea.insertBefore(newGraf,oldGraf);
}

function nodeChanger()  {
	var actionType = -1;
	var pGrafCt = nodeChgArea.getElementsByTagName("p").length;
	var radioButtonSet = document.getElementsByTagName("form")[0].nodeAction;
	
	for (var i=0; i<radioButtonSet.length; i++) {
		if (radioButtonSet[i].checked) {
			actionType = i;
		}
	}
	
	switch(actionType) {
		case 0:
			addNode();
			break;
		case 1:
			if (pGrafCt > 0) {
				delNode();
				break;
			}
		case 2:
			if (pGrafCt > 0) {
				insertNode();
				break;
			}
		default:
			alert("No valid action was chosen");
	}
	
	document.getElementById("grafCount").options.length = 0;

	for (i=0; i<nodeChgArea.getElementsByTagName("p").length; i++) {
		document.getElementById("grafCount").options[i] = new Option(i+1);
	}

	return false;
}
/* INSERTING NODES 

lines 28 - 29:
	In order to insert a paragraph, we need to know two things: the place where the user wants it inserted (grafChoice) and the text they want inserted (inText).

lines 31 - 33:
	Our by-now standard way of creating a new paragraph node and filling it with the user's text.
	
lines 35 - 36:
	Get all the p tags in our region, and then we store the target paragraph (the one we'll be inserting our new paragraph in front of) in oldGraf.

line 38:
	The new paragraph is inserted by calling the inserBefore() method and passing it two parameters: the new node and the existing node that we want the new node to be 
	sinserted before(hence the name).

TIP:
	* While you might think that if there's an insertBefore() there ought to be an insertAfter(), but that's not the case. If you want to add something to the end of the page, you need to use
	  appendChild().

*/
