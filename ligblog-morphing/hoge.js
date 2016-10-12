$(function(){
	let $hoge = $('.hoge');
	$hoge.morphing({
		numVert: 10,
		spring: 0.005,
		friction: 0.9,
		radius: 200,
		fps: 90
	});
});