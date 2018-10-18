const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Munros = function () {
  this.data = [];
};

Munros.prototype.getData = function () {
  const url = 'https://munroapi.herokuapp.com/api/munros';
  const request = new Request(url);
  request.get().then(data => {
    this.data = data;
    PubSub.publish('Munros:munro-data-loaded', this.data);
    // console.log(this.data);
  });

};


module.exports = Munros;
