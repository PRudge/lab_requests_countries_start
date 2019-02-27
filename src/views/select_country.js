const PubSub = require('../helpers/pub_sub.js');

const SelectCountry = function(element){
  this.element = element;
};

SelectCountry.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:countries-loaded', (event) => {
    const countryArr = event.detail;
    this.createDropDown(countryArr);
  });

  this.element.addEventListener("change", (event) => {
    selectedIndex = event.target.value;
    PubSub.publish('SelectCountry:change', selectedIndex);
  });
};

SelectCountry.prototype.createDropDown = function(countryArr){
  countryArr.forEach((country, index) => {
    const option = document.createElement('option');
    option.textContent = country.name;
    option.value = index;
    this.element.appendChild(option);
  });
}

module.exports = SelectCountry;
