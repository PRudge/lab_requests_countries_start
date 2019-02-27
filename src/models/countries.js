const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper');

const Countries = function () {
  this.countryInfo = null;
}

Countries.prototype.getData = function () {

  const request = new RequestHelper('https://restcountries.eu/rest/v2/all');

  request.get( (data) => {
    console.log(data);
    this.countryInfo = data;
    PubSub.publish('Countries:countries-loaded', this.countryInfo);
  });

}

Countries.prototype.bindEvents = function (){
  PubSub.subscribe('SelectCountry:change', (event) => {
    const selectedIndex = event.detail;
    const country = this.countryInfo[selectedIndex];

    PubSub.publish('InfoCountry: country', country);
  });
}

module.exports = Countries;
