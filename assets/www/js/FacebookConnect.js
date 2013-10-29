// FacebookConnect.js
//
// Created by Olivier Louvignes on 2012-06-25.
//
// Copyright 2012 Olivier Louvignes. All rights reserved.
// MIT Licensed

(function(cordova) {

	function FacebookConnect() {}
	var service = 'FacebookConnect';

	FacebookConnect.prototype.login = function(callback) {
		var _callback = function(result) {
			console.log('FacebookConnect.login: %o', arguments);
			// Check for cancellation/error
	    	if(result.cancelled || result.error) {
	    		console.log("FacebookConnect.login:failedWithError:" + result.message);
	    		return;
	    	}
			if(typeof callback == 'function') callback.apply(null, arguments);
		};
		return cordova.exec(_callback, _callback, service, 'login', [arguments]);
	};

	FacebookConnect.prototype.logout = function(callback) {
		var _callback = function(result) {
			console.log('FacebookConnect.logout: %o', arguments);
			if(typeof callback == 'function') callback.apply(null, arguments);
		};
		return cordova.exec(_callback, _callback, service, 'logout', []);
	};

	FacebookConnect.prototype.me = function(callback) {
		var _callback = function(result) {
			console.log('FacebookConnect.me: %o', arguments);
			if(typeof callback == 'function') callback.apply(null, arguments);
		};
		return cordova.exec(_callback, _callback, service, 'me', []);
	};

	FacebookConnect.prototype.status = function(callback) {
		var _callback = function(result) {
			console.log('FacebookConnect.status: %o', arguments);
			if(typeof callback == 'function') callback.apply(null, arguments);
		};
		return cordova.exec(_callback, _callback, service, 'status', []);
	};
	
	FacebookConnect.prototype.share = function(callback) {
		var _callback = function(result) {
			console.log('FacebookConnect.share: %o', arguments);
			if(typeof callback == 'function') callback.apply(null, arguments);
		};
		return cordova.exec(_callback, _callback, service, 'share', [arguments]);
	};

	cordova.addConstructor(function() {
		if(!window.plugins) window.plugins = {};
		window.plugins.facebookConnect = new FacebookConnect();
	});

})(window.cordova || window.Cordova);