$(document).ready(function() {
	$("#example").dialog({
		modal: true,
		resizable: false,
		overlay: {
			opacity: 0.4,
			background: "black"
		},
		buttons: {
			"OK": function() {
				$(this).dialog("close");
			}
		}
	});
});

/* CREATING SMARTER DIALOGUES 
	
Lines 2-8:
	This code runs when the page first loads. It finds the example element and uses it as the basis of a dialog. That dialog is modal
	(because of the line modal: true) and is not resizable (because of the line resizable: false).
	
	We've also addd an overlay: as you can see the page behind the dialog is darkened to show that it's inaccessible. That's done with the
	overlay options, where both the opacity and the background overlay color are set.
	
Lines 9-13:
	This dialog has a single button that says, OK and when it's clicked, the dialog closes. If you wanted more buttons or more actions to take
	place when the dialog is clicked, those would go here.
	
TIP:
	By default, dialogs are both resizable and draggable. If you wat yours to be resizable as well, just do two things: add a <script> tag to 
	call ui.resizable.js in step 2 (see script03.html), and remove the resizable: false line in line 4.
	
*/
