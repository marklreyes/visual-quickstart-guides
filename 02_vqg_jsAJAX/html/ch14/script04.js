YAHOO.namespace("container");

function init() {
	var handleSubmit = function() {
		this.hide();
	}
	var handleCancel = function() {
		this.hide();
	}

	YAHOO.container.dialog1 = new YAHOO.widget.Dialog("dlg", 
		{ width: "250px",
			fixedcenter: true,
			visible: false, 
			constraintoviewport: true,
			buttons:[ 
				{text:"Submit", handler:handleSubmit, isDefault:true}, 
				{text:"Cancel", handler:handleCancel}
			]
		}
	);
	
	YAHOO.container.dialog1.render();

	document.getElementById("loadDialog").onclick = function() {
		YAHOO.container.dialog1.show();
	}
}

YAHOO.util.Event.onDOMReady(init); 

/* USING THE CONTAINER UTILITY 

LINES 11 - 21: It's Object Literal format - a way of treating JavaScript objects as if they were data; that is, they can be passed back and
			   forth as if they were XML. In our standard format, the code above would have been expressed as something like:
			   			YAHOO.container.dlg = new YAHOO.widget.Dialog();
			   			YAHOO.container.dlg.width = "250px";
			   			YAHOO.container.dlg.fixedcenter = true;
			   			YAHOO.container.dlg.visible = false;
			   			YAHOO.container.dlg.constraintoviewports = true;

LINES 25 - 27: When the edit link is clicked, its onclick event handler is triggered, which brings us here. The show() method simply tells
			   the browser to show the dialog.

*/
