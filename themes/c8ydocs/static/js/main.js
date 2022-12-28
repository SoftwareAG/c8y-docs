var main = (function ($) {
  function initializer() {

    //Load releases menu
    var json = $.getJSON({ 'url': "//cumulocity.com/guides/releases.json", 'async': false })
      .done(function (json) {
        //json = JSON.parse(json.responseText);
        var urls = json.releases;
        var vmenu = $('.dropdown.version');
        var loc = window.location;
        var active = false;
        vmenu.find('.dropdown-menu').html('');
        $('#current-dropdown-version-toggle').text('');

        vs = []
        for (var i = 0; i < urls.length; i++) {
          vs.push(urls[i].label);
        }

        rest = loc.href.split("/guides/")[1];
        v = rest.split("/")[0];

        prefix = loc.href.split("/guides/")[0] + "/guides/";
        r = rest.split("/");

        if (r[0].split(".").length > 1) {
          r.shift();
        } else {
          v = urls[0].label;
        }
        suffix = r.join("/");

        for (var index = 0; index < urls.length; index++) {
          var el = urls[index];
          var href_url = el.url.endsWith('/') ? el.url + suffix : el.url + '/' + suffix;
          if (loc.href.includes(el.label)) {
            active = true;
            $('#current-dropdown-version-toggle').text('Release ' + el.label);
            vmenu.find('.dropdown-menu').append(
              '<a href="' + href_url + '" class="dropdown-menu-item active">' + el.label + '</a>'
            );
          } else {
            vmenu.find('.dropdown-menu').append(
              '<a href="' + href_url + '" class="dropdown-menu-item">' + el.label + '</a>'
            );
          }
        }

        if (true) {
          offset = 45;
          $('<div/>', {
            id: 'construction-banner',
            style: 'position: fixed; top: 0; left: 0; width: 100%; background-color: #ff0000; height: ' + offset + 'px; padding: 10px 5px 5px 5px; z-index: 50;'
          }).prependTo('body');
          $('<p style="text-align: center; vertical-align: center;">This page is a copy of the documentation of the previous release and exists for technical reasons. It does not yet include any new content.</p>').appendTo('#construction-banner');
          $('.main-top-bar').css('top', offset);
          $('.main-nav.navbar').css('top', offset);
          $('.dropdown.version').css('top', (offset + 10));
        }

        if (vs.indexOf(v) < 0) {
          active = true;
          $('#current-dropdown-version-toggle').text('Release ' + v);
        }

        if (!active) {
          var ind = 0;
          for (var i = 0; i < urls.length; i++) {
            var el = urls[i];
            if (el.url == "https://cumulocity.com/guides/") {
              ind = i;
              break;
            }
          }
          nthChild = vmenu.find('.dropdown-menu').children().eq(ind);
          nthChild.addClass('active');
          $('#current-dropdown-version-toggle').text('Release '+ nthChild.text());
        }
      })
      .fail(function (resp) {
        console.error(resp.statusText);
        $('#dropdownVersionButton').hide();
      });


    // apply Highlight js
    hljs.initHighlightingOnLoad();

    //Toggle side navigation
    $('.sidebar-toggle').click(function(){
      $('body').toggleClass('open');
    });

    $('.cover, .list-group-item').click(function(){
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

    // Fix for code highlight
    $(".highlight pre code").addClass("hljs");
  }
  return {
    init: initializer
  };

})(jQuery);

main.init();
