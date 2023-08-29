var main = (function ($) {
  function initializer() {

    //Load releases menu
    var json = $.getJSON({ 'url': "//cumulocity.com/docs/releases.json", 'async': false })
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
          // offset = 45;
          // $('<div/>', {
          //   id: 'preview-banner',
          //   style: 'position: fixed; top: 0; left: 0; width: 100%; background-color: #fff794; height: ' + offset + 'px; padding: 10px 5px 5px 5px; z-index: 50;'
          // }).prependTo('body');
          // $('<p style="text-align: center; vertical-align: center;">This is a preview of the documentation for the Cumulocity IoT ' + v + ' release that will soon be publicly available.</p>').appendTo('#preview-banner');
          // $('.main-top-bar').css('top', offset);
          // $('.main-nav.navbar').css('top', offset);
          // $('.dropdown.version').css('top', (offset + 10));
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
          $('#current-dropdown-version-toggle').text('Release ' + nthChild.text());
        }
      })
      .fail(function (resp) {
        console.error(resp.statusText);
        // $('#dropdownVersionButton').hide();
      });


    // apply Highlight js
    hljs.initHighlightingOnLoad();

    //Toggle side navigation
    $('.sidebar-toggle').click(function () {
      $('body').toggleClass('open');
    });

    $('.cover, .list-group-item').click(function () {
      $('body').removeClass('open');
    });

    // Set current Guide on navigator guides dropdown
    $('#current-dropdown-toggle').html($('.current-app').html()).attr('title', $('.current-app').text());
    // console.log('current app: ', $('.current-app').html());



    // scroll to the top of the page
    $('.to-the-top').click(function (e) {
      e.preventDefault();
      $('body, html').animate({ scrollTop: 0 }, 500, 'swing');
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

       // Fix for code highlight
    $(".highlight pre code").addClass("hljs");

    // copy code to clipboard
    clipboardCode();

    // set Table of contents
    buildToc();

    // set Breadcrumbs
    updateBreadcrumbs();

    // set zomm in every image without '.nozoom' class
    $('img:not(.no-zoom)').each(function () {
      if ($(this).closest('table').length < 1) {
        $(this).addClass('img-responsive').attr('data-action', 'zoom');
      }
    });

    // wrap tables with div '.table-responsive' for small viewports
    $('table').each(function () {
      var $this = $(this);
      if ($this.closest('.table-responsive').length < 1) {
        $this.wrap("<div class='table-responsive'></div>");
      }
    });

  }
  return {
    init: initializer
  };

})(jQuery);

main.init();

// Builds the TOC by retrieving the H3 in the page
function buildToc() {
  let h3s = document.getElementsByTagName('h3');
  let tocLinks = '';
  let currenth2 = '';
  if (h3s.length > 1) {
    for (let index = 0; index < h3s.length; index++) {
      if ($(h3s[index]).attr('id') && $(h3s[index]).text().length) {
        let activeh2 = $(h3s[index]).closest('article').attr('id');
        if (activeh2 != currenth2) {
          tocLinks += tocLinks.length === 0 ? '<div class="list-group" data-toc="' + activeh2 + '"><p class="text-medium">' + $('#' + activeh2).find('h2').text() + '</p>' : '</div><div class="list-group" data-toc="' + activeh2 + '"><p class="text-medium">' + $('#' + activeh2).find('h2').text() + '</p>';
          currenth2 = activeh2;
        }
        tocLinks += '<div class="list-group-item"><a href="#' + $(h3s[index]).attr('id') + '" title="' + $(h3s[index]).text() + '">' + $(h3s[index]).text() + '</a></div>';
      }
    }
  }
  if (tocLinks.length) {
    tocLinks += '</div>';
    $('#toc').html(tocLinks);
    let count = $('#toc').find('.list-group');
    $(count[0]).addClass('current');
  } else {
    $('#toc').html('');
  }

  const links = document.querySelectorAll('.toc a');
  let lastLinkId = null;

  links.forEach(link => {
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    link.addEventListener('click', event => {
      const tempActive = document.querySelectorAll('.toc .active');
      tempActive.forEach(temp => {
        temp.classList.remove('active');
      });
      link.classList.add('active');
    });

    if (!targetElement) {
      console.error(`Header element not found with id '${targetId}'`);
      return;
    }

    window.addEventListener('scroll', () => {
      const rect = targetElement.getBoundingClientRect();
      const halfViewportHeight = window.innerHeight / 2;

      let nextElement = targetElement.nextElementSibling;
      while (nextElement) {
        if (nextElement.tagName === 'H2' || (nextElement.tagName === 'ARTICLE' && nextElement !== targetElement)) {
          break;
        }
        rect.bottom = Math.max(rect.bottom, nextElement.getBoundingClientRect().bottom);
        nextElement = nextElement.nextElementSibling;
      }

      if (rect.top <= halfViewportHeight && rect.bottom >= halfViewportHeight) {
        const currentLinkId = link.getAttribute('href').substring(1);
        if (currentLinkId !== lastLinkId) {

          let tempActive = document.querySelectorAll('.toc .active');
          tempActive.forEach(temp => {
            temp.classList.remove('active');
          });

          link.classList.add('active');
          lastLinkId = currentLinkId;
        }
      }
    });

  });
  // Hide and show the Toc sections according the current section
  window.addEventListener('scroll', () => {
    let activeNav = document.querySelectorAll('.nav-sections a.active');
    let tocSections = document.querySelectorAll('.toc [data-toc]');
    let activeSec;
    activeNav.forEach(sec => {
      let secPath = sec.getAttribute('href').split('/');
      if (secPath[0].substring(0, 4) === 'http') {
        activeSec = secPath[secPath.length - 2];
      } else {
        activeSec = sec.getAttribute('href').substring(1);
      }
      tocSections.forEach(toc => {
        if (toc.getAttribute('data-toc') === activeSec) {
          toc.classList.add('current');
        } else {
          toc.classList.remove('current');
        }
      });
    });
  });
}


// Adds the section to the breadcrumbs

function updateBreadcrumbs() {
  const breadcrumb = $('#breadcrumbs span:nth-child(1)');
  const section = $('#sections-selection').find('.active');
  const breadsection = '<span class="added"><a href="' + section.attr('href') + '">' + section.text() + '</a><i class="dlt-c8y-icon-forward"></i></span>';
  // only adds if we are not in a section list
  if (!$('.breadcrumbs-container').length) {
    breadcrumb.after(breadsection);
  }
}

// Copy code to clipboard
function clipboardCode() {
  const codes = document.querySelectorAll('pre > code');
  codes.forEach((code, index) => {
    let icon = document.createElement('i');
    icon.classList.add('dlt-c8y-icon-clipboard');
    let btn = document.createElement('button');
    btn.innerText = 'Copy to clipboard';
    btn.classList.add('btn-copy-code');
    btn.setAttribute('data-clipboard-target', '#code' + index);
    btn.prepend(icon);
    let copybar = document.createElement('div');
    copybar.classList.add('d-flex');
    copybar.prepend(btn);
    code.setAttribute('id', 'code' + index);
    code.parentElement.classList.add('c8y-pre');
    code.parentElement.prepend(copybar);

  });

  let copyCode = new Clipboard('.btn-copy-code');

  // display clipboard success event
  copyCode.on('success', function (e) {
    $(e.trigger).addClass('copied');
    setTimeout(function () {
      $(e.trigger).removeClass('copied');
    }, 1500);
  });
}
