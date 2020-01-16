var main = (function ($) {
  function initializer() {
    
    //Load releases menu
    var json = $.getJSON({'url': "//cumulocity.com/guides/releases.json", 'async': false })
    // var json = $.getJSON("//cumulocity.com/guides/releases.json")
    .done(function (json) {
      //json = JSON.parse(json.responseText);
      console.log('done: ', json);
      var urls = json.releases;
      var vmenu = $('.dropdown.version');
      var loc = window.location;
      vmenu.find('.dropdown-menu').html('');
      $('#current-dropdown-version-toggle').text('');
      for (var index = 0; index < urls.length; index++) {
        var el = urls[index];
        if (loc.href.includes(el.label)) {
          $('#current-dropdown-version-toggle').text('Release ' + el.label);
          vmenu.find('.dropdown-menu').append(
            '<a href="' + el.url + '" class="dropdown-menu-item active">Release ' + el.label + '</a>'
          );
        } else {
          vmenu.find('.dropdown-menu').append(
            '<a href="' + el.url + '" class="dropdown-menu-item">Release ' + el.label + '</a>'
          );
        }
      }
    })
    .fail(function (resp) {
      console.error(resp.statusText);
      $('#dropdownVersionButton').hide();
    })
    .always(function (resp) {
      console.log(resp);
    });


    // apply Highlight js
    hljs.initHighlightingOnLoad();

    //Toggle side navigation
    $('.sidebar-toggle').click(function(){
      $('body').toggleClass('open');
    });
    
    $('.cover').click(function(){
      $('body').removeClass('open');
    });

    // Set current Guide on navigator guides dropdown
    $('#current-dropdown-toggle').text($('.current-app').text());

    // scroll to the top of the page
    $('.to-the-top').click(function(e) {
      e.preventDefault();
      $('body, html').animate({scrollTop: 0}, 500, 'swing');
    });

    // CLIPBOARD
    // copy current window location and add anchor with data-clipboard-text
    var clipboard = new Clipboard('.bookmark', {
      text: function (trigger) {
        return window.location.href.split('#')[0] + trigger.getAttribute('data-clipboard-text');
      }
    });
    // display clipboard success event
    clipboard.on('success', function (e) {
      $(e.trigger).addClass('copied');
      setTimeout(function () {
        $(e.trigger).removeClass('copied');
      }, 1500);
    });


    // set zomm in every image without '.nozoom' class
    $('img:not(.no-zoom)').each(function(){
      if($(this).closest('table').length < 1){
        $(this).addClass('img-responsive').attr('data-action', 'zoom');
      }
    });

    // wrap tables with div '.table-responsive' for small viewports
    $('table').each(function(){
      var $this = $(this);
      if( $this.closest('.table-responsive').length < 1 ){
        $this.wrap( "<div class='table-responsive'></div>" );
      }
    });


    // Filter for device list
    if($('.device-list').length){

      $('.device-list .device-slot').each(function(){
        var $this = $(this);
        $this.data('text', $this.text().toLowerCase());
        $this.data('$l', $this.parent());
      });
      
      $('#filter-devices').on('keyup input', function(k){
        var $str = $(this).val().toLowerCase();
        //$str.length ? $titles.hide() : $titles.show();
        $('.device-list .device-slot').each(function(){
          var $this = $(this);
          if( $this.data('text').indexOf($str) > -1){
            $this.show();
          }else{
            $this.hide();
          }
        })
      });
    }
      
  }
  return {
    init: initializer
  };

})(jQuery);

main.init();
