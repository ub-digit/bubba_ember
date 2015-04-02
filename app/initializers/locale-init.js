import Ember from 'ember';
import ENV from '../config/environment';

export default {
  name: 'locale-init',
    initialize: function(container, app) {
		var rootElement = Ember.$(ENV.APP.rootElement);
		var lang = rootElement.data().lang;
		
		if (lang) {
			var set = Ember.set;
			var application = container.lookup('application:main');
			set(application, 'locale', lang);
		}
    }
};
