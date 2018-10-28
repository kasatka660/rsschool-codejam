module.exports = function recursion(tree, depth = 0, prevResult = []) {
  if (!tree) {
    return;
  }
  const result = prevResult;
  if (!result[depth]) {
    result[depth] = [];
  }
  result[depth].push(tree.value);
  if (tree.left) {
    recursion(tree.left, depth + 1, result);
  }
  if (tree.right) {
    recursion(tree.right, depth + 1, result);
  }
  return result;
};
