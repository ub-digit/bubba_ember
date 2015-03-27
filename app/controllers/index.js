import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['application'],
	queryParams: ['selectedLibrary', 'selectedDate'],
	showPleaseSelectPrompt: function() {
		if ((this.get("selectedLibrary") === null) || (this.get("selectedLibrary") === "null")) {
			return true;
		}	
		else {
			return false;
		}
	}.property('selectedLibrary'),

 	
});
