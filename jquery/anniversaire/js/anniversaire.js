$(document).ready(function(){
	$('.surprise').on('click',function(){
		$(this).next().slideDown();
		if($(this).is(':last-child')){
			$('body').addClass('party');
			obj.play();
		}
	});

	var obj = document.createElement("audio");
	obj.src = "http://www.bigsoundbank.com/sounds/ogg/0237.ogg";
	obj.volume = 0.1;
	obj.autoPlay = false;
	obj.preLoad = true;
	obj.controls = true;
});

