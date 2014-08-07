$(document).ready(function () {
  hljs.initHighlightingOnLoad();

  $('[data-toggle=offcanvas]').click(function () {
    $('.row-offcanvas').toggleClass('active');
  });


});


// Bootstrap Affix fix
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
                console.log(fromTop, stopOn)
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
});