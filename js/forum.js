(function() {
	//wrap our existing svg and store elements to be animated
	var forumSvg = Snap('#cd-animated-forum'),
		
		p1 = forumSvg.select('#p1'),
		pl1 = forumSvg.select('#pl-1'),
		pr1 = forumSvg.select('#pr-1'),
		pl2 = forumSvg.select('#pl-2'),
		pr2 = forumSvg.select('#pr-2'),
		pl3 = forumSvg.select('#pl-3'),
		pr3 = forumSvg.select('#pr-3'),
		pTop = forumSvg.select('#p-top');

	//circumf will be used to animate the loadingCircle
	
	initLoading();	
	

	function initLoading() {

		
	
					animateP1();
					window.setInterval(animateP1,2000);
				
	}

	function animateP1(){
		/*document.getElementById('p1').style.display = "block";
		p1.addClass('animated slideInUp');

		setTimeout(function(){
			document.getElementById('pl-1').style.display = "block";
			pl1.addClass('animated slideInUp');
		}, 200);

		setTimeout(function(){
			document.getElementById('pr-1').style.display = "block";
			pr1.addClass('animated slideInUp');
		}, 200);

		setTimeout(function(){
			document.getElementById('pl-2').style.display = "block";
			pl2.addClass('animated slideInUp');
		}, 400);

		setTimeout(function(){
			document.getElementById('pr-2').style.display = "block";
			pr2.addClass('animated slideInUp');
		}, 400);

		setTimeout(function(){
			document.getElementById('pl-3').style.display = "block";
			pl3.addClass('animated slideInUp');
		}, 600);

		setTimeout(function(){
			document.getElementById('pr-3').style.display = "block";
			pr3.addClass('animated slideInUp');
		}, 600);

		setTimeout(function(){
			document.getElementById('p-top').style.display = "block";
			pTop.addClass('animated slideInUp');
		}, 800);*/

		document.getElementById('p1').style.opacity = "1";
		p1.addClass('animated slideInUp');

		setTimeout(function(){
			document.getElementById('pl-1').style.opacity = "1";
			pl1.addClass('animated slideInUp');
		}, 200);

		setTimeout(function(){
			document.getElementById('pr-1').style.opacity = "1";
			pr1.addClass('animated slideInUp');
		}, 200);

		setTimeout(function(){
			document.getElementById('pl-2').style.opacity = "1";
			pl2.addClass('animated slideInUp');
		}, 400);

		setTimeout(function(){
			document.getElementById('pr-2').style.opacity = "1";
			pr2.addClass('animated slideInUp');
		}, 400);

		/*setTimeout(function(){
			document.getElementById('pl-3').style.opacity = "1";
			pl3.addClass('animated slideInUp');
		}, 600);

		setTimeout(function(){
			document.getElementById('pr-3').style.opacity = "1";
			pr3.addClass('animated slideInUp');
		}, 600);*/

		setTimeout(function(){
			document.getElementById('p-top').style.opacity = "1";
			pTop.addClass('animated slideInUp');
		}, 800);
	}

})();