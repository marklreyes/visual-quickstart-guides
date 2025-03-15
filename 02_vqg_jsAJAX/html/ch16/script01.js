$(document).ready(function() {
	$("#bodyText").hide();

	$("#textToggle").toggle(
		function() {
			$("#bodyText").show("slow");
			$("#bodyText").effect("highlight", {}, 2000);
		},
		function() {
			$("#bodyText").hide();
		}
	);
});

/* HIGHLIGHTING NEW ELEMENTS 

Line 1:
	The $ is jQuery's way of referring to itself as opposed to some other JavaScript object. We're passing jQuery the document object, then 
	using a method built into jQuery called ready(), which is automatically triggered when JavaScript is ready to start handling events. 
	Everything you want to happen when the document loads must be passed into $(document).ready(). In this case, we're passing in an 
	anonymous function, shown in the rest of the steps.
	
Line 2: 
	Tell the browser not to display this particular element.
	
Line 4:
	This line is triggered by a specific event-it runs whenever the element with the id of textToggle is clicked. The toggle() method is 
	passed two functions as parameters, each of which contains the code for one of toggle()'s two states. The toggle() method remembers
	its current state, so when it's triggered it automatically switches to the other state (ie runs the code in the other function).
	
Lines 5-8:
	Here's the first function passed to toggle(). We start by letting jQuery find the element with the id of 'bodyText'; that's the bit that's
	 going to be displayed when show() is called. The show() method is passed one parameter: the string "slow", which tells jQuery to slowly
	 make the new element visible.
	 
	 Once that's done, the effect() method is called and passed three parameters:
	 - "highlight": the effect we want.
	 - {}: the options desired on that effect. The yellow fade technique is so prevalent that yellow is the default color, so we don't need 
	 to modify any options here.
	 - 2000: the speed at whcih we want the effect to display. This is set in milliseconds, so we're saying that we want the fade out to last
	 two seconds.
	 
Lines 9-11:
	Here's the alternate state of the toggle, and all it does is tell the 'bodyText' element to hide again, just as we did at the beggining
	of the code.
	
TIP:
	If we wanted the text to slowly disappear we could pass "slow" as a string to hide() in the last step. And if we took out the "slow"
	parameter being passed into show(), the element would display immediately instead of slowly.
	
	
*/
