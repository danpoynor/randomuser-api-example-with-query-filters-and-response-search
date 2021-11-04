import * as Selector from './abstracts/selectors.mjs';
import * as Template from './abstracts/templates.mjs';
import * as Utils from './abstracts/utilities.mjs';

const cardEvents = cardList => {
  // Test browser support for Dialog element exists
  // before dynamically loading dialog.js module
  if (window.HTMLDialogElement) {

    import('./dialog.mjs').then(( Dialog ) => {
      cardList.dataset.state = 'active';
      cardList.addEventListener('click', (evt) => {

        const card = evt.target.closest('figure');
        if (!card) return;
        evt.stopPropagation();

        // Here I'm using the employees `email` as a unique identifier (pseudo `id`)
        const employeeEmail = card.querySelector('p:first-of-type').textContent;

        // Check if dialog will show employees from the stored api response or stored search results
        let employeeList = Utils.isShowingApiResults() ? window.AwesomeEmployees.api_results : window.AwesomeEmployees.search_results;

        Dialog.init(employeeList.filter((employee) => employee.email === employeeEmail)[0]);
      });
    });

  } else {
    console.error(`Your browser does not support the HTML <dialog> element. Time to update!`);
  }
}

// AwesomeEmployees arg could be filteredEmployees, .api_results, or .search_results
export const makeCards = AwesomeEmployees => {
  Utils.removeCards();
  // Creating <ul> to hold cards and adding event listener to it which delegates to <li> elements.
  // Before replacing cards, to ensure event listener isn't added again, use remove() on the <ul> and recreate.
  const cardList = document.createElement('ul');
  Selector.cardContainer.appendChild(cardList);
  AwesomeEmployees.map((employee) => {
    const card = document.createElement('li');
    card.innerHTML = Template.cardFigure(employee);
    cardList.appendChild(card);
  });

  cardEvents(cardList);
};

export const init = () => {
  Utils.waitFor('AwesomeEmployees.api_results', () => {
    makeCards(AwesomeEmployees.api_results);
  });
};
