import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		return this.store.find('booking_object', {id:params.id, day: params.day});
	},
	setupController: function(controller, model) {
		controller.set("model", model);
		var bookings = [];
		model.bookings.forEach(function(item) {
			bookings.push(Ember.Object.create(item));
		});
		model.bookings = bookings;
		controller.set("model", model);
	}
});
