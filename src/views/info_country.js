const PubSub = require('../helpers/pub_sub.js');

const InfoCountry = function(element){
  this.element = element;
}

InfoCountry.prototype.bindEvents = function() {
  PubSub.subscribe('InfoCountry: country', (event) => {
   const countryDets = event.detail;
   console.log(`countryDets: ${countryDets}`);
   this.outputDetails(countryDets);
 });
};

InfoCountry.prototype.outputDetails = function(){
  console.log('in outputDetails');
}

module.exports = InfoCountry;
