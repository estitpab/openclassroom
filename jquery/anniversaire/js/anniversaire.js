$(document).ready(function(){
	$('.surprise').on('click',function(){
		$(this).next().slideDown();
		if($(this).is(':last-child')){
			$('body').addClass('party');
		}
	});
});

