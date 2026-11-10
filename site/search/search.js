'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const root = new URL('../', window.location.href);
  const error = document.getElementById('search-error');
  try {
    if (typeof PagefindUI !== 'function') throw new Error('Pagefind UI did not load');
    new PagefindUI({
      element: '#search',
      baseUrl: root.pathname,
      bundlePath: new URL('pagefind/', root).pathname,
      showImages: false,
      showSubResults: false,
      pageSize: 10,
      openFilters: ['Bereich'],
    });
  } catch (failure) {
    error.hidden = false;
    console.error('Search could not start:', failure);
  }
});
