import Ember from 'ember';
import	myBookingItem from 'bubba-cli/components/my-booking-item';

export default myBookingItem.extend({
	getStartTimestamp: function() {
		var startTime = this.get("booking.pass_start");
		var startDate = this.get("booking.pass_day");
		var startStamp = moment(startDate, "YYYY-MM-DD");
		var timeArr = startTime.split(":");
		startStamp.hour(timeArr[0]);
		startStamp.minute(timeArr[1]);
		return startStamp;
	},
	startsInMinutes: function() {
		var nowStamp = moment();
		var diff = moment.duration(nowStamp.diff(this.getStartTimestamp()));
		if (diff.get('minutes') < 0) {
			return diff.get('minutes') *  -1;
		}
		else {
			return diff.get('minutes');
		}

		
	}.property('booking'),

	hasStarted: function() {
		var now = moment();
		if (this.getStartTimestamp() > now) {
			return	 true;
		}
		else {
			return false;
		}
	}.property('booking'),

	actions: {
		closeButtonClicked: function(id) {
			this.sendAction('reloadModel', id);
		},
	}
});
