

$(function(){
	var $sw;ipe = $('.swipe');
	var $swipeText = $('.swipe-text');

	var $swipeleft = $('.swipeleft');
	var $swipeleftText = $('.swipeleft-text');

	var $swiperight = $('.swiperight');
	var $swiperightText = $('.swiperight-text');

	var $swipeup = $('.swipeup');
	var $swipeupText = $('.swiperight-text');

	var $swipedown = $('.swipedown');
	var $swipedownText = $('.swipedown-text');

	var $pinch = $('.pinch');
	var $pinchText = $('.pinch-text');

	var $pinchin = $('.pinchin');
	var $pinchinText = $('.pinchin-text');

	var $pinchout = $('.pinchout');
	var $pinchoutText = $('.pinchout-text');

	var $tap = $('.tap');
	var $tapText = $('.tap-text');

	var $doubletap = $('.doubletap');
	var $doubletapText = $('.doubletap-text');

	var $hold = $('.hold');
	var $holdText = $('.hold-text');



	$('.swipe').hammer().on('swipe',function(){
		$swipeText.text('swipe ok');
	});

	$swipeleft.hammer().on('swipeleft',function(){
		$swipeleftText.text('swipeleft ok');
	});	

	$swiperight.hammer().on('swiperight',function(){
		$swiperightText.text('swiperight ok');
	});

	$pinch.hammer().on('pinch', function(){
		$pinchText.text('pinch ok');
	});

	$pinchin.hammer().on('pinchin',function(){
		$pinchinText.text('pinchin ok');
	});

	$pinchout.hammer().on('pinchout',function(){
		$pinchoutText.text('pinchout ok');
	});
	
	$tap.hammer().on('tap',function(){
		$tapText.text('tap ok');
	});
	
	$doubletap.hammer().on('doubletap',function(){
		$doubletapText.text('doubletap ok');
	});
	
	$hold.hammer().on('hold',function(){
		$holdText.text('hold ok');
	});
		


});