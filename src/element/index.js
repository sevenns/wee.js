var merge = require('../utils/merge');
var makeArray = require('../utils/makeArray');

module.exports = {
  each: function (callback) {
    Array.prototype.forEach.call(this, callback);
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

    makeArray(collection, this);

    return this;
  },

  css: function (key, value) {
    var result;

    if (!value) {
      if (typeof key === 'string') {
        result = this[0] ? this[0].style[key] : undefined;
      } else {
        this.each(function (el) {
          merge(key, el.style);
        });

        result = this;
      }
    } else {
      this.each(function (el) {
        el.style[key] = value;
      });

      result = this;
    }

    return result;
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
    if (!value && this[0]) {
      return this[0].innerHTML;
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

    makeArray(collection, this);

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

    makeArray(collection, this);

    return this;
  },

  outerHeight: function (isDeep) {
    if (!this[0]) {
      return undefined;
    }

    var el = this[0];

    if (el instanceof Window) {
      return el.innerHeight;
    }

    var height = el.offsetHeight;

    if (isDeep) {
      var style = getComputedStyle(el);

      height += parseInt(style.marginTop) + parseInt(style.marginBottom);
    }

    return height;
  },

  outerWidth: function (isDeep) {
    if (!this[0]) {
      return undefined;
    }

    var el = this[0];

    if (el instanceof Window) {
      return el.innerWidth;
    }

    var width = el.offsetWidth;

    if (isDeep) {
      var style = getComputedStyle(el);

      width += parseInt(style.marginLeft) + parseInt(style.marginRight);
    }

    return width;
  },

  remove: function () {
    this.each(function (el) {
      el.parentNode.removeChild(el);
    });

    return this;
  },

  offset: function () {
    if (!this[0]) {
      return undefined;
    }

    var el = this[0];
    var rect = el.getBoundingClientRect();

    return {
      top: rect.top,
      left: rect.left
    };
  },

  position: function () {
    if (!this[0]) {
      return undefined;
    }

    var el = this[0];

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
