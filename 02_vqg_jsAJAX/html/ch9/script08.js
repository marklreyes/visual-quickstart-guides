window.onload = initForm;

function initForm() {
	var allTags = document.getElementsByTagName("*");

	for (var i=0; i<allTags.length; i++) {
		if (allTags[i].className.indexOf("reqd") > -1) {
			allTags[i].onblur = fieldCheck;
		}
	}
}

function fieldCheck() {
	if (this.value == "") {
		this.className += " highlight";
		this.focus();
	}
	else {
		this.className = "reqd";
	}
}
/* THE ONBLUR EVENT 
Show the onblur handler being used to force the user to enter data into a field.

line 7:
	- We're using a class attribute (of reqd) to decide on the fly when the onblur event handler should be used. Simply adding class="reqd"
	  to an input tag triggers the event, instead of having to put the onblur handler on fields individually.

line 8:
	- This event handler on the field causes the fieldCheck() function to be called whenever the user leaves a required field.
	
lines 13 - 21:
	- The fieldCheck() function checks to make sure that something (anything) was entered in the current field. If the field has no value,
	  the field's background is colored pale yellow by adding "highlight" to its class attribute, and the cursor gets put back into the form
	  field wit focus(). When the error is corrected, simply resetting the class attribute back to its inital value resets the background 
	  to white.

TIPS:
	- Both the onblur and onchange events are triggered when the user leaves a field after changing it. If the user leaves a field without 
	  changing it, just the onblur handler is triggered.
	
	- Some versions of Firefox have had a problem with focus(): even though you tell the broswer to stay in a field, it doesn't. Changing the 
      backgroun color gives the user a visual cue that something's wrong, though, so they'll still know that there was a problem.
*/		
