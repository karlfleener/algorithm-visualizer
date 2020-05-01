export function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr.shift();
  let left = arr.filter((el) => el < pivot);
  let right = arr.filter((el) => el >= pivot);

  let leftSorted = quickSort(left);
  let rightSorted = quickSort(right);
  debugger
  return [...leftSorted, pivot, ...rightSorted];
}

// export default quickSort;