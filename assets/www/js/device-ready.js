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
shareCallback = function(result){
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
	$("#share").on("click", function(){
		//You can send the data as an object or as a JSON string, it must have: title, description, icon and link.

		/*share=new Object();
		share.title="Title";
		share.description="Description";
		share.icon="Picture url";
		share.link="link";		
		facebookConnect.share(shareCallback, share);*/

		facebookConnect.share(shareCallback, {"title":"Title","description":"Description","picture":"Picture url","link":"link"});
	});	
})


document.addEventListener('deviceready', onDeviceReady, false);