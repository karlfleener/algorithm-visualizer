import './styles/index.scss';
// import { bubbleSort } from './algorithm_sorting/bubble_sort'
// import { insertionSort } from './algorithm_sorting/insertion_sort'
// import { mergeSort } from './algorithm_sorting/merge_sort'
// // import { quickSort } from './algorithm_sorting/quick_sort'
// import { selectionSort } from './algorithm_sorting/selection_sort'
import regeneratorRuntime from "regenerator-runtime";

// //------------------------------------------------------------------------------

// class SortingVisualizer {
//   constructor() {
//     this.canvas = document.getElementById('canvas');
//     this.ctx = canvas.getContext("2d");
//     this.clearCanvas = this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

//     this.algorithmType = document.getElementById('algorithm-type').value;
//     this.algorithmInput = document.getElementById('algorithm').value;
//     this.size = Number(document.getElementById("size").value);
//     this.speed = Number(document.getElementById('speed').value);
    
//     this.bubbleSort = bubbleSort;
//     this.insertionSort = insertionSort;
//     this.mergeSort = mergeSort;
//     // this.quickSort = quickSort;
//     this.selectionSort = selectionSort;
//     debugger
//   }
  
  
//   // this.buildArray();
//   // this.shuffleArray();
//   // // this.buildGradient();
//   // this.visualizeArray();
//   // this.reset();
//   // this.algorithms();
  
//   // //algorithms
//   // this.quickSort = quickSort;
  
//   // ---------------------------------Canvas------------------------------------
  
//   canvasClear() {
//     this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
//   };
  
//   buildArray() {
//     this.array = []
//     for (let i = 1; i <= this.size; i++) {
//       this.array.push(i);
//     }

//     this.visualizeArray(this.array);
//     debugger
//   }
  
//   shuffleArray() {
//     for (let i = this.size - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [this.array[i], this.array[j]] = [this.array[j], this.array[i]];
//     }

//     debugger
//     this.visualizeArray(this.array);
//   }
  
//     //  buildGradient() {
//     //   let Idx1 = Math.floor(Math.random() * 7);
//     //   let Idx2 = Math.floor(Math.random() * 7);
//     //   if (Idx2 === Idx1) Idx2 = (Idx2 + 3) % 7;
    
//     //   const colors = ["#FF0000", "#FF8000", "#FFFF00", "#01DF3A", "#00BFFF", "#642EFE", "#FE2EF7"];
//     //   let gradientStart = colors[Idx1];
//     //   let gradientEnd = colors[Idx2];
//     //   debugger
//     //   this.gradient = this.ctx.createLinearGradient(0, 0, this.canvas.width, 0);
//     //   gradient.addColorStop(0, gradientStart);
//     //   gradient.addColorStop(1, gradientEnd);
    
//     // }
    
//   visualizeArray(arr) {
//     let widthRatio = this.canvas.width / this.size;
//     let heightRatio = this.canvas.height / this.size;
    
//     this.canvasClear();
    
//     let colorStart = (Math.floor(Math.random() * 360));
    
//     for (let i = 0; i < this.size; i++) {
//       let val = arr[i];
//       let barHeight = val * heightRatio;
//       let colorNext = (colorStart + (i * (70 / this.size))) % 360;
//       this.ctx.fillStyle = "hsl(" + colorNext + ",90%,50%)";
//       this.ctx.fillRect(i * widthRatio,  this.canvas.height - barHeight, widthRatio, barHeight) 
//     }
//     this.ctx.save();
//     // setTimeout(console.log(""), 1000);
    
//     // this.shuffleArray();
//     // debugger
//   };
// // -----------------------------------Options-----------------------------------
    
//   reset() {
//     debugger
//     document.getElementById('reset').onclick = this.shuffleArray.bind(this);
//   }
    
//   sort() {
//     debugger
//     document.getElementById('sort').onclick = this.algorithm.bind(this);
//   }

//   quickSort(arr) {
//     if (arr.length <= 1) {
//       return arr;
//     }

//     let pivot = arr.shift();
//     let left = arr.filter((el) => el < pivot);
//     let right = arr.filter((el) => el >= pivot);
//     debugger
//     let tempArray = [...left, pivot, ...right];

//     this.visualizeArray(tempArray);

//     let leftSorted = this.quickSort(left);
    
//     let rightSorted = this.quickSort(right);
//     // this.visualizeArray();
//     // debugger;
//     return [...leftSorted, pivot, ...rightSorted];
//   }

