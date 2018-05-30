var merge = require('../utils/merge');

module.exports = {
  each: function (callback) {
    Array.prototype.forEach.call(this.collection, callback);
  },

  find: function (selector) {
    if (!(typeof selector !== 'string')) {
      var collection = [];

      this.each(function (el) {
        var currentCollection = el.querySelectorAll(selector);
        var array = Array.prototype.slice.call(currentCollection);

        collection = collection.concat(array);
      });

      this.collection = this.collection.slice(0, this.length());

      this.collection = collection;
    } else {
      this.collection = this.collection.slice(0, this.length());
    }

    return this;
  },

  css: function (key, value) {
    if (!value) {
      this.each(function (el) {
        merge(key, el.style);
      });
    } else {
      this.each(function (el) {
        el.style[key] = value;
      });
    }

    return this;
  }
};
