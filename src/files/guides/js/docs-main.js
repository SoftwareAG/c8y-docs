/*
---
standalone: true
---

*/

$(document).ready(function () {
  $('[class*="lang-"]').each(function () {
    var $this = $(this);
    var classes= $this.attr('class').split(/\s+/).filter(function (cls) {
      return /lang-/.test(cls);
    });
    if (classes.length) {
      var cls = classes[0];
      var lang = cls.split('-')[1];
      $this.addClass(lang);
    }
  });
  hljs.initHighlightingOnLoad();

  $('[data-toggle=offcanvas]').click(function () {
    $('.row-offcanvas').toggleClass('active');
  });

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
