import Ember from 'ember';

export default Ember.View.extend({
	didInsertElement: function() {
		Ember.$('[data-toggle="tooltip"]').tooltip();
		var selectedLibraryId = this.get("controller").get("selectedLibrary") * 1;
		var selectedDayIndex = this.get("controller").get("selectedDate");
		var library = this.get("controller").get("controllers.application").get("libraries").findBy("id", selectedLibraryId);

		if (window.dataLayer) {
	        window.dataLayer.push({
	          'libraryName' : library.swedish_name,
	          'day' : selectedDayIndex
	        });
		}
	}
});
	