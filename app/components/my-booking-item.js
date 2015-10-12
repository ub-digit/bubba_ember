import Ember from 'ember';

export default Ember.Component.extend({
	needs: ['application'],
	showConfirmSuccess: false, 
	getDate: function() {
		var application = this.container.lookup('application:main');
		var local = application.get("locale");
		if (!local) {
			local = application.get('defaultLocale');
		}
		var t = this.container.lookup('utils:t');
		var dateStr = null;
		var currentDate = moment(this.get("booking.pass_day")).startOf("day");
		var today = moment().startOf('day');
		var tomorrow = moment().add(1, 'days').startOf("day");
		if (currentDate.isSame(today)) {
			dateStr = t('filter.dateStrings.today');
		}
		else if (currentDate.isSame(tomorrow)) {
			dateStr = t('filter.dateStrings.tomorrow');
		}
		else {
			dateStr = moment(this.get("booking.pass_day")).locale(local).format(application.get("dateFormatString"));
		}
		
		return dateStr;
	}.property('booking'),

	isExpanded: function() {
		if (this.get("isExpandedId") === this.get("booking.id")) {
			return	true;
		}
		else {
			return false;
		}
	}.property('isExpandedId'),

	isExpandable: function() {
		if (this.get("booking.confirmable") ||  this.get("booking.cancelable")) {
			return true;
		}
		else {
			return false;
		}
	}.property('booking'),

	getLibraryLocationName: function() {
		var libs = this.get("libraries");
		var lib = libs.findBy('id',this.get("booking.booking_object.location_id").toString());
		if (lib) {
			var test = decodeURI(lib.display_title);
			return decodeURI(lib.display_title);
		}
		else {
			return 'Unknown location';
		}
	}.property('booking.id'),


	toggleExpanded: function() {
			if (!this.get("isExpandable")) {
				return;
			}

			this.set("showConfirmSuccess", false);
			if (this.get("isExpanded")) {
				this.set("isExpandedId", null);
			}
			else {
				this.set("isExpandedId", this.get("booking.id"));
				var that = this;
				Ember.run.later(function(){
					Ember.$(window).scrollTo("#" + that.get("booking.id"), 300);
				});
			}
	},
	actions: {
		closeButtonClicked: function() {
			this.sendAction('reloadModel');
			this.toggleExpanded();
		},
		toggleExpanded: function() {
			this.toggleExpanded();
		},
		cancelBooking: function(id) {
			var that = this;
			var successHandler = function(response) {
				that.sendAction('reloadModel', response.id);
			};
			var errorHandler = function() {
				// hanlde error	
			};
			this.store.save('booking', {id: id}, {username: sessionStorage.getItem("librarycardNumber"), password: sessionStorage.getItem("personalSecurityNumber"), cmd:'cancel'}).then(successHandler, errorHandler);
		},
		confirmBooking: function(id) {
			var that = this;
			var successHandler = function(response) {
				that.set("showConfirmSuccess", true);
				that.set('booking.status', response.status);
				that.set("booking.confirmable", response.confirmable);
				
				//that.sendAction('reloadModel', response.id);
			};
			var errorHandler = function() {

			};
			this.store.save('booking', {id: id}, {username: sessionStorage.getItem("librarycardNumber"), password: sessionStorage.getItem("personalSecurityNumber"), cmd:'confirm'}).then(successHandler, errorHandler);
		}
	}
});
