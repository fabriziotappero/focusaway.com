$(function() {
	smoothScroll(300);
	workBelt();
	workLoad();
	clientStuff();

	// resize iframe videos that are included in my blog posts
	$('.fit-my-post-vid-style').fitVids();

});

// smoothScroll function is applied from the document ready function
function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}

function workBelt() {
  $(".trigger").remove();
  $(".return").remove();

  $('.thumb-unit').click(function() {
    //$('.work-belt').addClass("slided");
    $('.thumb-container').hide(800);  // FT
    $('.work-container').show();
    $('html, body').animate({scrollTop: $('#work').offset().top},300);
  });
  $('.work-return').click(function() {
    //$('.work-belt').removeClass("slided");
    $('.work-container').hide(800);
    $('.thumb-container').show(800);  // FT
  });

}

function  workLoad() {

  $.ajaxSetup({ cache: true });

  $('.thumb-unit').click(function() {
    var $this = $(this),
        newTitle = $this.find('strong').text(),
        newfolder = $this.data('folder'),
        spinner = '<div class="loader">Loading...</div>',
        newHTML = 'work/'+ newfolder;

    // load new page content and, when completed, run the vimeo iframe resize window
    $('.project-load').html(spinner).load(newHTML,function(){$('.project-load').fitVids();$('.project-load .container').css("width", "100%");});
		//$('.project-load').load(newHTML);
		$('.project-title').text(newTitle);
    //console.log(newHTML);

  });
}

function clientStuff() {
  $('.client-unit').first().addClass('active-client');
  $('.client-logo').first().addClass('active-client');
  $('.clients-mobile-nav span').first().addClass('active-client');

  $('.client-logo, .clients-mobile-nav span').click(function() {
    var $this = $(this),
        $siblings = $this.parent().children(),
        position = $siblings.index($this);

    $('.client-unit').removeClass('active-client').eq(position).addClass('active-client');
    $siblings.removeClass('active-client');
    $this.addClass('active-client');
  });

  $('.client-control-next, .client-control-prev').click(function() {

    var $this = $(this),
        curActiveClient = $('.clients-belt').find('.active-client'),
        position = $('.clients-belt').children().index(curActiveClient),
        clientNum = $('.client-unit').length;

      if($this.hasClass('client-control-next')) {

        if(position < clientNum -1){
          $('.active-client').removeClass('active-client').next().addClass('active-client');
        } else {
          $('.client-unit').removeClass('active-client').first().addClass('active-client');
          $('.client-logo').removeClass('active-client').first().addClass('active-client');
        }

      } else {

        if (position === 0) {
          $('.client-unit').removeClass('active-client').last().addClass('active-client');
          $('.client-logo').removeClass('active-client').last().addClass('active-client');
        } else {
          $('.active-client').removeClass('active-client').prev().addClass('active-client');
        }
      }
  });

}

//
//     });
//
//   };
//
// })( jQuery );
