(function() {
	//wrap our existing svg and store elements to be animated
	var hospSvg = Snap('#cd-animated-hosp'),
		
		floor = hospSvg.select('#cd-floor'),
		magCircle1 = hospSvg.select('#cd-magnify-1'),
		magCircle2 = hospSvg.select('#cd-magnify-2'),
		magRect1 = hospSvg.select('#cd-magnify-3'),
		textH = hospSvg.select('#text-h-1'),
		mag = hospSvg.select('#cd-mag'),
		buildingBase1 = hospSvg.select('#cd-home-1-base'),
		buildingDoor1 = hospSvg.select('#cd-home-1-door'),
		buildingRoof1 = hospSvg.select('#cd-home-1-roof'),
		buildingWindow1 = hospSvg.select('#cd-home-1-window'),
		buildingChimney = hospSvg.select('#cd-home-1-chimney'),
		buildingBase2 = hospSvg.select('#cd-home-2-base'),
		buildingDoor2 = hospSvg.select('#cd-home-2-door'),
		buildingRoof2 = hospSvg.select('#cd-home-2-roof'),
		buildingWindow2 = hospSvg.select('#cd-home-2-window'),
		buildingBase3 = hospSvg.select('#cd-home-3-base'),
		buildingRoof3 = hospSvg.select('#cd-home-3-roof'),
		//buildingWindow3 = animatingSvg.select('#cd-home-3-window'),
		textPlus = hospSvg.select('#text-plus'),
		floor = hospSvg.select('#cd-floor'),
		clouds1 = hospSvg.select('#cd-cloud-1'),
		clouds2 = hospSvg.select('#cd-cloud-2');


	initLoading();	
	

	function initLoading() {
	
					animateMagnify();
				
	}

	function magnify(){
		mag.animate([{r: 100}, 500, mina.easein], [{r: 200}, 1500, mina.easein], [{r: 200}, 1500, mina.easein]);
	}

	function animateMagnify(){
		magCircle1.animate({transform: 's1 1'}, 400, mina.easeinout);
		setTimeout(function(){
			magCircle2.animate({transform: 's1 1'}, 400, mina.easeinout);
		}, 100);
		setTimeout(function(){
			magRect1.animate({'height': magRect1.attr('data-height')}, 800, mina.bounce);
			document.getElementById("text-h-1").style.display = "block";
			textH.addClass('draw');
		}, 100);
		setTimeout(function(){
			mag.addClass('fade');
			setTimeout(function(){
				animateFloor();
			}, 300);
		}, 2500);
	}

	function animateFloor() {
		floor.animate({'x2': floor.attr('data-x')}, 400, mina.easeinout, animateBuildings);
	}

	function animateBuildings() {
		buildingBase1.animate({'height': buildingBase1.attr('data-height')}, 800, mina.elastic);
		setTimeout(function(){
			buildingBase2.animate({'height': buildingBase2.attr('data-height')}, 800, mina.elastic);
		}, 100);
		setTimeout(function(){
			buildingBase3.animate({'height': buildingBase3.attr('data-height')}, 800, mina.elastic, function(){
				animateRoofs();
				animateDoors();
				document.getElementById("text-plus").style.display = "block";
				textPlus.addClass('draw-plus');
			});
		}, 200);
	}

	function animateRoofs() {
		buildingRoof1.animate({'width': buildingRoof1.attr('data-width')}, 300, mina.easeinout);
		setTimeout(function(){
			buildingRoof2.animate({'width': buildingRoof2.attr('data-width')}, 300, mina.easeinout);
		}, 100);
		/*setTimeout(function(){
			buildingRoof3.animate({'width': buildingRoof3.attr('data-width')}, 300, mina.easeinout);
		}, 100);*/
	}

	function animateDoors() {
		buildingDoor1.animate({'height': buildingDoor1.attr('data-height')}, 300, mina.easeinout);
		setTimeout(function(){
			buildingDoor2.animate({'height': buildingDoor2.attr('data-height')}, 300, mina.easeinout, function(){
				animateWindows();
			});
		}, 100);
	}

	function animateWindows() {
		buildingWindow1.animate({transform: 's1 1'}, 400, mina.easeinout);
		setTimeout(function(){
			buildingWindow2.animate({transform: 's1 1'}, 400, mina.easeinout, function(){
				animateChimneies();
			});
		}, 100);
		/*setTimeout(function(){
			buildingWindow3.animate({transform: 's1 1'}, 400, mina.easeinout, function(){
				animateChimneies();
			});
		}, 200);*/
	}

	function animateChimneies() {
		buildingChimney.attr('visibility', 'visible').animate({'transform': 't0 0'}, 800, mina.elastic);
		setTimeout(function(){
			buildingRoof3.attr('visibility', 'visible').animate({'transform': 't0 0'}, 1000, mina.elastic, function(){
				showClouds();
			});
		}, 100);
	}

	

	function showClouds() {
		clouds1.animate({transform: 't210 0'}, 12000);
		clouds2.animate({transform: 't-210 0'}, 12000, function() {
			hideClouds();
		});
	}

	function hideClouds() {
		clouds1.animate({transform: 't-80 0'}, 12000);
		clouds2.animate({transform: 't70 0'}, 12000, function() {
			//this way the animation will be infinite
			showClouds();
		});
	}
})();