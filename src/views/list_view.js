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
};

// this function loops through munros array and creates a new View, then renders it!
ListView.prototype.render = function () {
  this.munros.forEach((munro) => {
    const munroView = new DetailView(this.container, munro);
    munroView.render();
  });
};


module.exports = ListView;
