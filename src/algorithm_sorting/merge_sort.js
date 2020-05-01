export function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let midIdx = Math.floor(arr.length / 2);
  let left = arr.slice(0, midIdx);
  let right = arr.slice(midIdx);

  let sortedLeft = mergeSort(left);
  let sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}


function merge(arr1, arr2) {
  let merged = [];

  while (arr1.length || arr2.length) {
    let ele1 = arr1.length ? arr1[0] : Infinity;
    let ele2 = arr2.length ? arr2[0] : Infinity;

    let next;
    if (ele1 < ele2) {
      next = arr1.shift();
    } else {
      next = arr2.shift();
    }

    merged.push(next);
  }

  return merged;
}

export default mergeSort;