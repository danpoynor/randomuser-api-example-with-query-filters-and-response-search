export const employeeName = ({ name }) => {
  return `${name.first} ${name.last}`;
};

export const employeeAddress = ({ location }) => {
  return `${location.street.number} ${location.street.name}<br>${location.city}, ${location.state}<br>${location.postcode}`;
};

export const employeeBirthdate = ({ dob }) => {
  const dateObj = new Date(dob.date);
  return `${dateObj.getMonth() + 1}/${dateObj.getDate()}/${dateObj.getFullYear()}`;
};

export const noResults = () => {
  return `No results found`;
};

export const cardFigure = ({ picture, full_name, email, city }) => {
  return `<figure>
            <img src='${picture}' alt='${full_name}' width='128' height='128' />
            <figcaption>
              <h3>${full_name}</h3>
              <p>${email}</p>
              <p>${city}</p>
            </figcaption>
          </figure>`;
};

export const dialogHeader = newIndex => {
  return `<small>Search result ${newIndex} of ${window.AwesomeEmployees.carousel.resultsLength}<br>You can use arrow keys to navigate.</small>`;
};

export const dialogFigure = ({ picture, full_name, email, city, cell, address, birthdate }) => {
  return `<figure>
            <img class='avatar' src="${picture}" width="128" height='128' alt='' />
            <figcation>
              <h4 class="name">${full_name}</h4>
              <p class="email">${email}</p>
              <p class="address">${city}</p>
              <hr />
              <p>${cell}</p>
              <p class="address">${address}</p>
              <p>Birthday: ${birthdate}</p>
            </figcation>
          </figure>`;
};

export const dialogFooter = index => {
  const resultsLength = window.AwesomeEmployees.carousel.resultsLength;
  const listItems = [];
  for (let i = 0; i < resultsLength; i++) {
    listItems.push(`<li class="${i === index ? 'active' : ''}">${i + 1}</li>`);
  }
  return resultsLength > 1 ? `<ol>${listItems.join('')}</ol>` : '';
};

export const dialog = ({ picture, full_name, email, city, cell, address, birthdate }) => {
  return `<form method='dialog'><button title='Close dialog'><svg viewBox="0 0 10 10" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M9.286,2.267a.733.733,0,0,0,0-1.035L8.768.714a.733.733,0,0,0-1.035,0L5,3.447,2.267.714a.733.733,0,0,0-1.035,0l-.518.518a.733.733,0,0,0,0,1.035L3.447,5,.714,7.733a.733.733,0,0,0,0,1.035l.518.518a.733.733,0,0,0,1.035,0L5,6.553,7.733,9.286a.733.733,0,0,0,1.035,0l.518-.518a.733.733,0,0,0,0-1.035L6.553,5Z" stroke-linecap="round" stroke-linejoin="round"/></svg></button></form>
          ${dialogHeader(window.AwesomeEmployees.carousel.initialIndex)}
          ${dialogFigure({ picture, full_name, email, city, cell, address, birthdate })}
          ${dialogFooter(window.AwesomeEmployees.carousel.initialIndex - 1)}
          <nav><button title='Previous'><svg viewBox="0 0 10 10" height="72" width="72" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 7L3.75 5 5.75 3" stroke-linecap="round" stroke-linejoin="round" /></svg></button><button title='Next'><svg viewBox="0 0 10 10" height="72" width="72" xmlns="http://www.w3.org/2000/svg"><path d="M4.25 3L6.25 5 4.25 7" stroke-linecap="round" stroke-linejoin="round" /></svg></button></nav>`;
};
