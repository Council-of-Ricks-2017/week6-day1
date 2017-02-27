

$(document).ready(function(){
    $("body").prepend("<h1>HELLO WORLD</h1>");
    $("ul").append("<li>First List</li>");
    $("ul").click(function(){
    	$("ul").append("<li>New</li>");
    	alert("warning");
    })
});





