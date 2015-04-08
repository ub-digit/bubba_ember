import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Object.extend({
    endpoints: {
    location: 		   {path: 'locations'},
	booking_object:	  { path: 'booking_objects'},
	booking:	  { path: 'bookings'},
	auth: 	{path : 'users/auth'},
    },
    findOne: function(name, id, params) {
	var that = this;
	return this.fetch(this.urlOne(name, id, params))
	    .then(function(data) {
		return that.extractOne(name, data);
	    },  this.extractErrors);
    },
    findMany: function(name, params) {
	var that = this;
	return this.fetch(this.urlMany(name, params))
	    .then(function(data) {
		return that.extractMany(name, data);
	    },  this.extractErrors);
    },
    fetch: function(url) {
	return Ember.$.ajax({
	    url: url,
	    method: 'get',
	    crossDomain: true,
	    type: 'json',

	});
    },
    send: function(url, method, data) {
	return Ember.$.ajax({
	    url: url,
	    method: method,
	    crossDomain: true,
	    contentType: 'application/json',
	    dataType: 'json',
	    data: JSON.stringify(data),
	});
    },
    sendDelete: function(url) {
	return Ember.$.ajax({
	    url: url,
	    method: 'delete',
	    crossDomain: true,
	    type: 'json',
	});
    },
    endpoint: function(name) {
	if(this.endpoints[name]) {
	    return this.endpoints[name];
	} else {
	    console.log("ERROR! Missing endpoint for", name);
	    return undefined;
	}
    },
    plural: function(name) {
	if(this.endpoint(name) && this.endpoint(name).plural) {
	    return this.endpoint(name).plural;
	} else {
	    return name+'s';
	}
    },
    singular: function(name) {
	if(this.endpoint(name) && this.endpoint(name).singular) {
	    return this.endpoint(name).singular;
	} else {
	    return name;
	}
    },
    urlOne: function(name, id, params) {
	var url = ENV.APP.serviceURL + '/' + this.endpoint(name).path + '/' + id;
	if(params) {
	    url += '?' + Ember.$.param(params);
	}
	return url;
    },
    urlMany: function(name, params) {
	var url = ENV.APP.serviceURL + '/' + this.endpoint(name).path;
	if(params) {
	    url += '?' + Ember.$.param(params);
	}
	return url;
    },
    extractOne: function(name, data) {
	var singularName = this.singular(name);
	if (data.meta) { data[singularName].meta = data.meta;}
	data[singularName].error = this.extractErrors(data);
	return data[singularName];
    },
    extractMany: function(name, data) {
	var pluralName = this.plural(name);
	var list = data[pluralName];
	if (data.meta){list.meta = data.meta;}
	list.error = this.extractErrors(data);
	return list;
    },
    destroy: function(name, id) {
	return this.sendDelete(this.urlOne(name, id));
    },
    saveUpdate: function(name, id, data, params) {
	var that = this;
	var dataObject = params || {};
	dataObject[name] = data;
	return this.send(this.urlOne(name, id), 'put', dataObject)
	    .then(function(data) {
		return that.extractOne(name, data);
	    },  this.extractErrors);
    },
    saveCreate: function(name, data, params) {
	var that = this;
	var dataObject = params || {};
	dataObject[name] = data;
	return this.send(this.urlMany(name), 'post', dataObject)
	    .then(function(data) {
		return that.extractOne(name, data);
	    }, this.extractErrors);
    },

	extractErrors: function(reason_or_data) {
		if(reason_or_data.responseJSON) {
		  return {
		    error: reason_or_data.responseJSON.error,
		    status: reason_or_data.status
		  };
		} else {
		  return reason_or_data.error;
		}
		return undefined;
	},
});

