import Ember from 'ember';

export default Ember.Route.extend({
	setupController: function(controller) {
		if (sessionStorage.getItem("librarycardNumber")) {
			controller.set("librarycardNumber", sessionStorage.getItem("librarycardNumber"));
		}
		if (sessionStorage.getItem("personalSecurityNumber")) {
			controller.set("personalSecurityNumber", sessionStorage.getItem("personalSecurityNumber"))
		}
	}
});
