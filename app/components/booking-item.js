import Ember from 'ember';

export default Ember.Component.extend({
	needs: ['application'],

	error: {
		'pass_limit_error': false,
		'auth_error': false,
		'pass_unavail_error': false,
	},
	isFormPresent: true,

	isExpanded: function() {
		if (this.get("isExpandedId") === this.get("room.id")) {
			return	true;
		}
		else {
			return false;
		}
	}.property('isExpandedId'),

	saveToLocalStorage: function() {
		if(typeof(Storage) !== "undefined") {
			sessionStorage.setItem("librarycardNumber", this.get("applicationController.user.librarycardNumber"));
			sessionStorage.setItem("personalSecurityNumber", this.get("applicationController.user.personalSecurityNumber"));			
			sessionStorage.setItem("signature", this.get("applicationController.user.signature"));
		} else {
			/// dont save it. 
		}
	},

	containsNotOnlySpaces: function(str) {
		if((Ember.$.trim(str)).length===0){
		  return false;
		}
		else {
		  return true;
		}
	},

	isDisabled: function() {
		if (this.get("applicationController.user.librarycardNumber") && this.containsNotOnlySpaces(this.get("applicationController.user.librarycardNumber")) && this.get("applicationController.user.personalSecurityNumber") && this.containsNotOnlySpaces(this.get("user.personalSecurityNumber")) && this.get("user.signature") && this.containsNotOnlySpaces(this.get("user.signature"))) {
			return false;
		}
		else {
			return true;
		}
	}.property('applicationController.user.librarycardNumber','applicationController.user.personalSecurityNumber','applicationController.user.signature'),

	actions: {
		logout: function() {
			this.sendAction('logOut');
		},

		updatecount: function() {
			this.sendAction('updateCount');
		},
		
		toggleExpanded: function() {
			if (!this.get("room.bookable") && !this.get("isExpanded")) {
				return;
			}
			if (this.get("isExpanded")) {
				this.set("isExpandedId", null);
			}
			else {
				this.set("isExpandedId", this.get("room.id"));
				if(typeof(Storage) !== "undefined") {
					this.set("applicationController.user.librarycardNumber", sessionStorage.getItem("librarycardNumber"));
					this.set("applicationController.user.personalSecurityNumber",sessionStorage.getItem("personalSecurityNumber"));			
					this.set("applicationController.user.signature", sessionStorage.getItem("signature"));
				}
				// reset error message 
				this.set("error.pass_unavail_error", null);
				this.set("error.pass_limit_error", null);
				this.set("error.auth_error", null);
				this.set("isFormPresent", true);
				var that = this;
				Ember.run.later(function(){
					Ember.$(window).scrollTo("#" + that.get("room.id"), 300);
					var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
					if (!supportsTouch) {
						that.$('.cardnumber').focus();
					}
				});
			}
		},



		executeBooking: function(id) {
			if (!this.get("applicationController.user.librarycardNumber") || !this.get("applicationController.user.personalSecurityNumber") || !this.get("applicationController.user.signature")) {
				this.set("error.auth_error", true);
				return;
			}
			var that = this;
			var successHandler = function(model) {
				// save logininfo to local
				Ember.$("#ember-app-bubba-cli").removeClass("loading");
				that.saveToLocalStorage();
				that.set("applicationController.isLoggedIn", true);
				that.set("room", model);
				that.set("showReciept", true);
				that.send("updatecount");
				if (window.dataLayer) {
			        window.dataLayer.push({
			          'event' : 'GAEvent',
			          'eventCategory' : 'Group study rooms',
			          'eventAction' : 'Room booked',
			          'eventLabel' : that.get("name"),
			          'eventValue' : null
			        });
				}
			};
			var errorHandler = function(error) {
				//that.set("error", error.error.code);
				Ember.$("#ember-app-bubba-cli").removeClass("loading");
				if (error.error.code === "AUTH_ERROR") {
					that.set("error.auth_error", true);
					that.set("isFormPresent", true);
				}
				else if (error.error.code === "PASS_LIMIT_ERROR") {
					that.set("error.pass_limit_error", true);
					that.set("isFormPresent", false);
				}
				else if (error.error.code === "PASS_UNAVAIL_ERROR") {
					that.set("error.pass_unavail_error", true);
					that.set("isFormPresent", false);
				}

			};
			Ember.$("#ember-app-bubba-cli").addClass("loading");
			this.store.save('booking',{id: id} , {'username': this.get("applicationController.user.librarycardNumber"), 'password': this.get("applicationController.user.personalSecurityNumber"), 'signature': this.get("applicationController.user.signature"), 'cmd': 'book'}).then(successHandler, errorHandler);
		}
	}
});
