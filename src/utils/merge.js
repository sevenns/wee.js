module.exports = function (obj1, obj2) {
  for (var key in obj1) {
    if (Object.prototype.hasOwnProperty.call(obj1, key)) {
      obj2[key] = obj1[key];
    }
  }

  return obj2;
};
