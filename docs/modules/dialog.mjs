import * as Template from './abstracts/templates.mjs';
import * as Utils from './abstracts/utilities.mjs';
import * as DialogCarousel from './dialogcarousel.mjs';
import * as Variable from './abstracts/variables.mjs';

const showDialog = resultsLength => {
  const dialog = document.querySelector('dialog');
  if (typeof dialog.showModal === "function") {
    // NOTE: .showModal() *must* be used to make the ::backdrop pseudo-element appear
    dialog.showModal();
    resultsLength > 1 ? DialogCarousel.init(dialog) : dialog.querySelector('nav').remove();
  } else {
    console.error("The `<dialog>` API is not supported by this browser.");
  }

  dialog.addEventListener('close', () => {
    dialog.remove();
  });
}

export const init = employee => {
  const initialIndex = Utils.getEmployeeIndex(employee.email) + 1;
  const resultsLength = Utils.isShowingApiResults() ? Variable.numberOfEmployees : window.AwesomeEmployees.search_results.length;
  // Create global vars for dialog templates to use
  window.AwesomeEmployees.carousel = [];
  window.AwesomeEmployees.carousel.initialIndex = initialIndex;
  window.AwesomeEmployees.carousel.resultsLength = resultsLength;

  // If a dialog was previously closed without being removed, remove it from the DOM
  const existingDialog = document.getElementsByTagName('dialog');
  if (existingDialog.length) {
    existingDialog[0].remove();
  }

  // Create new dialog with employee details, if enough results show the carousel nav, populate counter
  const dialog = document.createElement('dialog');
  dialog.innerHTML =  Template.dialog(employee);
  document.body.appendChild(dialog);

  showDialog(resultsLength);
}

