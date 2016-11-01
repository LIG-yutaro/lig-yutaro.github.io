$(function(){
	let fuga = '.fuga';
	let $animsition = $('.animsition');

	$animsition.animsition({
		inClass: 'flip-in-x-fr',
		outClass: 'flip-out-x-fr',
		inDuration: 1500,
		outDuration: 800,
		linkElement: fuga
	});
});