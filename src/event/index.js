module.exports = {
  on: function (name, handler) {
    return this.each(function (el) {
      el.addEventListener(name, handler);
    });
  },

  ready: function (callback) {
    document.addEventListener('DOMContentLoaded', callback);
  },

  resize: function (handler) {
    this.on('resize', handler);
  },

  scroll: function (handler) {
    this.on('scroll', handler);
  }
};
