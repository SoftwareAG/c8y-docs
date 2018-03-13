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




  // sidebar

  $('.sidebar-toggle').click(function(){
    $('body').toggleClass('open');
  });

  $('.cover').click(function(){
    $('body').removeClass('open');
  });

//to the top
  $('.to-the-top').click(function(e) {
    e.preventDefault();
    $('body, html').animate({scrollTop: 0}, 500, 'swing');
  });

  $('.link').click(function(){
    var $this= $(this);
    $('.navigatorContent [data-toggle="collapse"]').each(function(){
      if(!$(this).parent().hasClass('current') && !$(this).hasClass('collapsed')){
        $(this).trigger('click');
      }
    });
    setTimeout(function(){
      if($this.parent().find('[data-toggle="collapse"]').hasClass('collapsed')){
        $this.parent().find('[data-toggle="collapse"]').trigger('click');
      }
    }, 150);
  });

  $('.subchildren a').click(function(e){
    if (!$(this).closest('.slot').hasClass('current')) {
      e.preventDefault();
      History.pushState(null, $(this).text(),$(this).attr('data-href'));
    }
  });

  $(window).trigger('statechangecomplete');


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

$(window).on('statechangecomplete', function(e){
    //console.log('event triggered', e);
  // set zomm in every image
    $('img').each(function(){
      if($(this).closest('table').length < 1){
        $(this).addClass('img-responsive').attr('data-action', 'zoom');
      }
    });

    
    setTimeout(function(){
      $('.subchildren a').each(function () {
        if (!$(this).closest('.slot').hasClass('current')) {
          var $t = $(this).parent().find('[data-toggle="collapse"]');
          if($t && !$t.hasClass('collapsed')){
            $t.trigger('click');
          }
        }
      });
    }, 350);
    
    // no ajaxy in every link inside main-content
    $('.main-content a').addClass('no-ajaxy');

    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this).scrollspy('refresh')
    });
});

