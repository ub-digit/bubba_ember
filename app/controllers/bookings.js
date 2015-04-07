import Ember from 'ember';

export default Ember.Controller.extend({

	isLoginVisible: function() {
		return true;
	}.property(),
});
