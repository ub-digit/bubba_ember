import Ember from 'ember';

export default Ember.Route.extend({

	queryParams: {
		selectedLibrary: { refreshModel: true },
		selectedDate: { refreshModel: true }
    },
	/*refreshData: function() {
		var temp = this.store('booking_object', filter);
		this.get("model", temp);
	},*/
	model: function(params) {
		// get list of librarie
		var filter = {};
		if (params.selectedDate && params.selectedLibrary) {
			filter = {
				location_id: params.selectedLibrary,
				day: params.selectedDate 
			};
			return this.store.find('booking_object', filter);
		}
		else {
			this.controllerFor('index').set("selectedLibrary", null);
			this.controllerFor('index').set("selectedDate", "0");
			return null;
		}		
	},
	setupController: function(controller, model) {
		controller.set("model", model);
	}
});
