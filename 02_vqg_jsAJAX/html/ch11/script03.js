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
		default:
			alert("No valid action was chosen");
	}
	
	document.getElementById("grafCount").options.length = 0;

	for (i=0; i<nodeChgArea.getElementsByTagName("p").length; i++) {
		document.getElementById("grafCount").options[i] = new Option(i+1);
	}

	return false;
}
/* DELETING SPECIFIC NODES 

line 6:
	Setup an entirely new area: a div with an id of modifiable. Set the global variable nodeChgArea to that element node.

lines 20-22:
	When the user chose to delete a paragraph, they also had to pick which paragraph to delete. We read that number from the 
	grafCount field and store it in grafChoice. The allGrafs variable is then set to be all the paragraphs within nodeChangingArea,
	and the paragraph to be deleted is then stored in oldGraf.

line 24:
	We'll see paragraphs disappear from the middle of our page.

TIPS:
	* The nodeChanger() function combines (in order of appearance) functionality from:
		Ch7: Working with Radio Buttons
		Ch2: Using Mult-level Conditionals
		Ch7: Changing Dynamic Menus
	
	  It's ver common in programming to have a library of simple routines, which, when put together, can create a single, much more
	  complex whole.
	
	* We're using nodeChgArea where we previously used docBody-when you're working with nodes, it's straightforward to swap out code that
	  that works with one element node for another. We're looking at just one part of the page instead of the whole, but the overall way 
	  to accomplish our task is identical.
	  
	* Instead of declaring nodChgArea as a global variable and initializing it in initAll(), we could have created and intialized it 
	  locally inside every function in which it's used. Each choice has its pros and cons; here, we went with the global so that we
	  didn't have to initialize it over and over again.
*/