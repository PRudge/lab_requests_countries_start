const Countries = require('./models/countries.js');


document.addEventListener('DOMContentLoaded', () => {
  const countries = new Countries();
  countries.getData();

  
});
