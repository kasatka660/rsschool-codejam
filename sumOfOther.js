function sumOfOthers(arr) {
  const totalSum = arr.reduce((prevSum, curr) => prevSum + curr, 0);
  return arr.map((item) => totalSum - item);
}

