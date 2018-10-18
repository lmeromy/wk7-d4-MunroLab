const PubSub = require('../helpers/pub_sub.js');

const RegionView = function (container) {
  this.container = container;
};

RegionView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:munro-data-loaded', (event) => {
    const allMunros = event.detail;
    const regionList = this.prepareRegions(allMunros);
    // console.log('check from region view:', allMunros);
    // console.log('check from region view:', regionList);
    this.populateDropDown(regionList);
  });

  this.container.addEventListener('change', (event) => {
    const selectedRegion = event.target.value;
    PubSub.publish('RegionView:region-selected', selectedRegion);
  })
};

RegionView.prototype.prepareRegions = function (munroObjectArray) {
  const regionsArray = munroObjectArray.map(munro => munro.region)
  .filter((region, index, regions) => regions.indexOf(region) === index);
  return regionsArray;
};

RegionView.prototype.populateDropDown = function (regionsArray) {
  regionsArray.forEach((region, index) => {
    const option = document.createElement('option');
    option.textContent = region;
    option.value = region; //is this necessary? maybe for the change event...
    this.container.appendChild(option);
  })
};

module.exports = RegionView;
