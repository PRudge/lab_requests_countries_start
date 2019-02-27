const PubSub = require('../helpers/pub_sub.js');

const InfoCountry = function(container){
  this.container = container;
  this.detail = null;
}

InfoCountry.prototype.bindEvents = function() {
  PubSub.subscribe('InfoCountry: country', (event) => {
   const countryDets = event.detail;
   console.log(`countryDets: ${countryDets}`);
   this.outputDetails(countryDets);
 });
};

InfoCountry.prototype.outputDetails = function(dets){
  this.container.innerHTML = '';
  this.createCountryName(dets.name);
  this.createCountryImage(dets.flag);
  this.createCountryRegion(dets.region);
  this.createCountryLanguages(dets.languages);

}

InfoCountry.prototype.createCountryName = function(countryName){
  const name = document.createElement('h2');
  name.textContent = countryName;
  this.container.appendChild(name);
}

InfoCountry.prototype.createCountryImage = function(countryFlag){
  const img = document.createElement('img');
  img.src = countryFlag;
  this.container.appendChild(img);
}

InfoCountry.prototype.createCountryRegion = function(countryRegion){
  const region = document.createElement('h3');
  region.textContent = "Region:";
  this.container.appendChild(region);

  const regionDets = document.createElement('p');
  regionDets.textContent = countryRegion;
  this.container.appendChild(regionDets);
}

InfoCountry.prototype.createCountryLanguages = function(languagesArr){
  const languages = document.createElement('h3');
  languages.textContent = `Languages:`;
  this.container.appendChild(languages);

  const languageListItem = document.createElement('ul');

  languagesArr.forEach((language) => {
    this.addLanguage(language.name, languageListItem);
  });

  this.container.appendChild(languageListItem);
}

InfoCountry.prototype.addLanguage = function(languageName, languageListItem) {
  const language = document.createElement('li');
  language.textContent = languageName;
  languageListItem.appendChild(language);
}


module.exports = InfoCountry;
