$(function(){
	let $hoge = $('.hoge');
	$hoge.mgGlitch({
		destroy : false, // プラグインを停止するには 'true'を設定します
		glitch: true, // グリッチを止めるには 'false'を設定します
		scale: true, // スケーリングを停止するには 'false'を設定します
		blend : true, // グリッチブレンドを停止するには 'false'を設定します
		blendModeType : 'hue', // mix-blend-modeを選択
		glitch1TimeMin : 500, // グリッチ1の最小時間を設定します。
		glitch1TimeMax : 1000, // グリッチ1の最大時間を設定する
		glitch2TimeMin : 10, // グリッチ2の時間を設定します。
		glitch2TimeMax : 100, // グリッチ2の最大時間を設定する
		zIndexStart : 1, // z-indexの基本値を設定します
	});
});