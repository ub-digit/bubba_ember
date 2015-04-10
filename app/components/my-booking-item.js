import Ember from 'ember';

export default Ember.Component.extend({
	needs: ['application'],
	isExpanded: function() {
		if (this.get("isExpandedId") === this.get("booking.id")) {
			return	true;
		}
		else {
			return false;
		}
	}.property('isExpandedId'),

	getLibraryLocationName: function() {
		var libs = this.get("libraries");
		var lib = libs.findBy('id',this.get("booking.booking_object.location_id").toString());
		if (lib) {
			return lib.display_title;
		}
		else {
			return 'Unknown location';
		}
	}.property('booking.id'),

	actions: {
		toggleExpanded: function() {
			/*if (this.get("room.booked") && !this.get("isExpanded")) {
				return;
			}*/
			if (this.get("isExpanded")) {
				this.set("isExpandedId", null);
			}
			else {
				this.set("isExpandedId", this.get("booking.id"));
				var that = this;
				Ember.run.later(function(){
					Ember.$(window).scrollTo("#" + that.get("booking.id"), 500);
					that.$('.cardnumber').focus();
				});
			}
		},
		cancelBooking: function(id) {
			var that = this;
			var successHandler = function(response) {
				that.sendAction('reloadModel', response.id);
			};
			var errorHandler = function(response) {
				// hanlde error	
			};
			this.store.save('booking', {id: id}, {username: sessionStorage.getItem("librarycardNumber"), password: sessionStorage.getItem("personalSecurityNumber"), cmd:'cancel'}).then(successHandler, errorHandler);
		},
		confirmBooking: function(id) {
			var that = this;
			var successHandler = function(response) {
				this.set("showConfirmSuccess");
				//that.sendAction('reloadModel', response.id);
			};
			var errorHandler = function() {

			};
			this.store.save('booking', {id: id}, {username: sessionStorage.getItem("librarycardNumber"), password: sessionStorage.getItem("personalSecurityNumber"), cmd:'confirm'}).then(successHandler, errorHandler);
		}
	}
});
