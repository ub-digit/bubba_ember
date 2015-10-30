import Ember from 'ember';

export default Ember.Route.extend({

	beforeModel: function() {
		Ember.$("#ember-app-bubba-cli").addClass("loading");
		var application = this.container.lookup('application:main');
		var lang = application.get("locale");
		if (!lang) {
			lang = application.get('defaultLocale');
		}
	    if (sessionStorage.getItem('lang')) {
	      lang = sessionStorage.getItem('lang');
	    }
	    var set = Ember.set;
		set(application, 'locale', lang);
	    sessionStorage.setItem('lang', lang);

	},
	afterModel: function() {
		Ember.$("#ember-app-bubba-cli").removeClass("loading");
		// update documenttitle
		var t = this.container.lookup('utils:t');
		document.title = t('header.title');
	},
	model: function() {
		// get list of libraries
		return Ember.RSVP.hash({
      		locations:  this.store.find('location'),
    	});
	},

	generateDates: function() {
		var t = this.container.lookup('utils:t');
		var dates = [];
		var application = this.container.lookup('application:main');
		var local = application.get("locale");
		if (!local) {
			local = application.get('defaultLocale');
		}
		for (var i = 0; i < 7; i++) {
			 var date = moment().add(i, 'days');			 
			 var dateStr = date.locale(local).format(t('filter.dateStrings.dateFormatString'));
			 if (i === 0) {
			 	dateStr =  t('filter.dateStrings.today');
			 }
			 else if (i === 1) {
			 	dateStr = t('filter.dateStrings.tomorrow');
			 }
			 dates.push({'id': i.toString(), 'title': dateStr});
		}
		return dates;
	},

	setupController: function(controller, models) {
		if (sessionStorage.getItem("librarycardNumber") && sessionStorage.getItem("personalSecurityNumber")) {
			controller.set("isLoggedIn", true);
		}
		controller.set("libraries", models.locations);
		controller.set("dates", this.generateDates());
	},
	actions: {
		logOut: function() {
			sessionStorage.removeItem('librarycardNumber');
			sessionStorage.removeItem('personalSecurityNumber');
			sessionStorage.removeItem('signature');
			location.reload();
		},
		updateCount: function() {
			var bookings = this.store.find("booking" ,{username: sessionStorage.getItem("librarycardNumber"), password: sessionStorage.getItem("personalSecurityNumber")})
			var that = this;
			bookings.then(function(data) {
				var count = data.get('length');
				that.controllerFor("application").set("numberOfBookings", count);
			})
		}
	}
});
