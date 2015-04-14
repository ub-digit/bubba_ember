import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['application'],
	isExpandedId: null,
	modelForConfirm: function() {
		// filter models that has correct status here
		return this.get("model").filterBy("status",3);
	}.property('model.@each'),

	actions: {

	}

});
