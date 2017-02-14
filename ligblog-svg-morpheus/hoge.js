$(function(){
	let $hoge = $('.hoge');
	let isFormation = 'dia';

	let hoge = new SVGMorpheus('.hoge', {
		duration: '1000',
		easing: 'circ-in', 
		rotation: 'none'
	});

	setInterval(()=>{
		if(isFormation === 'dia'){
			hoge.to('HEART');
			isFormation = 'heart';
		}else if(isFormation === 'heart'){
			hoge.to('CLOVER');
			isFormation = 'clover';
		}else if(isFormation === 'clover'){
			hoge.to('SPADE');
			isFormation = 'spade';
		}else if(isFormation === 'spade'){
			hoge.to('DIA');
			isFormation = 'dia';
		}
	}, 2500);
});