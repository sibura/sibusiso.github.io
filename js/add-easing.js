$(document).ready(function() {
	$('#easing_example_1').click(function(event) {
		$(this)
			.animate(
				{ left: 200 }, {
					duration: 'slow',
					easing: 'easeOutBounce'
				})
			.animate(
				{ left: 0 }, {
					duration: 'slow',
					easing: 'easeOutBounce'
				});
	});
});


$(document).ready(function() {
	$('#easing_example_2').click(function(event) {
		$(this)
			.animate(
				{ left: 200 }, {
					duration: 'slow',
					easing: 'easeOutElastic'
				})
			.animate(
				{ left: 0 }, {
					duration: 'slow',
					easing: 'easeOutElastic'
				});
	});
});

$(document).ready(function() {
	$('#easing_example_3').click(function(event) {
		$(this)
			.animate(
				{ left: 200 }, {
					duration: 'slow',
					easing: 'easeOutBack'
				})
			.animate(
				{ left: 0 }, {
					duration: 'slow',
					easing: 'easeOutBack'
				});
	});
});
