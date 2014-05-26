$(document).ready(function () {
  hljs.initHighlightingOnLoad();

  $('[data-toggle=offcanvas]').click(function () {
    $('.row-offcanvas').toggleClass('active');
  });

  $('.left-nav').affix({
    offset: {
      top: 0
    , bottom: function () {
        return (this.bottom = $('footer').outerHeight(true));
      }
    }
  });

  $('.left-nav .active').closest('.collapse').addClass('in');

});