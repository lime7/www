// $(document).ready(function(){

// });

$(window).load(function(){

	$(".dropdown").click(function(){
		if($(this).hasClass('add')) {
			$(this).removeClass('add');
			$(".nav").removeClass('open');
			$(".nav").hide(200);
		} else {
			$(this).addClass('add');
			$(".nav").addClass('open');
			$(".nav").show(200);
		}
	});

	$(".nav-menu>li>a").click(function(){
		if($(".dropdown").hasClass('add')) {
			$(".dropdown").removeClass('add');
			$(".nav").removeClass('open');
			$(".nav").hide(200);
		} else {
			$(".dropdown").addClass('add');
			$(".nav").addClass('open');
			$(".nav").show(200);
		}
	});
});