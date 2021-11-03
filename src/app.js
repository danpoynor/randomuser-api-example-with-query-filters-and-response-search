import * as Data from './modules/data.mjs';
import * as Selector from './modules/abstracts/selectors.mjs';

document.addEventListener('DOMContentLoaded', () => {
  if (Selector.cardContainer && Selector.searchField && Selector.nationality && Selector.gender) {
    Data.init();
  } else {
    console.error('A required HTML element is missing');
  }
})
