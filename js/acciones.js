// JavaScript Document
$(document).ready(function(e){// e de evento
	document.addEventListener("deviceready",function(){
		$('.btn').tap(function(){
			var boton =(($(this).attr('class')).split(' '))[1];
			switch (boton){
				case 'b1': 
				navigator.notification.beep(2);
				break;
				case 'v1': 
				navigator.notification.vibrate(1000);
				break;
				}
		});//tap
	},false);// deviceready
});// ready
