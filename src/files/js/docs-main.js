$(document).ready(function () {
  hljs.initHighlightingOnLoad();

  $('[data-toggle=offcanvas]').click(function () {
    $('.row-offcanvas').toggleClass('active');
  });

  /*$('.left-nav').affix({
    offset: {
      top:0,
      bottom: 200/*
    , bottom: function () {
        return (this.bottom = $('footer').outerHeight(true));
      }
    }
  });*/

});

$(function(){
    // name your elements here
    var stickyElement   = '.left-nav',   // the element you want to make sticky
        bottomElement   = 'footer'; // the bottom element where you want the sticky element to stop (usually the footer)
    // make sure the element exists on the page before trying to initalize
    if($( stickyElement ).length){
        $( stickyElement ).each(function(){

            // let's save some messy code in clean variables
            // when should we start affixing? (the amount of pixels to the top from the element)
            var fromTop = $( this ).offset().top-60,
                // where is the bottom of the element?
                fromBottom = $( document ).height()-(fromTop + $( this ).outerHeight()),
                // where should we stop? (the amount of pixels from the top where the bottom element is)
                // also add the outer height mismatch to the height of the element to account for padding and borders
                stopOn = $( document ).height()-( $( bottomElement ).offset().top)+($( this ).outerHeight() - $( this ).height());
            // if the element doesn't need to get sticky, then skip it so it won't mess up your layout
            if( (fromBottom-stopOn) > 200 ){
                // let's put a sticky width on the element and assign it to the top
                $( this ).css('width', $( this ).width()).css('top', '60px').css('position', '');
                // assign the affix to the element
                console.log(fromTop, stopOn)
                $( this ).affix({
                    offset: {
                        // make it stick where the top pixel of the element is
                        top: fromTop,
                        // make it stop where the top pixel of the bottom element is
                        bottom: stopOn
                    }
                // when the affix get's called then make sure the position is the default (fixed) and it's at the top
                }).on('affix.bs.affix', function(){ $( this ).css('top', '60px').css('position', ''); });
            }
            // trigger the scroll event so it always activates
            $( window ).trigger('scroll');
        });
    }
});