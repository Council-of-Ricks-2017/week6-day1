// Source:
// http://jsfiddle.net/ft2PD/41/

$(document).ready(function(){
	//click on planet, death-star or ships
	$('#tatooine, #death, #falcon, #wing').click(function(){
		//de-select previously selected div element
		$('div.selected').removeClass('selected');
		//make current click element = selected element
		$(this).addClass('selected');

	//(e) stands for event
	})}).keyup(function(e){
		var div = $('div.selected');
		console.log(div);
		//.which logs which key was pressed
		console.log(e.which);
		switch (e.which) {
	//left arrow = key 37
	case 37:
		$(div).stop().animate({
			left: '-=100'
		}); //left arrow key
		break;
	//up arrow = key 38
	case 38:
		$(div).stop().animate({
			top: '-=100'
		}); //up arrow key
		break;
	//right arrow = key 39
	case 39:
		$(div).stop().animate({
			left: '+=100'
		}); //right arrow key
		break;
	//down arrow = key 40
	case 40:
		$(div).stop().animate({
			top: '+=100'
		}); //bottom arrow key
		break;
	}
	});

