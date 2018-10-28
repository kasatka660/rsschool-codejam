function make(...args) {
  let array = args;
  function func(...items) {
    if (typeof items[0] != "function") {
      array = array.concat(items);
      return func;
    }
    return array.reduce(items[0], 0);
  }
  return func;
}
