window.onload = initAll;

function initAll() {
	document.getElementsByTagName("form")[0].onsubmit = nodeChanger;
	chgNodes.init();
}

function nodeChanger() {
	return chgNodes.doAction();
}

var chgNodes = {
	actionType : function() {
		var radioButtonSet = document.getElementsByTagName("form")[0].nodeAction;
		for (var i=0; i<radioButtonSet.length; i++) {
			if (radioButtonSet[i].checked) {
				return i;
			}
		}
		return -1;
	},

	allGrafs : function() {
		return this.nodeChgArea.getElementsByTagName("p");
	},
	pGrafCt : function() {
		return this.allGrafs().length;
	},
	inText : function() {
		return document.getElementById("textArea").value;
	},
	newText : function() {
		return document.createTextNode(this.inText());
	},
	grafChoice : function() {
		return document.getElementById("grafCount").selectedIndex;
	},
	newGraf : function() {
		var myNewGraf = document.createElement("p");
		myNewGraf.appendChild(this.newText());
		return myNewGraf;
	},
	oldGraf : function () {
		return this.allGrafs().item(this.grafChoice());
	},

	doAction : function() {
		switch(this.actionType()) {
			case 0:
				this.nodeChgArea.appendChild(this.newGraf());
				break;
			case 1:
				if (this.pGrafCt() > 0) {
					this.nodeChgArea.removeChild(this.oldGraf());
					break;
				}
			case 2:
				if (this.pGrafCt() > 0) {
					this.nodeChgArea.insertBefore(this.newGraf(),this.oldGraf());
					break;
				}
			case 3:
				if (this.pGrafCt() > 0) {
					this.nodeChgArea.replaceChild(this.newGraf(),this.oldGraf());
					break;
				}
			default:
				alert("No valid action was chosen");
		}

		document.getElementById("grafCount").options.length = 0;

		for (var i=0; i<this.pGrafCt(); i++) {
			document.getElementById("grafCount").options[i] = new Option(i+1);
		}
		return false;
	},
	
	init : function() {
		this.nodeChgArea = document.getElementById("modifiable");
	}	
}
/* WRITING CODE WITH OBJECT LITERALS 

lines 4 - 5:
	Start off by doing your initializations. The first line is the same as what you've seen previously, but the second is a little different: it calls the init() function that's inside the
	chgNodes object.
	
lines 8 - 10:
	The nodeChanger() function here doesn't do much at all-all it does is call chgNodes.doAction(). Why that function couldn't have been called directly will be covered shortly.

line 12:
	Here's the beginning of the chgNodes object. All we had to do to create it is start the line off as if we're setting a simple variable, but then end with a set of statements between
	braces.

lines 13 - 21:
	In the previous version of the script, the first part of the nodeChanger() function was spent setting the actionType variable.
	actionType() is a method of chgNodes. While the style of the code is different, the end result should be identical.

lines 23 - 28:
	Here's an example of two simple functions inside chgNodes:allGrafs() and pGraftCt(). Because they return values, they can be used anywhere they're needed for adding, replacing or deleting
	nodes.

lines 47 - 51:
	The doAction() function handles most of the heavy lifting needed in chgNodes-this small bit is just the start. Just as with the prior version, we look at the radio button to see which action
	we want to do, and that action is done by means of a switch statement.

lines 79 - 81:
	Finally, we end up with our init() function, and all it does is initialuze nodeChgArea for later use. What's most important is that we do not have a comma at the end of this routine-
	every statement except the last should end with a comma (and yes, a function is basically an extended statement).
	
TIPS:
	* In lines 4-5, and 8-10, you may have been wondering why we couldn't just write:
		document.getElementsByTagName("form")[0].onsubmit = chgNodes.doaction();
	  Or maybe you're wondering why we've used 'this' so often in the code? Here's the trick: it's the same answer for both.
	  
	  Inside an object literal, you can reference any other property and method of the object just by referring to 'this'. If we use a var command, as in the case of myNewGraf or radioButtonSet,
	  it's a normal variable that can't be accessed outside the parent object. By not using var, and instead always referring to it as this.whatever, those properties become part of the object
	  itself.
	  
	  However, 'this' for object literals has to abide by the sae rules that 'this' does everywhere in JavaScript-what it evaluates to depends on from where it was called. If chgNodes.doAction()
	  is called directly from the form, that 'this' refers to the form object-which isn't what we want. Calling chgNodes.doAction() from nodeChanger() lets us work around this.
	  
	* If you're considering switching from procedural JavaScript, but haven't made a firm decision, here's one more reason to think about using object literals instead: note that script06.js
	  does that exact same thing as script05.js but it's about 20% shorter.
	  
	* If you want more documentation of all the available properties and methods, check out the W3C specification mention at the beginning of chapter 11.

*/	