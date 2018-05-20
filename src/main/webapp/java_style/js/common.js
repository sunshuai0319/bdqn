$(function(){
	$('#dowebok').fullpage({
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
		menu: '#menu',
		scrollingSpeed:1000,
		afterLoad:function(anchorLink ,index){
			if(index == 4){
				$(".pic").show();
			}else if(index == 7){
				$(".footer-box").show();
			};
		},
		onLeave:function(index, nextIndex , direction ){
			if(index == 4){
				$(".pic").hide();
			}else if(index == 7){
				$(".footer-box").hide();
			};
		}
	});
	$(window).resize(function(){
		getNum();
	});
	getNum();
	$(".section1_pic3, .section1_pic4").mouseover(function(){
		$(this).addClass("on").siblings().removeClass('on');
		$(".section1_pic6").addClass("on");
	});
	$(".section1_pic3, .section1_pic4").mouseout(function(){
		$(this).removeClass('on');
		$(".section1_pic6").removeClass("on");
	});
	$(".section1_pic4").mouseover(function(){
		$(this).addClass("on").siblings().removeClass('on');
		$(".section1_pic7").addClass("on");
	});
	$(".section1_pic4").mouseout(function(){
		$(this).removeClass('on');
		$(".section1_pic7").removeClass("on");
	});
	$(".section1_pic2").mouseover(function(){
		$(".section1_pic5").addClass("on");
	});
	$(".section1_pic2").mouseout(function(){
		$(".section1_pic5").removeClass("on");
	});
	$(".section3_btn1 .section3_c").mouseover(function(){
		var i = $(this).index();
		$(this).addClass("on").siblings().removeClass("on");
		$(".section3_btn2 .section3_b").eq(i).addClass("now").siblings().removeClass("now");
	});
	$(".section5_lpic .section5_lpic0").mouseover(function(){
		var i = $(this).index();
		$(this).addClass("on").siblings().removeClass("on");
		$(".section5_rpic .section5_rpic0").eq(i).addClass("now").siblings().removeClass("now");
	});
	$(".section6_lpic .section6_lpic0").mouseover(function(){
		var k = $(this).index();
		$(this).addClass("on").siblings().removeClass("on");
		$(".section6_rpic .section6_rpic0").eq(k).addClass("now").siblings().removeClass("now");
	});
	
});

function getNum(){
	var Wh = $(window).height();
	var num = 850/1080; 
	if(Wh > 850){
		$(".section_box").css("height","850px");	
		$(".section_box").css({marginLeft:"-540px"});
		$(".section_box").css({marginTop:(Wh-850)/2});
	}else{
		$(".section_box").css("height",Wh);	
		$(".section_box").css({"width":Wh/num});
		$(".section_box").css({marginLeft:-(Wh/num)/2});
	}
};
$(function() {
	if((navigator.userAgent.indexOf('MSIE') >= 0) 
    && (navigator.userAgent.indexOf('Opera') < 0)){
		$(".pic").css({"background":"none"});
		$(".pic").html("建议非ie浏览器");
	}else{
		var imgL = $(".pic img").size();
		var deg = 360 / imgL;
		var roY = 0,
			roX = -20;
		var xN = 0,
			yN = 0;
		var play = null;
		$(".pic img").each(function(i) {
			$(this).css({
				"transform": "rotateY(" + i * deg + "deg) translateZ(300px)",			
				"-webkit-transform": "rotateY(" + i * deg + "deg) translateZ(300px)",
				"-moz-transform": "rotateY(" + i * deg + "deg) translateZ(300px)",
				"-ms-transform": "rotateY(" + i * deg + "deg) translateZ(300px)",
				"-o-transform": "rotateY(" + i * deg + "deg) translateZ(300px)"
			});
			$(this).attr('ondragstart', 'return false');
		});
		$(document).mousedown(function(ev) {
			var x_ = ev.clientX;
			var y_ = ev.clientY;
			clearInterval(play);
			console.log('我按下了');
			$(this).bind('mousemove', function(ev) {
				var x = ev.clientX;
				var y = ev.clientY;
				xN = x - x_;
				yN = y - y_;
				roY += xN * 0.2;
				roX -= yN * 0.1;
				console.log('移动');
				$('.pic').css({
					'transform': 'perspective(800px) rotateX(-20deg) rotateY(' + roY + 'deg)',
					'-webkit-transform': 'perspective(800px) rotateX(-20deg) rotateY(' + roY + 'deg)',
					'-moz-transform': 'perspective(800px) rotateX(-20deg) rotateY(' + roY + 'deg)',
					'-ms-transform': 'perspective(800px) rotateX(-20deg) rotateY(' + roY + 'deg)',
					'-o-transform': 'perspective(800px) rotateX(-20deg) rotateY(' + roY + 'deg)'
				});
				x_ = ev.clientX;
				y_ = ev.clientY;
			});
		}).mouseup(function() {
			$(this).unbind('mousemove');
			var play = setInterval(function() {
				xN *= 0.95;
				yN *= 0.95
				if (Math.abs(xN) < 1 && Math.abs(yN) < 1) {
					clearInterval(play);
				};
				roY += xN * 0.2;
				roX -= yN * 0.1;
				$('.pic').css({
					'transform': 'perspective(800px) rotateX(-20deg) rotateY(' + roY + 'deg)',
					'-webkit-transform': 'perspective(800px) rotateX(-20deg) rotateY(' + roY + 'deg)',
					'-moz-transform': 'perspective(800px) rotateX(-20deg) rotateY(' + roY + 'deg)',
					'-ms-transform': 'perspective(800px) rotateX(-20deg) rotateY(' + roY + 'deg)',
					'-o-transform': 'perspective(800px) rotateX(-20deg) rotateY(' + roY + 'deg)'
				});
			}, 30);
		});
	};
	var kk = null;
	$(".pic img ").mouseover(function(){
		var i = $(this).index()+1;
		kk = $(this).attr("src");
		$(this).attr("src","java_style/img/section4_pic"+i+i+".jpg")
	});
	$(".pic img ").mouseout(function(){
		$(this).attr("src",kk);
		kk == null;
	})});