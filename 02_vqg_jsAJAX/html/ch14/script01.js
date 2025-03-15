var Dom = YAHOO.util.Dom;
var Event = YAHOO.util.Event;
var DDM = YAHOO.util.DragDropMgr;

YAHOO.DDApp = {
    init: function() {
		new YAHOO.util.DDTarget("ul1");
		for (var i=0; i<7; i++) {
			new YAHOO.DDList("li" + i);
		}
    },
};

Event.onDOMReady(YAHOO.DDApp.init, YAHOO.DDApp, true);

/* DRAGGING AND DROPPING PAGE ELEMENTS 

LINES 1 - 3: Setting up some variables to be initialized when the page first loads. You'll notice that all of the functions and variables start
			 with YAHOO; that's to allow them to coexist with other code and be sure that neither steps on or overwrites the other.
			 
LINES 5 - 12: When the page loads, we need to tell YUI and the browser what it is we want to drag. In this case, it's the <ul> and all of the 
			  <li> tags inside it, so we set the former to be a DDTarget and set the latter to all be instances of DDList.
			  
LINE 14: A custom YUI event that's triggered when the DOM is ready for manipulation. When it is, we want to start intializing our 
		 new framework.
		 
TIPS: Build it! button is non-functional; all that works is the drag-and-drop capability.


*/


