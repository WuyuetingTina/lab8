// 'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Page ready");
 	// initCamera();
 	initMap();
 	initGestures();
 	initRSVPForm();
}

// init jQuery gestures  
function initGestures() {
	// add gestures listener here
	$(function(){
		$(".judge-img").bind("labhold", tapholdHandler);
		function tapholdHandler(event){
			var targetIDPrefix = event.target.id;
			console.log(targetIDPrefix + "initGest");
			$("#"+targetIDPrefix+"-bio").show();
		}
	});

}

// init RSVP form submit listener
function initRSVPForm() {
  // add your code here
}