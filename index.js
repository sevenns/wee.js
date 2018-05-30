function Wee (selector) {
  if (typeof selector === 'string') {
    var collection = document.querySelectorAll(selector);

    this.collection = Array.prototype.slice.call(collection);
  } else if (selector.nodeType) {
    this.collection = Array.prototype.slice.call({
      '0': selector,
      length: 1
    });
  }

  return this;
};

Wee.prototype = {
  length: function () {
    return this.collection.length;
  },

  each: function (callback) {
    Array.prototype.forEach.call(this.collection, callback);
  },

  on: function (name, handler) {
    return this.each(function (el) {
      el.addEventListener(name, handler);
    });
  },

  ready: function (callback) {
    document.addEventListener('DOMContentLoaded', callback);
  }
};

function $ (selector) {
  return new Wee(selector);
}

for (var key in Wee.prototype) {
  $[key] = Wee.prototype[key];
}
