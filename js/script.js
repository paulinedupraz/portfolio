$(document).ready(function () {

	$('.lightbox-link').click(function(){
		// if a lightbox is already open, close it
		$('.lightbox').fadeOut(300);

		var link = $(this).attr('data-link');
		
		$('.lightbox.'+link).delay(200).fadeIn(200);
		$('.shadow').fadeIn(200);

		return false;
	});

	$('.close').click(function(){
		closeLightbox();
	});
	$('.shadow').click(function(){
		closeLightbox();
	});

	function closeLightbox() {
		$('.lightbox').fadeOut(300);
		$('.shadow').fadeOut(300);

		return false;
	}

	


	function revealInit() {
		var reveal = $('.reveal-x').reveal({
			'draggerStartOffset': 50
			});
		
		$('.project .prev').click(function(){
			reveal.reveal('previous');
		});
			
		$('.project .next').click(function(){
			reveal.reveal('next');
		});
		
		$('.project .animToTop').click(function(){
			reveal.reveal('animateTo', '0%', {delay: 0, speed: 400});
		});
		$('.project .animToBottom').click(function(){
			reveal.reveal('animateTo', '100%', {delay: 0, speed: 400});
		});
			
		$('.reveal-y').reveal({
			'direction'			: 'tb',
			'animation'			: true,
			'fixedDragger'		: true
		});
	}

	if($('.reveal-container').length > 0){
		revealInit();
	}

});
