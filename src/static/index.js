module.exports = {
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
