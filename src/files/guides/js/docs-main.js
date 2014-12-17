/*
---
standalone: true
---

*/

$(document).ready(function () {
  hljs.initHighlightingOnLoad();

  $('[data-toggle=offcanvas]').click(function () {
    $('.row-offcanvas').toggleClass('active');
  });

  console.log($('body').closest('iframe'));

  var $placement = $(window).width() > 320 ? 'left' : 'bottom';
  $('.popover-dismiss').popover({
    trigger: 'focus',
    placement: $placement
  });

  $('.to-the-top').click(function(e) {
    e.preventDefault();
    $('body, html').animate({scrollTop: 0}, 500, 'swing');
  });

});


// Bootstrap Affix fix
/*
$(function(){
    var stickyElement   = '.left-nav',
        bottomElement   = 'footer';
    if($( stickyElement ).length){
        $( stickyElement ).each(function(){

            var fromTop = $( this ).offset().top-130,
                fromBottom = $( document ).height()-(fromTop + $( this ).outerHeight()),
                stopOn = $( document ).height()-( $( bottomElement ).offset().top)+($( this ).outerHeight() - $( this ).height());
            if( (fromBottom-stopOn) > 200 ){
                $( this ).css('top', '130px').css('position', '');
                //console.log(fromTop, stopOn)
                $( this ).affix({
                    offset: {
                        top: fromTop,
                        bottom: stopOn
                    }
                }).on('affix.bs.affix', function(){ $( this ).css('top', '130px').css('position', ''); });
            }
            $( window ).trigger('scroll');
        });
    }
}); */