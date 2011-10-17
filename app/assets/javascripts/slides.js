$(document).ready(function(){
	
	$('#slide2').hide();
	$('#slide3').hide();
	$('#slide4').hide();
	
	
	$('#next1').click(function(){
		$('#slide2').show("slide", { direction: "right" }, 1000);
		$('#slide1').hide("slide", { direction: "left" }, 1000);
	});
	
	
	$('#prev2').click(function(){
		$('#slide1').show("slide", { direction: "left" }, 1000);
		$('#slide2').hide("slide", { direction: "right" }, 1000);
	});
	$('#next2').click(function(){
		$('#slide3').show("slide", { direction: "right" }, 1000);
		$('#slide2').hide("slide", { direction: "left" }, 1000);
	});
	
	
	$('#prev3').click(function(){
		$('#slide2').show("slide", { direction: "left" }, 1000);
		$('#slide3').hide("slide", { direction: "right" }, 1000);
	});
	$('#next3').click(function(){
		$('#slide4').show("slide", { direction: "right" }, 1000);
		$('#slide3').hide("slide", { direction: "left" }, 1000);
	});
	
	
	$('#prev4').click(function(){
		$('#slide3').show("slide", { direction: "left" }, 1000);
		$('#slide4').hide("slide", { direction: "right" }, 1000);
	});
	
	
	
	
	
	$('#top_hat_position').change(function() {
		var str = $(this).children("option:selected").text();
		$('#top_hat').css('position', str);
	});
	$('#top_hat_z-index').change(function() {
		var str = $(this).children("option:selected").text();
		$('#top_hat').css('z-index', str);
	});
	
	$('#frame_position').change(function() {
		var str = $(this).children("option:selected").text();
		$('#frame').css('position', str);
		$('#senator_edouard').css('position', str);
	});
	$('#frame_z-index').change(function() {
		var str = $(this).children("option:selected").text();
		$('#frame').css('z-index', str);
	});
});