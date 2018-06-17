module.exports = {
  attr: function (name, value) {
    if (!this[0]) {
      return undefined;
    }

    if (!value) {
      return this[0].getAttribute(name) || undefined;
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
