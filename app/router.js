import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("home", {path: '/'}, function() {
      this.route("room", {path: ':id/:day'});
  });
  this.route('bookings', function() {
      this.route("login");
  });

});

export default Router;
