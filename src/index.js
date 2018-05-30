var attrMethods = require('./attr');
var classMethods = require('./class');
var commonMethods = require('./common');
var elementMethods = require('./element');
var eventMethods = require('./event');
var staticMethods = require('./static');
var merge = require('./utils/merge');

function Weery (selector) {
  if (typeof selector === 'string') {
    var collection = document.querySelectorAll(selector);

    this.collection = Array.prototype.slice.call(collection);
  } else {
    this.collection = Array.prototype.slice.call({
      '0': selector,
      length: 1
    });
  }

  return this;
}

merge(attrMethods, Weery.prototype);
merge(classMethods, Weery.prototype);
merge(commonMethods, Weery.prototype);
merge(elementMethods, Weery.prototype);
merge(eventMethods, Weery.prototype);
merge(staticMethods, Weery.prototype);

function $ (selector) {
  return new Weery(selector);
}

merge(Weery.prototype, $);

window.$ = window.Weery = $;

module.exports = {
  $: $,
  Weery: Weery
};
