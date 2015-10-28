import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['application'],
	librarycardNumber: null,
	personalSecurityNumber: null,
	error: false,

	isDisabled: function() {
		if (this.get("librarycardNumber") && this.get("personalSecurityNumber")) {
			return false;
		}
		else {
			return true;
		}
	}.property('librarycardNumber', 'personalSecurityNumber'),


	saveToLocalStorage: function() {
		if(typeof(Storage) !== "undefined") {
			sessionStorage.setItem("librarycardNumber", this.get("librarycardNumber"));
			sessionStorage.setItem("personalSecurityNumber", this.get("personalSecurityNumber"));			
		//	sessionStorage.setItem("signature", this.get("user.signature"));
		} else {
			/// dont save it. 
		}
	},
	actions: {
		executeLogin: function() {
			var that = this;
			var successHandler = function() {
				that.saveToLocalStorage();
				that.set("controllers.application.isLoggedIn", true);

				that.transitionToRoute('bookings');
			};
			var errorHandler = function() {
				that.set("error", true);
			};

			this.set("error", false);
			this.store.find('auth', this.get("librarycardNumber"), {password: this.get("personalSecurityNumber")}).then(successHandler, errorHandler);
		},
	}
});
