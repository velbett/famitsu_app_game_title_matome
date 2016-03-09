
window.ua = {};
var ua			 = window.ua;
ua.name			= window.navigator.userAgent.toLowerCase();
ua.isAndroid = ua.name.indexOf('android') >= 0;
ua.isiPhone	= ua.name.indexOf('iphone') >= 0;
ua.isiPod		= ua.name.indexOf('ipod') >= 0;
ua.isiPad		= ua.name.indexOf('ipad') >= 0;
ua.isiOS		 = (ua.isiPhone || ua.isiPod || ua.isiPad);
ua.isTablet	= (ua.isiPad || (ua.isAndroid && ua.name.indexOf('mobile') < 0));



$(document).ready( function(){
	$('body').append('<div id="page-top-back" class="js-page-top"><span><i class="fa fa-arrow-up"></i></span></div>');
	$('body').append('<div id="menu-slide" class="js-menu-slide"><span><i class="fa fa-bars"></i></span></div>');
});

$(function(){

	//固定するヘッダーのセレクタを取得
	var fixedHeaderElement = $('#content-main-nav').offset().top;

	$(window).scroll(function () {

		if (!ua.isiOS && !ua.isAndroid && !ua.isTablet) {
			if($(window).scrollTop() > fixedHeaderElement - -200) {
				$('#content-main-nav').addClass('fixed');
				$('.game-short-prof-inner').addClass('move');
			} else{
				$('#content-main-nav').removeClass('fixed');
				$('.game-short-prof-inner').removeClass('move');
			}
		}
		else {
			if($(window).scrollTop() > fixedHeaderElement - -200) {
				$('#content-main-nav').addClass('fixed');
				$('#content-main-nav').addClass('sp-trans');
			} else{
				$('#content-main-nav').removeClass('fixed');
				$('#content-main-nav').removeClass('sp-trans');
			}
		}
	});
	// ページTOPへ戻る
	$('.js-page-top').click(function() {
		$('html,body').animate({ scrollTop: 0}, 'middle');
		return false;
	});

	var topBackBtn = $(".js-page-top");
	topBackBtn.hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 300) {
			topBackBtn.fadeIn();
		}
		else {
			topBackBtn.fadeOut();
		}
	});

	topBackBtn.click(function () {
		slideObj('html','0','200','0');
		return false;
	});

	var menuSlide = $(".js-menu-slide");
	menuSlide.hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 300) {
			menuSlide.fadeIn();
		}
		else {
			menuSlide.fadeOut();
		}
	});

	menuSlide.click(function () {
		slideObj('#menu','0','200','80');
		return false;
	});


});




function slideObj(a,b,speed,offset) {
		var p = $(a).eq(b).offset().top;
		p = parseInt(p) - parseInt(offset);
		$('html,body').animate({ scrollTop: p}, speed);
		return false;
}