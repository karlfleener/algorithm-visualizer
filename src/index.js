import './styles/index.scss';
import regeneratorRuntime from "regenerator-runtime";

class SortingVisualizer {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");

    this.colorStart = Math.floor(Math.random() * 360);

    this.algorithmType = document.getElementById("algorithm-type").value;
    this.algorithmInput = document.getElementById("algorithm").value;
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  buildArray() {
    this.size = Number(document.getElementById("size").value);

    this.array = [];
    for (let i = 1; i <= this.size; i++) {
      this.array.push(i);
    }
  }

  shuffleArray() {
    for (let i = this.size - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.array[i], this.array[j]] = [this.array[j], this.array[i]];
    }
  }

  drawCanvas() {
    let widthRatio = this.canvas.width / this.size;
    let heightRatio = this.canvas.height / this.size;

    this.clearCanvas();

    for (let i = 0; i < this.size; i++) {
      let val = this.array[i];
      let barHeight = val * heightRatio;
      this.ctx.fillStyle = this.gradient(val);
      this.ctx.fillRect(
        i * widthRatio,
        this.canvas.height - barHeight,
        widthRatio,
        barHeight
      );
      this.ctx.save();
    }
  }

  gradient(val) {
    let index = this.array.indexOf(val);

    let colorNext = (this.colorStart + index * (70 / this.size)) % 360;
    return "hsl(" + colorNext + ",90%,50%)";
  }

  init() {
    this.colorStart = Math.floor(Math.random() * 360);
    this.buildArray();
    this.shuffleArray();
    this.drawCanvas();
  }

  resize() {
    this.buildArray();
    this.shuffleArray();
    this.drawCanvas();
  }

  algorithm() {
    let algorithmInput = document.getElementById("algorithm").value;

    if (algorithmInput === "Bubble Sort") {
      return this.bubbleSort(this.array);
    }
    if (algorithmInput === "Merge Sort") {
      return this.mergeSort(this.array, 0, this.array.size);
    }
    if (algorithmInput === "Quick Sort") {
      return this.quickSort(this.array, 0, this.array.size);
    }
    if (algorithmInput === "") return;
  }

  isSorted(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    return true;
  }

  sort() {
    let sortArray = this.algorithm();
    if (sortArray === undefined) return;

    const animate = () => {
      let speed = Math.floor(
        1000 / Number(document.getElementById("speed").value)
      );
      // setTimeout(animate, speed);
      // requestAnimationFrame(animate);

      this.drawCanvas();

      if (this.isSorted(this.array)) {
        return;
      } else {
        setTimeout(animate, speed);

        // console.log(this.array);
        sortArray.next();
      }
      // console.log(this.isSorted(this.array))
      // sortArray.next() // call next iteration of the bubbleSort function
    };

    animate();
  }

  //---------------------------------Algorithms-----------------------------------

  *bubbleSort(arr) {
    let swapped = true;
    while (swapped) {
      swapped = false;
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          this.swap(arr, i, i + 1);
          swapped = true;
          yield swapped; // pause here
        }
      }
    }
    return;
  }

  swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  }

  //------------------------------------------------------------------------------

  *quickSort(arr, min, max = arr.length) {
    if (max - min <= 1) return arr;

    // partitioning
    let [pivot, less, greater] = [arr[min], [], []];
    for (let i = min + 1; i < max; i++) {
      if (arr[i] < pivot) less.push(arr[i]);
      else greater.push(arr[i]);
      arr.splice(min, i - min + 1, ...less.concat(pivot, greater));
      yield arr;
    }

    yield* this.quickSort(arr, min, min + less.length);
    yield* this.quickSort(arr, min + less.length + 1, max);
  }

  //------------------------------------------------------------------------------

    *mergeSort(arr) {
    if (arr.length <= 1) return arr;


    let midIdx = Math.floor(arr.length / 2);
    let left = arr.slice(0, midIdx);
    let right = arr.slice(midIdx);


    let sortedLeft = this.mergeSort(left);
    let sortedRight = this.mergeSort(right);



    function *merge(sortedLeft, sortedRight) {

      // console.log(arr)

      arr = [];

      while (sortedLeft.length || sortedRight.length) {
        let ele1 = sortedLeft.length ? sortedLeft[0] : Infinity;
        let ele2 = sortedRight.length ? sortedRight[0] : Infinity;

        let next;
        if (ele1 < ele2) {
          next = sortedLeft.shift();
        } else {
          next = sortedRight.shift();
        }

        arr.push(next);
      }

      console.log(arr)
      yield* arr;
    }
    // console.log(arr);

    yield* merge(sortedLeft, sortedRight);
  }

  // merge(arr1, arr2) {
  //   let merged = [];

  //   while (arr1.length || arr2.length) {
  //     let ele1 = arr1.length ? arr1[0] : Infinity;
  //     let ele2 = arr2.length ? arr2[0] : Infinity;

  //     let next;
  //     if (ele1 < ele2) {
  //       next = arr1.shift();
  //     } else {
  //       next = arr2.shift();
  //     }

  //     merged.push(next);
  //     // yield* merged
  //   }
  //   return merged;

  // }
}

//----------------------------------Run Program---------------------------------

let visualizer = new SortingVisualizer
visualizer.init()

document.getElementById('sort').onclick = e => {
  visualizer.sort();
}

document.getElementById('reset').onclick = e => {
  visualizer.init();
}

let sizeInput = document.getElementById("size")
sizeInput.addEventListener("input", function() {
  visualizer.resize();
});
