function concatValues( obj ) {
  var value = '';
  for ( var prop in obj ) {
    value += obj[ prop ];
  }
  return value;
}

window.onload = (event)=>{
  $list = $('.change-logs--list > article > .isotope').isotope({
    itemSelector: '.page-section',
    layoutMode: 'vertical',
    transitionDuration: 0
  });
  let filters = {};
  const fieldsetGroups = document.querySelectorAll('.filter-fieldset.c8y-fieldset');
  const dates = document.querySelectorAll('[data-id]');
  fieldsetGroups.forEach(fieldsetGroup =>{
    let filterGroup = fieldsetGroup.getAttribute('data-filter-group');
    let filterGroupFilters = [];
    fieldsetGroup.addEventListener('change', (e) =>{
      if(e.target.checked){
        filterGroupFilters.push('.' + e.target.name);
      }else{
        filterGroupFilters = filterGroupFilters.filter(item => item !== '.' + e.target.name);
      }
      let items = filterGroupFilters.length ? filterGroupFilters.join(',') : '';
      filters[filterGroup] = items;
      // console.log('filters', filters);
      let filterValue = concatValues(filters);
      // console.log('filterValue', filterValue);
      $list.isotope({ filter: filterValue });

      dates.forEach(date => {
        let el = document.querySelector('[data-refid="' + date.dataset.id + '"]');
        console.log(el);
        if (date.style.display == "none") {
          el.style.display = "none";
        }else{
          el.style.display = '';
        }
      })
    });
  });

}
