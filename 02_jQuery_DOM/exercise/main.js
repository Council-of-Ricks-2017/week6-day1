// Source:
// http://jsfiddle.net/ft2PD/41/

$(document).ready(function(){
	$('#tatooine, #death, #falcon, #wing').click(function(){
		$('div.selected').removeClass('selected');
		$(this).addClass('selected');

	})}).keyup(function(e){
		var div = $('div.selected');
		console.log(div);
		console.log(e.which);
		switch (e.which) {
	case 37:
		$(div).stop().animate({
			left: '-=100'
		}); //left arrow key
		break;
	case 38:
		$(div).stop().animate({
			top: '-=100'
		}); //up arrow key
		break;
	case 39:
		$(div).stop().animate({
			left: '+=100'
		}); //right arrow key
		break;
	case 40:
		$(div).stop().animate({
			top: '+=100'
		}); //bottom arrow key
		break;
	}
	});

