import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['application'],

	getDate: function() {
		// get first date from array
		var arr = this.get("model.bookings");
		var obj = arr.get("firstObject");
		return obj.pass_day; // Todo: format date
	}.property('model'),
});
