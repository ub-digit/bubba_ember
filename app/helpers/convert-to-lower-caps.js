import Ember from 'ember';

export function convertToLowerCaps(str) {
	var temp = str.toString();
	if ((temp === "Today") || (temp === 'Tomorrow')) {
		var lowerCapsStr = temp.toLowerCase();
	}
	else  {
		var lowerCapsStr = temp;
	}
	

  	return new Ember.Handlebars.SafeString(lowerCapsStr);
}

export default Ember.HTMLBars.makeBoundHelper(convertToLowerCaps);
