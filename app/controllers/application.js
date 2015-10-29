import Ember from 'ember';

export default Ember.Controller.extend({
	user: {
		librarycardNumber: null,
		personalSecurityNumber: null,
		signature: null
	},

	isLoggedIn: false,

	sortOption: ['display_title:asc'],
	librariesSortedAsc: Ember.computed.sort('librariesSorted', 'sortOption'),

	getNumberOfBookings: function() {
		if (this.get("numberOfBookings")) {
			return this.get("numberOfBookings");
		}
		else {
			return null;
		}
	}.property("bookings"),

	librariesSorted: function() { 
		var application = this.container.lookup('application:main');
		var local = application.get("locale");
		if (!local) {
			local = application.get('defaultLocale');
		}
		var arr = [];
		if (local === "en") {
			this.get('libraries').forEach(function(item) {
				arr.push({'id': item.id.toString(), 'display_title': item.english_name});
			});
		}
		else {
			this.get('libraries').forEach(function(item) {
				arr.push({'id': item.id.toString(), 'display_title': item.swedish_name});
			});
		}
		return arr;
	}.property('libraries'),

	actions: {
		toggleLang: function() {
			var application = this.container.lookup('application:main');
			var local = application.get("locale");

			if (local === "sv") {
				sessionStorage.setItem('lang', 'en');
			}
			else {
				sessionStorage.setItem('lang', 'sv');
			}
		    Ember.run.later(function() {
		        location.reload(true);
		    });
		},
	}
});
