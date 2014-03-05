$(document).ready(function () {

	var gridX = 20,
		gridY = 13,

		charts = [
			// yellow to purple
			['#4c3f85',
				'#5f3b75',
				'#78336a',
				'#ae306d',
				'#a52c4b',
				'#cc573b',
				'#e7772b',
				'#ea8c27',
				'#ec9c23',
				'#efb121'],

			// blue to orange
			['#d5443a',
				'#b52f4e',
				'#962a69',
				'#76316a',
				'#61356c',
				'#433a83',
				'#293ca7',
				'#2d50b0',
				'#346aa4',
				'#3f7ca4'],

			// purple to blue to green
			['#9a3069',
				'#5f3b75',
				'#3e3e95',
				'#293ca7',
				'#384b98',
				'#356499',
				'#207e71',
				'#5caa5e',
				'#a4c33f',
				'#dee646'],

			// green to orange
			['#2f7fa1',
				'#433a83',
				'#288073',
				'#55ab60',
				'#80c24f',
				'#c7d352',
				'#e4ac2f',
				'#f59a2b',
				'#f2892f',
				'#e37331',
				'#df6032'],

			// purple
			['#4f3c78',
				'#61356c',
				'#9f9bbd',
				'#aca4be',
				'#b9a8bc',
				'#61649e',
				'#686399',
				'#6f5f8a',
				'#8b7fa4']
		];

	// get a random chart
	var currentChart = Math.floor((Math.random() * charts.length)),
		colors = charts[currentChart];

	/**
	 * Return a random color from the current chart
	 * @return {String} 
	 */
	function getRandomColor() {
		var length = colors.length,
			random = Math.floor((Math.random() * length)),
			color = colors[random];

		return color;
	}

	/**
	 * Return a number that respect the grid
	 * @param  {String} axis
	 * @param  {Number} num
	
	 * @return {Number}
	 */
	function getGrig(axis, num) {

		var result = 0;

		switch (axis.toUpperCase()) {

		case 'X':
			result = gridX * num;
			return result;

		case 'Y':
			result = gridY * num;
			return result;
		}
	}


	/**
	 * [Create a polygon path with the "M" and "z" command]
	 * @param  {Number} points
	 * @return {Array}
	 */
	function polygonPath(points) {

		if (!points || points.length < 2) {
			return [];
		}

		var path = []; //will use path object type
			path.push(['m', points[0], points[1]]);

		for (var i = 2; i < points.length; i += 2) {
			path.push([points[i], points[i+1]]);
		}

		path.push(['z']);
		return path;
	}

	var canvas = $('#logo')[0];
	var paper = new Raphael(canvas, getGrig('x', 6), getGrig('y', 11));



	/**
	 * Set of all triangles needed to draw the logo
	 * @type {Array}
	 */

	var triangles = paper.set();
		triangles.push(
				paper.path(polygonPath([getGrig('x', 0), getGrig('y', 0), getGrig('x', 4), getGrig('y', 4), getGrig('x', 0), getGrig('y', 8), getGrig('x', 0), getGrig('y', 6), getGrig('x', 2), getGrig('y', 4), getGrig('x', 0), getGrig('y', 2)])),
				paper.path(polygonPath([getGrig('x', 6), getGrig('y', 3), getGrig('x', 2), getGrig('y', 7), getGrig('x', 6), getGrig('y', 11), getGrig('x', 6), getGrig('y', 9), getGrig('x', 4), getGrig('y', 7), getGrig('x', 6), getGrig('y', 5)])),

				paper.path(polygonPath([getGrig('x', 0), getGrig('y', 0), getGrig('x', 1), getGrig('y', 1), getGrig('x', 0), getGrig('y', 1)])),
				paper.path(polygonPath([getGrig('x', 0), getGrig('y', 1), getGrig('x', 1), getGrig('y', 1), getGrig('x', 0), getGrig('y', 2)])),
				paper.path(polygonPath([getGrig('x', 0), getGrig('y', 2), getGrig('x', 1), getGrig('y', 1), getGrig('x', 2), getGrig('y', 2)])),
				paper.path(polygonPath([getGrig('x', 0), getGrig('y', 2), getGrig('x', 2), getGrig('y', 2), getGrig('x', 1), getGrig('y', 3)])),
				paper.path(polygonPath([getGrig('x', 1), getGrig('y', 3), getGrig('x', 2), getGrig('y', 2), getGrig('x', 3), getGrig('y', 3)])),
				paper.path(polygonPath([getGrig('x', 1), getGrig('y', 3), getGrig('x', 3), getGrig('y', 3), getGrig('x', 2), getGrig('y', 4)])),
				paper.path(polygonPath([getGrig('x', 2), getGrig('y', 4), getGrig('x', 3), getGrig('y', 3), getGrig('x', 4), getGrig('y', 4)])),
				paper.path(polygonPath([getGrig('x', 2), getGrig('y', 4), getGrig('x', 4), getGrig('y', 4), getGrig('x', 3), getGrig('y', 5)])),
				paper.path(polygonPath([getGrig('x', 1), getGrig('y', 5), getGrig('x', 2), getGrig('y', 4), getGrig('x', 3), getGrig('y', 5)])),
				paper.path(polygonPath([getGrig('x', 1), getGrig('y', 5), getGrig('x', 3), getGrig('y', 5), getGrig('x', 2), getGrig('y', 6)])),
				paper.path(polygonPath([getGrig('x', 0), getGrig('y', 6), getGrig('x', 1), getGrig('y', 5), getGrig('x', 2), getGrig('y', 6)])),
				paper.path(polygonPath([getGrig('x', 0), getGrig('y', 6), getGrig('x', 2), getGrig('y', 6), getGrig('x', 1), getGrig('y', 7)])),
				paper.path(polygonPath([getGrig('x', 0), getGrig('y', 6), getGrig('x', 1), getGrig('y', 7), getGrig('x', 0), getGrig('y', 7)])),
				paper.path(polygonPath([getGrig('x', 0), getGrig('y', 7), getGrig('x', 1), getGrig('y', 7), getGrig('x', 0), getGrig('y', 8)])),

				paper.path(polygonPath([getGrig('x', 5), getGrig('y', 4), getGrig('x', 6), getGrig('y', 4), getGrig('x', 6), getGrig('y', 3)])),
				paper.path(polygonPath([getGrig('x', 5), getGrig('y', 4), getGrig('x', 6), getGrig('y', 4), getGrig('x', 6), getGrig('y', 5)])),
				paper.path(polygonPath([getGrig('x', 4), getGrig('y', 5), getGrig('x', 5), getGrig('y', 4), getGrig('x', 6), getGrig('y', 5)])),
				paper.path(polygonPath([getGrig('x', 4), getGrig('y', 5), getGrig('x', 6), getGrig('y', 5), getGrig('x', 5), getGrig('y', 6)])),
				paper.path(polygonPath([getGrig('x', 3), getGrig('y', 6), getGrig('x', 4), getGrig('y', 5), getGrig('x', 5), getGrig('y', 6)])),
				paper.path(polygonPath([getGrig('x', 3), getGrig('y', 6), getGrig('x', 5), getGrig('y', 6), getGrig('x', 4), getGrig('y', 7)])),
				paper.path(polygonPath([getGrig('x', 2), getGrig('y', 7), getGrig('x', 3), getGrig('y', 6), getGrig('x', 4), getGrig('y', 7)])),
				paper.path(polygonPath([getGrig('x', 2), getGrig('y', 7), getGrig('x', 4), getGrig('y', 7), getGrig('x', 3), getGrig('y', 8)])),
				paper.path(polygonPath([getGrig('x', 3), getGrig('y', 8), getGrig('x', 4), getGrig('y', 7), getGrig('x', 5), getGrig('y', 8)])),
				paper.path(polygonPath([getGrig('x', 3), getGrig('y', 8), getGrig('x', 5), getGrig('y', 8), getGrig('x', 4), getGrig('y', 9)])),
				paper.path(polygonPath([getGrig('x', 4), getGrig('y', 9), getGrig('x', 5), getGrig('y', 8), getGrig('x', 6), getGrig('y', 9)])),
				paper.path(polygonPath([getGrig('x', 4), getGrig('y', 9), getGrig('x', 6), getGrig('y', 9), getGrig('x', 5), getGrig('y', 10)])),
				paper.path(polygonPath([getGrig('x', 5), getGrig('y', 10), getGrig('x', 6), getGrig('y', 9), getGrig('x', 6), getGrig('y', 10)])),
				paper.path(polygonPath([getGrig('x', 5), getGrig('y', 10), getGrig('x', 6), getGrig('y', 10), getGrig('x', 6), getGrig('y', 11)]))
		).attr({
			'fill': '#a3a3a3',
			'stroke': '#a3a3a3',
			'stroke-width': 0
		});
		

		/**
		 * Animate the color of each triangle
		 */
		$('#logo').mouseenter(function(){
			// launchAnimation();
		}).mousedown(function(){
			// launchAnimation();
		});

		function launchAnimation(){
				var color = '';
				var previousColor = '';
				var duration = 0;
				var delay = 0;
				var animation;

				for(var i = 0; i < triangles.length; i++){
					previousColor = color;
					color = getRandomColor();

					if (color === previousColor){
						color = getRandomColor();
					}
		
					duration = Math.floor((Math.random()*500)+100);
					delay = Math.floor((Math.random()*500));

					animation = Raphael.animation({
						'fill': color,
						'stroke': color,
						'easing': 'linear'
					}, duration, function(){
						launchAnimation();
					});
					
					triangles[i].stop().animate(animation.delay(delay));
				}
			}


		/**
		 * Reset the color of each triangle
		 */
		$('#logo').mouseleave(function(){
			var color = '#a3a3a3';
			var duration = 0;
			var delay = 0;
			var animation;
			
			for(var i = 0; i < triangles.length; i++){
				duration = Math.floor((Math.random()*600)+100);
				delay = Math.floor((Math.random()*500));

				animation = Raphael.animation({
					'fill': color,
					'stroke': color,
					'easing': 'linear'
				}, duration);

				triangles[i].stop().animate(animation.delay(delay));
			}
		});


});