//   testSort(arr) {
//     let tempArr = arr
//     for (let i = 0; i < arr.length; i++) {
//       tempArr[i] = i / 2;
//       // let temp = tempArr[i];
//       // tempArr[i] = tempArr[tempArr.length - i - 1];
//       // tempArr[tempArr.length - i - 1] = temp;
//       setInterval(this.visualizeArray(tempArr), 2000);
//     }
//     // setTimeout(console.log(tempArr), 1000);
//   }
    
//   algorithm() {
//     this.algorithmType = document.getElementById('algorithm-type').value;
//     this.algorithmInput = document.getElementById('algorithm').value;
//     switch (true) {
//       case this.algorithmType === 'Sorting' && this.algorithmInput === "Bubble Sort":
//         this.array = this.bubbleSort(this.array);
//         break
//       case this.algorithmType === 'Sorting' && this.algorithmInput === "Insertion Sort":
//         this.array = this.insertionSort(this.array);
//         break
//       case this.algorithmType === 'Sorting' && this.algorithmInput === "Merge Sort":
//         this.array = this.mergeSort(this.array);
//         break
//       case this.algorithmType === 'Sorting' && this.algorithmInput === "Quick Sort":
//         // this.array = this.quickSort(this.array, this.visualizeArray);
//         this.quickSort(this.array)
//         break
//       case this.algorithmType === 'Sorting' && this.algorithmInput === "Selection Sort":
//         this.array = this.selectionSort(this.array);
//         break
//       case this.algorithmType === 'Sorting' && this.algorithmInput === "Test Sort":
//         this.array = this.testSort(this.array);
//         break
//     }

//     debugger
//     // this.visualizeArray();
//   }
  
// }

// // -----------------------------------Run Program-------------------------------

// let test = new SortingVisualizer();
// test.buildArray();
// test.shuffleArray();
// test.reset();
// test.algorithm();
// test.sort();


class SortingVisualizer {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext("2d");

    this.colorStart = (Math.floor(Math.random() * 360));

    this.algorithmType = document.getElementById('algorithm-type').value;
    this.algorithmInput = document.getElementById('algorithm').value;
    this.speed = Number(document.getElementById('speed').value);
  }
  
  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };
  
  buildArray() {
    this.size = Number(document.getElementById("size").value);
    debugger
    this.array = []
    for (let i = 1; i <= this.size; i++) {
      this.array.push(i);
    }
  };

  resizeArray() {

  }
  
  shuffleArray() {
    for (let i = this.size - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.array[i], this.array[j]] = [this.array[j], this.array[i]];
    }
  }
  
  drawCanvas() {
    debugger
    let widthRatio = this.canvas.width / this.size;
    let heightRatio = this.canvas.height / this.size;

    this.clearCanvas();

    for (let i = 0; i < this.size; i++) {
      let val = this.array[i];
      let barHeight = val * heightRatio;
      this.ctx.fillStyle = this.gradient(val);
      this.ctx.fillRect(i * widthRatio,  this.canvas.height - barHeight, widthRatio, barHeight)
      debugger
    }
    // this.ctx.save();
  }

  randomNum() {
    
  }

  gradient(val) {
    let index = this.array.indexOf(val)
    debugger

    let colorNext = (this.colorStart + (index * (70 / this.size))) % 360;
    return "hsl(" + colorNext + ",90%,50%)";
  }

  init() {
    this.colorStart = Math.floor(Math.random() * 360);
    this.buildArray();
    this.shuffleArray();
    this.drawCanvas();
  }
  
  sort() {
    debugger
    let sortArray = this.bubbleSort(this.array);
    // an anim function triggered every 60th of a second
    const animate = () => {
      requestAnimationFrame(animate);
      debugger
      this.drawCanvas();
      sortArray.next(); // call next iteration of the bubbleSort function
    }
    animate();
  }
  
  * bubbleSort(arr) {
    let swapped = true;
    while(swapped) {
      swapped = false;
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          this.swap(arr, i, i + 1);
          swapped = true;
          yield swapped; // pause here
        }
      }
    }
    return
  }

  swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
  }
  
}

let visualizer = new SortingVisualizer
visualizer.init()

document.getElementById('sort').onclick = e => {
  visualizer.sort();
}

document.getElementById('reset').onclick = e => {
  visualizer.init();
}