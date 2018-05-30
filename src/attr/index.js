module.exports = {
  attr: function (name, value) {
    if (!value) {
      return this.collection[0].getAttribute(name);
    }

    this.each(function (el) {
      el.setAttribute(name, value);
    });

    return this;
  },

  removeAttr: function (name) {
    this.each(function (el) {
      el.removeAttribute(name);
    });

    return this;
  }
};
