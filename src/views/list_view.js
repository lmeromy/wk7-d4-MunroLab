const PubSub = require('../helpers/pub_sub.js');
const DetailView = require('./detail_view.js')


const ListView = function (container) {
  this.container = container; //what is container? clarify
}

ListView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:munro-data-loaded', (event) => {
    // console.log(this);
    this.munros = event.detail;  // create "munros" property of "this" (which is the container I specify...link to desired html element)
    // console.log(this); //check that munros array is in "this"
    this.render();
  });

  PubSub.subscribe('RegionView:region-selected', (event) => {
    this.region = event.detail;
    // console.log(this);
    this.renderForRegion();
  })

};

// this function loops through munros array and creates a new View, then renders it!
ListView.prototype.render = function () {
  this.munros.forEach((munro) => {
    const munroView = new DetailView(this.container, munro);
    munroView.render();
  });
};

ListView.prototype.renderForRegion = function () {
// console.log(this);
this.container.innerHTML = '';
  this.munros.forEach((munro) => {
    if(munro.region === this.region){
      const munroView = new DetailView(this.container, munro);
      munroView.render();
    } // will i need to clear what was previously there? YES!
  })
};

module.exports = ListView;
