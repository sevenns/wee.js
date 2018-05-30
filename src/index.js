var attrMethods = require('./attr');
var classMethods = require('./class');
var commonMethods = require('./common');
var elementMethods = require('./element');
var eventMethods = require('./event');
var staticMethods = require('./static');
var merge = require('./utils/merge');

function Wee (selector) {
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

merge(attrMethods, Wee.prototype);
merge(classMethods, Wee.prototype);
merge(commonMethods, Wee.prototype);
merge(elementMethods, Wee.prototype);
merge(eventMethods, Wee.prototype);
merge(staticMethods, Wee.prototype);

function $ (selector) {
  return new Wee(selector);
}

merge(Wee.prototype, $);

window.$ = window.Wee = $;
