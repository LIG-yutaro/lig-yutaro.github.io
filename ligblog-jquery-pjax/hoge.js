$(function(){
	let hoge = '.hoge';
	let fuga = '.fuga';

	$(document).on('click', fuga, function(e){
		e.preventDefault();
		let href = $(this).attr('href');
		$.pjax({
			url: href,
			container: hoge,
			scrollTo: false
		});
	});
});