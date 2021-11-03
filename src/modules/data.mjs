import * as Selector from './abstracts/selectors.mjs';
import * as Variable from './abstracts/variables.mjs';
import * as Utils from './abstracts/utilities.mjs';

export const apiUrl = () => {
  const gen = Selector.gender.value;
  let nat = Selector.nationality.value;
  nat === '' ? nat = Variable.randomNationality : '';

  return `https://randomuser.me/api/?results=${Variable.numberOfEmployees}&inc=${Variable.dataKeys.join()}&nat=${nat}&gender=${gen}&noinfo`;
};

const getData = async function(url) {
  const response = await fetch(url);

  // Make sure response is ok (200-299)
  if (response.status >= 200 && response.status <= 299) {
    const employees = await response.json();

    if (employees.results?.length > 0) {
      // Dynamically load js modules
      import('./employees.mjs').then(({ default: Employees }) => {
        Employees.init(employees.results);
      });

      import('./search.mjs').then(( Search ) => {
        Search.init();
      });

      import('./cards.mjs').then(( Cards ) => {
        Cards.init();
      });
    } else {
      console.error(`Error: employee.results = ${employee.results}`);
    }
  } else {
    console.error(`error response was: ${response.status} ${response.statusText} for ${Variable.apiUrl}`);
  }
}

const selectMenuEvents = () => {
  Selector.nationality.addEventListener('change', (evt) => {
    Selector.searchField.value = '';
    Utils.removeNoResultsMessage();
    getData(apiUrl()).then()
  });

  Selector.gender.addEventListener('change', (evt) => {
    Selector.searchField.value = '';
    Utils.removeNoResultsMessage();
    getData(apiUrl()).then()
  });
}

export const init = () => {
  getData(apiUrl());
  selectMenuEvents();
}

