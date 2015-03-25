import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		// get list of libraries
		return Ember.RSVP.hash({
			libraries: 	[
				{sigl: 'hum', title: 'Humanistiska biblioteket'},
				{sigl: 'gpec', title: 'Pedagogiska biblioteket'},
				{sigl: 'ek', title: 'Ekonomiska biblioteket'},
			],
			dates: [
				{id: "0", title: 'Idag'},
				{id: "1", title: 'Imorgon'},
			]
		});	
	},

	setupController: function(controller, models) {
		controller.set("libraries", models.libraries);
		controller.set("dates", models.dates);
		controller.set("selectedLibrary", null);
		controller.set("selectedDate", "1");

	}
});
