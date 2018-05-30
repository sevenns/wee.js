module.exports = {
  on: function (name, handler) {
    return this.each(function (el) {
      el.addEventListener(name, handler);
    });
  },

  ready: function (callback) {
    document.addEventListener('DOMContentLoaded', callback);
  },

  resize: function (callback) {
    window.addEventListener('resize', callback);
  },

  scroll: function (callback) {
    document.addEventListener('scroll', callback);
  },

  load: function (callback) {
    window.addEventListener('load', callback);
  }
};
