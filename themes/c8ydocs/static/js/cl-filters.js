function concatFilters(obj) {
  var arrays = Object.values(obj).map(value => value.split(','));
  var result = arrays.reduce((a, b) => a.flatMap(x => b.map(y => x + y)));
  return result.join(', ');
}

function checkPa(pas) {
  let comps = document.querySelectorAll('[data-filter-group = "component"] [data-pa]');
  let areas = [];
  pas.forEach(pa => {
    areas.push(pa.substr(13));
  });
  comps.forEach(comp => {
    if (areas.length) {
      let cpa = comp.getAttribute('data-pa');
      if (areas.includes(cpa)) {
        comp.removeAttribute('disabled');
      } else {
        comp.setAttribute('disabled', 'disabled');
      }
    } else {
      comp.removeAttribute('disabled');
    }
  });
}

function clearAllFilters() {
  let filters = document.querySelectorAll('.filter-btn');
  filters.forEach(filter => {
    if (filter.checked) {
      filter.click();
    }
  });
}

function applyCheckbox(name) {
  const filter = document.querySelector('[name="' + name + '"]');
  if (filter && !filter.checked) {
    filter.click();
  }
}


window.onload = (event)=>{
  $list = $('.change-logs--list > article > .isotope').isotope({
    itemSelector: '.page-section:not(.top)',
    layoutMode: 'vertical',
    transitionDuration: 0
  });
  let $empty = document.getElementById('emptystate');
  $list.on( 'arrangeComplete',
    function (event, filteredItems) {
      if (filteredItems.length === 0) {
        $empty.style.display = "block";
      } else {
        let d = 'block';
        $empty.classList.add('no-results');
        for (let index = 0; index < filteredItems.length; index++) {
          const element = filteredItems[index].element;
          if (!element.classList.contains('change-log__date')) {
            d = 'none';
            $empty.classList.remove('no-results');
            break;
          }
        }

        $empty.style.display = d;
      }
    }
  );
  const searchClear = document.getElementById('clearFilters');
  searchClear.addEventListener('click', clearAllFilters);
  let filters = {};
  const fieldsetGroups = document.querySelectorAll('.filter-fieldset.c8y-fieldset');
  const dates = document.querySelectorAll('.change-log__date');
  fieldsetGroups.forEach(fieldsetGroup =>{
    let filterGroup = fieldsetGroup.getAttribute('data-filter-group');
    let filterGroupFilters = [];
    fieldsetGroup.addEventListener('change', (e) =>{
      if(e.target.checked){
        filterGroupFilters.push('.' + e.target.name);
      }else{
        filterGroupFilters = filterGroupFilters.filter(item => item !== '.' + e.target.name);
      }
      //disable components when their product area is not selected
      if (filterGroup === 'productarea') {
        checkPa(filterGroupFilters);
      }

      let items = filterGroupFilters.length ? filterGroupFilters.join(',') : '';
      filters[filterGroup] = items;
      let filterValue = concatFilters(filters);
      $list.isotope({ filter: filterValue });

      dates.forEach(date => {
        let el = document.querySelector('[data-refid="' + date.id + '"]');
        if (date.style.display == "none") {
          el.style.display = "none";
        }else{
          el.style.display = '';
        }
      })
    });
  });

  // filter from the metadata
  const tagBtns = document.querySelectorAll('[data-tag]');
  tagBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      applyCheckbox(btn.getAttribute('data-tag'));
    });
  });

  let startHere = document.querySelector('[name="change-type-feature"]');
  if (startHere) startHere.click();

}
