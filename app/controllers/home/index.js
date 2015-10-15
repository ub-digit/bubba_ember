import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['application'],
	queryParams: ['selectedLibrary', 'selectedDate'],
	showPleaseSelectPrompt: function() {
		if ((this.get("selectedLibrary") === "undefined") || (this.get("selectedLibrary") === null) || (this.get("selectedLibrary") === "null")) {
			return true;
		}	
		else {
			return false;
		}
	}.property('selectedLibrary'),

	updateLocalStorage: function() {
		localStorage.setItem("latestVisited", this.get("selectedLibrary"));
	}.observes("selectedLibrary"),

	getSelectedLibraryName: function() {
		var item = this.get("controllers.application").get("librariesSorted").findBy("id", this.get("selectedLibrary"))
		if (item) {
			return item.display_title;
		}
		else {
			return null;
		}
	}.property('selectedLibrary'),

	getSelectedDateString: function() {
		if (this.get("selectedDate")) {
			var item = this.get("controllers.application").get("dates").findBy("id",this.get("selectedDate"));
			return item.title;
		}
		else {
			return "";
		}
	}.property('selectedDate'),
});
