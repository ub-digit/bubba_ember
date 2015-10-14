import Ember from 'ember';

export function getStatusString(statusId) {

	var statusString =  "statuses.status_" + statusId;
    var t = this.container.lookup('utils:t');
    return t(statusString);
}

export default Ember.HTMLBars.makeBoundHelper(getStatusString);
