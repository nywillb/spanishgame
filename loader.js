$(".send").on('click', function(){
	$(".text").addClass("active");
	$(".send").addClass("active");
	$(".loader").addClass("active");
	$(".send").delay(60000).queue(function(){
        $(this).addClass("finished").clearQueue();
    });
	
	$(".done").delay(6000).queue(function(){
        $(this).addClass("active").clearQueue();
    });
})