YAHOO.namespace("container");

function init() {
	var handleSubmit = function() {
		YAHOO.log("Dialog submitted","warn");
		this.hide();
	}
	var handleCancel = function() {
		YAHOO.log("Dialog cancelled","warn");
		this.hide();
	}

	YAHOO.container.dialog1 = new YAHOO.widget.Dialog("dlg", 
		{ width: "250px",
			fixedcenter: true,
			visible: false, 
			constraintoviewport : true,
			buttons:[ 
				{text:"Submit", handler:handleSubmit, isDefault:true}, 
				{text:"Cancel", handler:handleCancel}
			], 
			effect:{effect:YAHOO.widget.ContainerEffect.FADE,duration:0.25}
		}
	);

	YAHOO.container.dialog1.render();

	document.getElementById("loadDialog").onclick = function() {
		YAHOO.log("Animation starting now");
		YAHOO.container.dialog1.show();
	}

	var myLogReader = new YAHOO.widget.LogReader("logArea");
}

YAHOO.util.Event.onDOMReady(init); 

/* IMPLEMENTING THE LOGGER CONTROL FOR DEBUGGING 

LINE 5:
	When you want to write out information to the log file, just call YAHOO.log()
	There are 5 types of messages that the Logger knows about: warn, error, time and window. Line 5 is warn

LINE 29:
	If we don't include a second parameter at all, the Logger will assume that it's an "info" message, and here's one in the onclick 
	handler nothing that animation is starting.
		
LINE 33:
	The code above has used the Logger, but we haven't seen the code yet to be set up. Here's where we create the Logger: we just tell 
	YAHOO.widget.LogReader() the name of the dummy <div> in the HTML page where we want it to go.

*/