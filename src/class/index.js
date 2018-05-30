module.exports = {
  addClass: function (classes) {
    this.each(function (el) {
      var classArray = classes.split(' ');

      classArray.forEach(function (className) {
        el.classList.add(className);
      });
    });

    return this;
  },

  removeClass: function (classes) {
    this.each(function (el) {
      var classArray = classes.split(' ');

      classArray.forEach(function (className) {
        el.classList.remove(className);
      });
    });

    return this;
  },

  toggleClass: function (classes) {
    this.each(function (el) {
      var classArray = classes.split(' ');

      classArray.forEach(function (className) {
        el.classList.toggle(className);
      });
    });

    return this;
  },

  hasClass: function (classes) {
    var isExists = true;

    this.each(function (el) {
      var classArray = classes.split(' ');

      classArray.forEach(function (className) {
        if (!el.classList.contains(className)) {
          isExists = false;
        }
      });
    });

    return isExists;
  }
};
