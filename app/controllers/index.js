import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['application'],
	queryParams: ['controllers.application.selectedDate', 'controllers.application.selectedLibrary'],

	filter: function() {
		var filterObj = {};
		filterObj.library = this.get("controllers.application.selectedLibrary");
		filterObj.date	= this.get("controllers.application.selectedDate");
		return filterObj;
	}.property('controllers.application.selectedDate', 'controllers.application.selectedLibrary'),
 

});
