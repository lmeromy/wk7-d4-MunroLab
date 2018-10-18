const Munros = require('./models/munros.js');
const ListView = require('./views/list_view.js');
// const DetailView = require('./views/detail_view.js');


document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript Loaded');

  const munrosListContainer = document.querySelector('#munros');
  const munrosListView = new ListView(munrosListContainer)
  munrosListView.bindEvents();


  const munros = new Munros();
  munros.getData();
})
