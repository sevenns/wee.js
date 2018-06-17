module.exports = function (collection, context, saveExists) {
  var isSaveExists = saveExists || false;
  var collectionArray = Array.prototype.slice.call(collection);

  if (!isSaveExists) {
    for (var i = 0; i < context.length; i++) {
      delete context[i];
    }
  }

  context.length = collectionArray.length;

  collectionArray.forEach(function (item, id) {
    context[id] = item;
  });
};
