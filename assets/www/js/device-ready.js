var facebookConnect;

function onDeviceReady(){
	
	// After device ready, create a local alias
	facebookConnect = window.plugins.facebookConnect;

	
}
loginCallback = function(result){
	alert(result);
}

logoutCallback = function(result){
	alert(result);
}

meCallback = function(result){
	alert(JSON.stringify(result));
}

statusCallback = function(result){
	alert(result);
}
	
$("#index").live("pageinit", function(){
	$("#login").on("click", function(){
		facebookConnect.login(loginCallback, true);
	});
	$("#logout").on("click", function(){
		facebookConnect.logout(logoutCallback);
	});
	$("#me").on("click", function(){
		facebookConnect.me(meCallback);
	});
	$("#status").on("click", function(){
		facebookConnect.status(statusCallback);
	});	
})

document.addEventListener('deviceready', onDeviceReady, false);