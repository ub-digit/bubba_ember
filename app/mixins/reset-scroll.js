import Ember from 'ember';

export default Ember.Mixin.create({
  activate: function() {
    this._super();
    window.scrollTo(0,0);
    Ember.$(window).scrollTo("#ember-app-bubba-cli", 1);
  }
});