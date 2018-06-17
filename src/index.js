var attrMethods = require('./attr');
var classMethods = require('./class');
var commonMethods = require('./common');
var elementMethods = require('./element');
var eventMethods = require('./event');
var merge = require('./utils/merge');
var makeArray = require('./utils/makeArray');

function Weery (selector) {
  if (typeof selector === 'string') {
    var collection = document.querySelectorAll(selector);

    makeArray(collection, this);
  } else {
    this['0'] = selector;
    this.length = 1;
  }

  return this;
}

merge(attrMethods, Weery.prototype);
merge(classMethods, Weery.prototype);
merge(commonMethods, Weery.prototype);
merge(elementMethods, Weery.prototype);
merge(eventMethods, Weery.prototype);

function $ (selector) {
  return new Weery(selector);
}

merge(Weery.prototype, $);

console.log(process.env);

module.exports.$ = $;
module.exports.W = $;
module.exports.Weery = $;
