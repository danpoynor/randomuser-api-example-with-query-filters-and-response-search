import * as Template from './abstracts/templates.mjs';
import * as Utils from './abstracts/utilities.mjs';

// NOTE: To avoid using a template literal each time an employees name, address, or dob is needed
// (such for the card and again for dialog), I'm re-assembling the data using template literals
// into a new object which is then stored globally.

export default class Employee {
  constructor(picture, full_name, emailAddress, city, address, cell, birthdate, nat) {
    this.picture = picture;
    this.full_name = full_name;
    this.email = emailAddress;
    this.city = city;
    this.address = address;
    this.cell = cell;
    this.birthdate = birthdate;
    this.nat = nat;
  }

  static init = employees => {
    let composedEmployees = [];
    employees.forEach(employee => {
      const newEmployee = new Employee(employee.picture.large, Template.employeeName(employee), employee.email, employee.location.city, Template.employeeAddress(employee), employee.cell, Template.employeeBirthdate(employee), employee.nat);
      composedEmployees.push(newEmployee);
    });

    Utils.resetSavedEmployees();
    window.AwesomeEmployees.api_results = composedEmployees;
  };
}
