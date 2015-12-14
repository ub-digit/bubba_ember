
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
	startsIn: function() {
		var application = this.container.lookup('application:main');
		var local = application.get("locale");
		if (!local) {
			local = application.get('defaultLocale');
		}

		var startTime = this.getStartTimestamp();
		var fromNowStr = startTime.locale(local).fromNow();
		return fromNowStr;
	}.property('booking'),

	hasStarted: function() {
		var now = moment();
		if (this.getStartTimestamp() < now) {
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
