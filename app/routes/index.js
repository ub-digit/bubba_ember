import Ember from 'ember';

export default Ember.Route.extend({

	model: function() {
		// get list of libraries
		return [
			{id:1, title: 'room1', seats: 6, hasComputer: true, hasWhiteboard: true},
			{id:2, title: 'room2', seats: 4, hasComputer: false, hasWhiteboard: false}
		];
	},
});
