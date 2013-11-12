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
				}//switch
			
		});//tap
		
		$('#izq').swipeleft(function (){
				navigator.notification.alert("Deslizó a la izquierda",function(){"prueba4","Aceptar"});//alert
			});//barrer a la izquierda
		$('#der').swiperight(function (){
				navigator.notification.confirm("que deseas realizar",function(opt){
				switch (opt){
					case 1: 
						navigator.notification.beep(4);
					break;
					case 2: 
						navigator.notification.vibrate(2000);
					break;
				}//switch
					}"Prueba04","Beep, Vibrar, Cancelar");//confirm
			});//barrer a la derecha
	},false);// deviceready
});// ready
