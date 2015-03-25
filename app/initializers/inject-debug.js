/*var log = function() {
  try {
     console.log.apply(console, arguments);
  } 
  catch(e) {
	  try {
	     opera.postError.apply(opera, arguments);
	  }
	  catch(e) {
	     alert(Array.prototype.join.call( arguments, " "));
	  }
	}
};*/


export default {
  name: 'inject-debug',
    initialize: function(container, app) {
    /*  	app.register('log:main', log);
      	app.inject('route', 'log', 'log:main');
      	app.inject('controller', 'log', 'log:main');
		app.inject('component', 'log', 'log:main');*/
      }
};