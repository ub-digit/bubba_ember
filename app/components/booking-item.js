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
			sessionStorage.setItem("librarycardNumber", this.get("user.librarycardNumber"));
			sessionStorage.setItem("personalSecurityNumber", this.get("user.personalSecurityNumber"));			
			sessionStorage.setItem("signature", this.get("user.signature"));
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
		if (this.get("user.librarycardNumber") && this.containsNotOnlySpaces(this.get("user.librarycardNumber")) && this.get("user.personalSecurityNumber") && this.containsNotOnlySpaces(this.get("user.personalSecurityNumber")) && this.get("user.signature") && this.containsNotOnlySpaces(this.get("user.signature"))) {
			return false;
		}
		else {
			return true;
		}
	}.property('user.librarycardNumber','user.personalSecurityNumber','user.signature'),

	actions: {
		toggleExpanded: function() {
			if (this.get("room.booked") && !this.get("isExpanded")) {
				return;
			}
			if (this.get("isExpanded")) {
				this.set("isExpandedId", null);
			}
			else {
				this.set("isExpandedId", this.get("room.id"));
				if(typeof(Storage) !== "undefined") {
					this.set("user.librarycardNumber", sessionStorage.getItem("librarycardNumber"));
					this.set("user.personalSecurityNumber",sessionStorage.getItem("personalSecurityNumber"));			
					this.set("user.signature", sessionStorage.getItem("signature"));
				}
				// reset error message 
				this.set("error.pass_unavail_error", null);
				this.set("error.pass_limit_error", null);
				this.set("error.auth_error", null);
				this.set("isFormPresent", true);
				var that = this;
				Ember.run.later(function(){
					Ember.$(window).scrollTo("#" + that.get("room.id"), 500);
					that.$('.cardnumber').focus();
				});
			}
		},

		executeBooking: function(id) {
			var that = this;
			var successHandler = function(model,error) {
				// save logininfo to local
				that.saveToLocalStorage();
				that.set("room", model);
				that.set("showReciept", true);


			};
			var errorHandler = function(error) {
				//that.set("error", error.error.code);
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
			this.store.save('booking',{id: id} , {'username': this.get("user.librarycardNumber"), 'password': this.get("user.personalSecurityNumber"), 'signature': this.get("user.signature"), 'cmd': 'book'}).then(successHandler, errorHandler);
		}
	}
});
