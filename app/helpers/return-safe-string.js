import Ember from 'ember';

export function returnSafeString(str) {
  return new Ember.Handlebars.SafeString('' + str);
}

export default Ember.HTMLBars.makeBoundHelper(returnSafeString);
