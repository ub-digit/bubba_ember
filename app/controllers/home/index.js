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
		var item = this.get("controllers.application").get("librariesSorted").findBy("id", this.get("selectedLibrary"));
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

	postStats: function() {
		var selectedLibraryId = this.get("selectedLibrary") * 1;
		var selectedDayIndex = this.get("selectedDate");
		if (this.get("controllers.application").get("libraries")) {
			var library = this.get("controllers.application").get("libraries").findBy("id", selectedLibraryId);
			if (library) {
				if (window.dataLayer) {
			        window.dataLayer.push({
			          'libraryName' : library.swedish_name,
			          'day' : selectedDayIndex
			        });
				}
			}

		}
	}.observes('selectedDate', 'selectedLibrary')

});
