import Ember from 'ember';

export default Ember.Controller.extend({
	needs: ['application'],
	isExpandedId: null, 

	actions: {
		closeAllOpen: function() {
			this.get("model.bookings").forEach(function(item) {
				item.set('isExpanded', false);
			})
		}
	}
});
