import Ember from 'ember';
import ResetScroll from '../../mixins/reset-scroll';

export default Ember.Route.extend(ResetScroll,{
	beforeModel: function() {
		Ember.$("#ember-app-bubba-cli").addClass("loading");
	},
	afterModel: function() {
		Ember.$("#ember-app-bubba-cli").removeClass("loading");
	},
	
	model: function(params) {
		return this.store.find('booking_object', {id:params.id, day: params.day});
	},
	setupController: function(controller, model) {
		controller.set("model", model);
		var bookings = [];
		model.bookings.forEach(function(item) {
			bookings.push(item);
		});
		model.bookings = bookings;
		controller.set("model", model);
	}
});
