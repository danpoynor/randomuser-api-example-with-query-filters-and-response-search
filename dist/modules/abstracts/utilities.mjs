// Wait for global variable containing employee data to exist
export const waitFor = (variable, callback) => {
  const interval = setInterval(function() {
    const v = `window.${variable}`;
    if (v) {
      clearInterval(interval);
      callback();
    }
  }, 100);
}

export const removeCards = () => {
  document.querySelector('main > section ul')?.remove();
}

export const removeNoResultsMessage = () => {
  document.querySelector('main > section > p')?.remove();
}

export const resetSavedEmployees = () => {
  window.AwesomeEmployees = [];
};

export const isShowingApiResults = () => {
  return window.AwesomeEmployees.search_results === undefined || window.AwesomeEmployees.search_results.length === 0;
}

export const getEmployeeIndex = (employeeEmail) => {
  const employeeList = isShowingApiResults() ? window.AwesomeEmployees.api_results : window.AwesomeEmployees.search_results;
  return employeeList.findIndex(employee => employee.email === employeeEmail);
}


