import Ember from 'ember';

export function getLibraryStrForCurrentLocale(input) {
  return input;
}

export default Ember.Handlebars.makeBoundHelper(getLibraryStrForCurrentLocale);
