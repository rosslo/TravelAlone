$(document).ready(function() {
    $('#fullpage').fullpage({
		'afterLoad': function(anchorLink, index){
			$('.title, .image, .description').css('visibility','hidden');
			$('.title, .image, .description').removeClass('fadeInUp animated');
			if(index == 1){
				$('.header-box .title, .header-box .image').css('visibility','visible');
				$('.header-box .title, .header-box .image').addClass('fadeInUp animated');
			}
			if(index == 2){
				$('.nav-bar').css('display','block');
				$('#box-story .title, #box-story .image, #box-story .description').css('visibility','visible');
				$('#box-story .title, #box-story .image, #box-story .description').addClass('fadeInUp animated');
			}
			if(index == 3){
				$('#box-service .title, #box-service .image, #box-service .description').css('visibility','visible');
				$('#box-service .title, #box-service .image, #box-service .description').addClass('fadeInUp animated');
			}
			if(index == 4){
				$('#box-facility .title, #box-facility .image').css('visibility','visible');
				$('#box-facility .title, #box-facility .image').addClass('fadeInUp animated');
			}
		}
    });
});