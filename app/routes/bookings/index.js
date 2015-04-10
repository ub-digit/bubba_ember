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
	},
	model: function() {
		// get the data from store here
		var successHandler = function(response) {

		}
		var errorHandler = function(response) {
			// reset sessionvars to null and redirect to login?
		}
		return this.store.find("booking" ,{username: sessionStorage.getItem("librarycardNumber"), password: sessionStorage.getItem("personalSecurityNumber")});
	},

	actions: {
		reloadModel: function(modelID) {
			this.refresh();
		}

	}

});
