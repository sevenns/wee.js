module.exports = {
  parseHTML: function (value) {
    var tmp = document.implementation.createHTMLDocument();

    tmp.body.innerHTML = value;

    return tmp.body.children[0];
  }
};
