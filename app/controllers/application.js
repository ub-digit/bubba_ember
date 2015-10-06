import Ember from 'ember';

export default Ember.Controller.extend({
	user: {
		librarycardNumber: null,
		personalSecurityNumber: null,
		signature: null
	},
	librariesSorted: function() {
		var application = this.container.lookup('application:main');
		var local = application.get("locale");
		if (!local) {
			local = application.get('defaultLocale');
		}
		var arr = [];
		if (local === "en") {
			this.get('libraries').forEach(function(item) {
				arr.push({'id': item.id.toString(), 'display_title': item.english_name});
			});
		}
		else {
			this.get('libraries').forEach(function(item) {
				arr.push({'id': item.id.toString(), 'display_title': item.swedish_name});
			});
		}
		return arr;//this.get("libraries");
	}.property('libraries'),



	actions: {
		toggleLang: function() {
			var set = Ember.set;
			var application = this.container.lookup('application:main');
			var local = application.get("locale");

			if (local === "sv") {
				sessionStorage.setItem('lang', 'en');
			}
			else {
				sessionStorage.setItem('lang', 'sv');
			}
		    Ember.run.later(function() {
		        location.reload(true);
		    });
		}
	}
});
