const DetailView = function(container, munro) {
  this.munrosContainer = container;
  this.munro = munro;
};


DetailView.prototype.render = function () {
  const munroContainer = document.createElement('div');
  munroContainer.classList.add('munro');

  const name = this.createMunroName();
  munroContainer.appendChild(name);

  this.munrosContainer.appendChild(munroContainer);
};

DetailView.prototype.createMunroName = function () {
  const name = document.createElement('h4');
  name.textContent = this.munro.name;
  return name;
};

module.exports = DetailView;
