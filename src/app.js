const Countries = require('./models/countries.js');
const SelectCountry = require('./views/select_country.js');
const InfoCountry = require('./views/info_country.js');


document.addEventListener('DOMContentLoaded', () => {

  const selectElement = document.querySelector("#countries");
  const selectCountry = new SelectCountry(selectElement);
  selectCountry.bindEvents();

  const infoElement = document.querySelector("#country");
  const infoCountry = new InfoCountry(infoElement);
  infoCountry.bindEvents();


  const countries = new Countries();
  countries.getData();

  countries.bindEvents();

});
