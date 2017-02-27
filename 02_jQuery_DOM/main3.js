$(document).ready(function(){

	$("body").prepend("<h1>Hello World</h1>");

	$("ul").append("<li>appended w/jQuery</li>");

	$("ul").click(function(){
		$("ul").append("<li>appended w/click</li>");
		alert("Woo hoo!!!!");
	});

});


