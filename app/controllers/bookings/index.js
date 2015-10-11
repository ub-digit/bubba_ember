import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['application'],
	isExpandedId: null,
	modelForConfirm: function() {
		// filter models that has correct status here
		return this.get("model").filterBy("status",3);
	}.property('model.@each'),

	modelForAlreadyConfirmed: function() {
		return this.get("model").filterBy("status",4);
	}.property('model.@each'),	

	modelForBookedButNotAvailibleToConfirm: function() {
		return this.get("model").filterBy("status",2);		
	}.property('model.@each'),

});
