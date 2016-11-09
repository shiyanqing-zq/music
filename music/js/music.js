$(function(){
	var lb1=$(".lb-box");
	var lb2=$(".gc-box");
	var lb3=$(".tp-box");
	var back=$(".xia");
	var $audio=$("#audio");
	var audio=$audio.get(0);
	var play=$(".sx");
	//各页面跳转
	lb1.show();
	lb1.on("click",function(){
		$(this).hide();
		lb2.show();
	});
	lb2.on("click",function(){
		$(this).hide();
		lb3.show();
	});
	back.on("click",function(){
		lb3.hide();
		lb1.show();
	});
	//播放和暂停
	play.on("click",".play",function(){
		if(audio.paused){
			audio.play();
		}else{
			audio.pause();
		}
	});
	
	$audio.on("play",function(){
		console.log($(".sx .play").html("&#xe6c8;"));
	});
	$audio.on("pause",function(){
		$(".sx .play").html("&#xe6b8;");
	});
	
});