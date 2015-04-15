import Ember from 'ember';
import ResetScroll from '../../mixins/reset-scroll';

export default Ember.Route.extend(ResetScroll,{

	queryParams: {
		selectedLibrary: { refreshModel: true },
		selectedDate: { refreshModel: true }
    },
	beforeModel: function() {
		Ember.$("body").addClass("loading");
	},
	afterModel: function() {
		Ember.$("body").removeClass("loading");
	},
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
			
			this.controllerFor('home.index').set("selectedDate", "0");
			return null;
		}		
	},
	setupController: function(controller, model) {
		controller.set("model", model);
		var latestVisited = null;
		if (localStorage.getItem("latestVisited")) {
			latestVisited = localStorage.getItem("latestVisited");
			this.controllerFor('home.index').set("selectedLibrary", latestVisited);
		}
		else {
			this.controllerFor('home.index').set("selectedLibrary", null);
		}
	}
});
