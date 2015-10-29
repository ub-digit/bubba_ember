import Ember from 'ember';

export function convertToLowerCaps(str) {
	var temp = str.toString();
	var lowerCapsStr = null;
	if ((temp === "Today") || (temp === 'Tomorrow')) {
		 lowerCapsStr = temp.toLowerCase();
	}
	else  {
		lowerCapsStr = temp;
	}
	

  	return new Ember.Handlebars.SafeString(lowerCapsStr);
}

export default Ember.HTMLBars.makeBoundHelper(convertToLowerCaps);
