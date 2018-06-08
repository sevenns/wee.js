var merge = require('../utils/merge');

module.exports = {
  each: function (callback) {
    Array.prototype.forEach.call(this.collection, callback);
  },

  find: function (selector) {
    var collection = [];

    if (typeof selector === 'string') {
      this.each(function (el) {
        var currentCollection = el.querySelectorAll(selector);
        var array = Array.prototype.slice.call(currentCollection);

        collection = collection.concat(array);
      });
    }

    this.collection.splice(0, this.length());
    this.collection = this.collection.concat(collection);

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
  },

  text: function (value) {
    if (!value) {
      var text = '';

      this.each(function (el) {
        text += el.textContent;
      });

      return text;
    }

    this.each(function (el) {
      el.textContent = value;
    });

    return this;
  },

  html: function (value) {
    if (!value) {
      return this.collection[0].innerHTML;
    }

    this.each(function (el) {
      el.innerHTML = value;
    });

    return this;
  },

  next: function () {
    var collection = [];

    this.each(function (el) {
      var next = el.nextElementSibling;

      if (next) {
        collection.push(next);
      }
    });

    this.collection = this.collection.slice(0, this.length());

    this.collection = collection;

    return this;
  },

  prev: function () {
    var collection = [];

    this.each(function (el) {
      var prev = el.previousElementSibling;

      if (prev) {
        collection.push(prev);
      }
    });

    this.collection = this.collection.slice(0, this.length());

    this.collection = collection;

    return this;
  },

  outerHeight: function () {
    var el = this.collection[0];

    if (el instanceof Window) {
      return el.innerHeight;
    }

    var height = el.offsetHeight;
    var style = getComputedStyle(el);

    height += parseInt(style.marginTop) + parseInt(style.marginBottom);

    return height;
  },

  outerWidth: function () {
    var el = this.collection[0];

    if (el instanceof Window) {
      return el.innerWidth;
    }

    var width = el.offsetWidth;
    var style = getComputedStyle(el);

    width += parseInt(style.marginLeft) + parseInt(style.marginRight);

    return width;
  },

  remove: function () {
    this.each(function (el) {
      el.parentNode.removeChild(el);
    });

    return this;
  },

  offset: function () {
    var el = this.collection[0];
    var rect = el.getBoundingClientRect();

    return {
      top: rect.top,
      left: rect.left
    };
  },

  position: function () {
    var el = this.collection[0];

    return {
      top: el.offsetTop,
      left: el.offsetLeft
    };
  },

  append: function (value) {
    var parseHTML = this.parseHTML;

    this.each(function (el) {
      var parsed = parseHTML(value);

      el.appendChild(parsed);
    });

    return this;
  },

  prepend: function (value) {
    var parseHTML = this.parseHTML;

    this.each(function (el) {
      var parsed = parseHTML(value);

      el.insertBefore(parsed, el.firstChild);
    });

    return this;
  }
};
