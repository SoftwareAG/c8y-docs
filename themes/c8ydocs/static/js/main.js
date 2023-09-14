var main = (function ($) {
  function initializer() {

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



    // scroll to the top of the page
    $('.to-the-top').click(function (e) {
      e.preventDefault();
      $('body, html').animate({ scrollTop: 0 }, 500, 'swing');
    });

    //==========================================
    // CLIPBOARD
    //==========================================

    // scroll to the copied url
    function scrollToCopied(where) {
      let top = where.offsetTop - 103;
      $('body, html').animate({ scrollTop: top}, 50, 'swing');
    }

    // copy current window location and add anchor with data-clipboard-text
    var clipboard = new Clipboard('.bookmark', {
      text: function (trigger) {
        return window.location.href.split('#')[0] + trigger.getAttribute('data-clipboard-text');
      }
    });
    // display clipboard success
    clipboard.on('success', function (e) {
      scrollToCopied(e.trigger); 
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
    
    setTimeout(function () {
      $('body').addClass('loaded');
      window.dispatchEvent(new CustomEvent('scroll'));
    }, 100);
  
  
  }
  return {
    init: initializer
  };

})(jQuery);

main.init();

// Builds the TOC by retrieving the H3 in the page
function buildToc() {
  let articles = document.querySelectorAll('article.page-section');

  articles.forEach(article => {
    let h3s = article.querySelectorAll('h3');
    let articleTitle = article.querySelector('h2');
    let tocLinks = '';
    
    if (h3s.length > 1) {
      if (articleTitle) {
        tocLinks += `<h5 class="text-regular text-muted">${articleTitle.textContent}</h5>`;
      }
      h3s.forEach(h3 => {
        if (h3.id && h3.textContent.length) {
          tocLinks += `<div class="list-group-item"><a href="#${h3.id}" title="${h3.textContent}">${h3.textContent}</a></div>`;
        }
      });

      if (tocLinks.length) {
        const existingTocContainer = article.querySelector('.list-group');
        
        if (!existingTocContainer) {
          const tocContainer = document.createElement('div');
          tocContainer.classList.add('toc-container'); 
          
          const listGroup = document.createElement('div');
          listGroup.classList.add('list-group');
          listGroup.classList.add('toc');
          listGroup.innerHTML = tocLinks;
          tocContainer.appendChild(listGroup);
          article.appendChild(tocContainer);
        }
      }
    }
  });

  const links = document.querySelectorAll('.toc a');

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
      const windowHeight = window.innerHeight;
    
      // Calculate the top threshold for activation (top third of the viewport)
      const topThreshold = windowHeight / 3;
    
      // Check if the element's top position is within the top threshold
      const elementTopInTopThird = rect.top <= topThreshold;
    
      if (elementTopInTopThird) {
        let tempActive = document.querySelectorAll('.toc .active');
        tempActive.forEach(temp => {
          temp.classList.remove('active');
        });
        link.classList.add('active');
      } else {
        // If the element is not within the top third, remove the active class
        link.classList.remove('active');
      }
    });
    
    

  });
}

// Call the buildToc function to generate and insert TOCs for all articles
buildToc();


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
