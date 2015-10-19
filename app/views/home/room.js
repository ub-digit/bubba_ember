import Ember from 'ember';

export default Ember.View.extend({
	didInsertElement: function() {
		Ember.$('[data-toggle="tooltip"]').tooltip();
		var selectedLibraryId = this.get("controller.model.location_id") * 1;
		var roomName = this.get("controller.model.name");
		var selectedDayIndex = this.get("controller").get("dayIndex");
		var library = this.get("controller").get("controllers.application.libraries").findBy("id", selectedLibraryId);
		
		if (window.dataLayer) {
	        window.dataLayer.push({
	          'libraryName' : library.swedish_name,
	          'roomName' : roomName,
	          'day' : selectedDayIndex
	        });
	   	}
	}
});
