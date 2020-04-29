function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr.shift();
  let left = arr.filter((el) => el < pivot);
  let right = arr.filter((el) => el >= pivot);

  let leftSorted = quickSort(left);
  let rightSorted = quickSort(right);

  return [...leftSorted, pivot, ...rightSorted];
}
