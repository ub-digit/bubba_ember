import Ember from 'ember';
import ResetScroll from '../../mixins/reset-scroll';

export default Ember.Route.extend(ResetScroll, {
	isLoggedIn: function() {
		if (sessionStorage.getItem("librarycardNumber") && sessionStorage.getItem("personalSecurityNumber"))  {
			return true;
		}
		else {
			return false;
		}
	},
	beforeModel: function() {
		// if not logged in redirect to login route
		if (!this.isLoggedIn()) {
			this.transitionTo("bookings.login");
		}
		else {
			Ember.$("#ember-app-bubba-cli").addClass("loading");
		}
		
	},

	afterModel: function() {
		Ember.$("#ember-app-bubba-cli").removeClass("loading");
	},
	model: function() {
		// get the data from store here
		return this.store.find("booking" ,{username: sessionStorage.getItem("librarycardNumber"), password: sessionStorage.getItem("personalSecurityNumber")});
	},

	actions: {
		reloadModel: function() {
			this.refresh();
		}

	}

});
