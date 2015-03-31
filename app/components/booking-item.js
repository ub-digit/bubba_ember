import Ember from 'ember';

export default Ember.Component.extend({
	user: {
		librarycardNumber: null,
		personalSecurityNumber: null,
		signature: null
	},

	actions: {
		toggleExpanded: function() {
			if (this.get("room.isExpanded")) {
				this.set("room.isExpanded", false);
			}
			else {
				this.sendAction("closeAll");
				this.set("room.isExpanded", true);
			}
		},
		executeBooking: function(id) {
			var that = this;
			var successHandler = function(error) {
				that.set("showReciept", true);
			}
			var errorHandler = function(error) {
				console.log(error);

			}
			this.store.save('booking',{id: id} , {'username': '3300776403', 'password': '0009920985', 'signature': 'foo-bar', 'cmd': 'book'}).then(successHandler, errorHandler)
		}
	}
});
