import * as Template from './abstracts/templates.mjs';
import * as Utils from './abstracts/utilities.mjs';

const updateDialog = (newIndex, newEmployee, listLength) => {
  const dialogHeader = document.querySelector('dialog small');
  const dialogFigure = document.querySelector('dialog figure');
  const dialogFooter = document.querySelector('dialog > ol');
  dialogHeader.outerHTML = Template.dialogHeader(newIndex + 1);
  dialogFigure.outerHTML = Template.dialogFigure(newEmployee);
  dialogFooter.outerHTML = Template.dialogFooter(newIndex);
};

const getNewEmployee = (currentEmployeeEmail, direction) => {
  const employeeList = Utils.isShowingApiResults() ? window.AwesomeEmployees.api_results : window.AwesomeEmployees.search_results;
  const currentEmployeeIndex = Utils.getEmployeeIndex(currentEmployeeEmail);
  let newIndex = 0;

  if (direction === 'previous') {
    newIndex = currentEmployeeIndex - 1;
    if (newIndex < 0) {
      newIndex = employeeList.length - 1;
    }
  } else if (direction === 'next') {
    newIndex = currentEmployeeIndex + 1;
    if (newIndex > employeeList.length - 1) {
      newIndex = 0;
    }
  }

  const newEmployee = employeeList[newIndex];
  updateDialog(newIndex, newEmployee);
};

export const init = dialog => {
  dialog.addEventListener('click', (evt) => {
    const nav = evt.target.closest('nav');
    const button = evt.target.closest('button');
    if (!nav || !button) return;
    nav.dataset.state = 'active';

    const currentEmployeeEmail = document.querySelector('dialog p:first-of-type').innerHTML;
    const direction = button.getAttribute('title').toLowerCase();
    getNewEmployee(currentEmployeeEmail, direction);
  });

  dialog.addEventListener('keyup', evt => {
    const currentEmployeeEmail = document.querySelector('dialog p:first-of-type').innerHTML;

    if (evt.key === 'ArrowLeft') {
      getNewEmployee(currentEmployeeEmail, 'previous');
    } else if (evt.key === 'ArrowRight') {
      getNewEmployee(currentEmployeeEmail, 'next');
    }
  });
}
