var main = (function ($) {
  function initializer(){

    hljs.initHighlightingOnLoad();

    //Toogle navigator
    $('.sidebar-toggle').click(function(){
      $('body').toggleClass('open');
    });
  
    $('.cover').click(function(){
      $('body').removeClass('open');
    });

    // navigator dropdown
    $('#current-dropdown-toggle').text($('.current-app').text());

    $('.to-the-top').click(function(e) {
      e.preventDefault();
      $('body, html').animate({scrollTop: 0}, 500, 'swing');
    });

    // CLIPBOARD
    // copy current window location and add anchor
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


    // set zomm in every image
    $('img:not(.no-zoom)').each(function(){
      if($(this).closest('table').length < 1){
        $(this).addClass('img-responsive').attr('data-action', 'zoom');
      }
    });

    // tables
    $('table').each(function(){
      var $this = $(this);
      if( $this.closest('.table-responsive').length < 1 ){
        $this.wrap( "<div class='table-responsive'></div>" );
      }
    });
    
  }
  return {
    init: initializer
  };

})(jQuery);

main.init();


