// JavaScript Document
$(document).ready(function(e){// e de evento
	document.addEventListener("deviceready",function(){
		$('.btn').tap(function(){
			var boton =(($(this).attr('class')).split(' '))[1];
		});//tap
	},false);// deviceready
});// ready