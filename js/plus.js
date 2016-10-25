(function() {
			var animatingSvg = Snap('#cd-animated-svg'),
	
		textQ = animatingSvg.select('#text-q'),
		textPlus = animatingSvg.select('#text-p'),
		logo = animatingSvg.select('#logo');

	initLoading();	

	
	function initLoading() {
animateQ();
		

	}


	function animateQ(){
		document.getElementById('text-q').style.display = "block";
		textQ.addClass('path-q');
		setTimeout(function(){
			textQ.addClass('fill-q animated wobble');
			
		}, 1000);
		setTimeout(function () {
			animatePlus();
		}, 2000);
	}

	function animatePlus(){
		document.getElementById('text-q').style.display = "none";
		textQ.removeClass('fill-q animated wobble');
		document.getElementById('text-p').style.display = "block";
		textPlus.addClass('plus animated zoomIn');
		setTimeout(function(){
			textPlus.removeClass('animated');
			textPlus.removeClass('zoomIn');
		}, 1500);
		setTimeout(function(){
			textPlus.addClass('fade-out');
		}, 1500);
		setTimeout(function(){
			document.getElementById('text-p').style.display = "none";
			animateLogo();
		}, 2500);
	}

	function animateLogo(){
		document.getElementById('logo').style.display = "block";
		logo.addClass('fade-in');
		setTimeout(function(){
			logo.removeClass('fade-in');
		}, 1500);
		setTimeout(function(){
			logo.addClass('fade-out');
		}, 2000);
		setTimeout(function(){
			document.getElementById('logo').style.display = "none";
			animateQ();
		}, 2500);
	}

	})();