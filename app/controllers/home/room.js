import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['application'],
	isExpandedId: null, 

	getDate: function() {
		var tempDate = this.get("model.bookings.firstObject.pass_day");
		var application = this.container.lookup('application:main');
		var local = application.get("locale");
		if (!local) {
			local = application.get('defaultLocale');
		}
		var date =	moment(tempDate);
		var dateStr = date.locale(local).format("dddd, Do MMM");
		return dateStr;
	}.property('model.bookings'),

	actions: {
		closeAllOpen: function() {
			this.get("model.bookings").forEach(function(item) {
				item.set('isExpanded', false);
			});
		}
	}
});
