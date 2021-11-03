import * as Cards from './cards.mjs';
import * as Selector from './abstracts/selectors.mjs';
import * as Template from './abstracts/templates.mjs';
import * as Utils from './abstracts/utilities.mjs';

const presentSearchResults = foundEmployees => {
  if (foundEmployees.length !== 0) {
    Cards.makeCards(foundEmployees);
  } else {
    Utils.removeCards();
    const noResults = document.createElement('p');
    noResults.innerHTML = Template.noResults();
    Selector.cardContainer.appendChild(noResults);
  }
};

const searchAwesomeEmployees = searchString => {
  // Only update results on English characters or spaces
  const regex = /^[a-z ]*$/;
  if (regex.test(searchString)) {
    const foundEmployees = window.AwesomeEmployees.api_results.filter(employee => {
      return employee.full_name.toLowerCase().includes(searchString);
    });

    presentSearchResults(foundEmployees);
    // Create global var of found employees for dialog carousel
    window.AwesomeEmployees.search_results = foundEmployees;
  }
};

export const  init = () => {
  Selector.searchField.addEventListener('input', (evt) => {
    const searchString = evt.target.value.toLowerCase();
    Utils.removeNoResultsMessage();

    if (searchString !== '') {
      searchAwesomeEmployees(searchString);
    } else {
      window.AwesomeEmployees.search_results = [];
      Cards.makeCards(window.AwesomeEmployees.api_results);
    }
  });
}
