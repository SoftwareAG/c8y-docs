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
  // set title for current section
  $('.sg-title .dropdown-toggle').attr('title',$.trim($('.sg-title .dropdown-menu .active a').text())).find('.current').html($('.sg-title .dropdown-menu .active a').text() + '<span class="caret"></span>');


  // set zomm in every image
  $('img').each(function(){
    $(this).addClass('img-responsive').attr('data-action', 'zoom');
  });

  $('.sidebar-toggle').click(function(){
    $('body').toggleClass('open');
  });

  $('.cover').click(function(){
    $('body').removeClass('open');
  });


  $('.to-the-top').click(function(e) {
    e.preventDefault();
    $('body, html').animate({scrollTop: 0}, 500, 'swing');
  });


  // copy link
  var clipboard = new Clipboard('.bookmark', {
    text: function (trigger) {
      return window.location.href.split('#')[0] + trigger.getAttribute('data-clipboard-text');
    }
  });
  clipboard.on('success', function (e) {
    $(e.trigger).addClass('copied');
    setTimeout(function () {
      $(e.trigger).removeClass('copied');
    }, 1500);
  });

  var clipboardicon = new Clipboard('.fa-hover', {
    text: function (trigger) {
      return 'fa fa-' + $(trigger).find('.sr-only').next('span').text();
    }
  });
  clipboardicon.on('success', function (e) {
    $(e.trigger).addClass('copied');
    setTimeout(function () {
      $(e.trigger).removeClass('copied');
    }, 1500);
  });

  var clipboardappicon = new Clipboard('.app-icon', {
    text: function (trigger) {
      return 'c8y-icon c8y-icon-' + $(trigger).find('span').text().toLowerCase().trim();
    }
  });
  clipboardappicon.on('success', function (e) {
    $(e.trigger).addClass('copied');
    setTimeout(function () {
      $(e.trigger).removeClass('copied');
    }, 1500);
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
