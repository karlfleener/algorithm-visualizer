import './styles/index.scss';
// import { bubbleSort } from './algorithm_sorting/bubble_sort'
// import { insertionSort } from './algorithm_sorting/insertion_sort'
// import { mergeSort } from './algorithm_sorting/merge_sort'
// // import { quickSort } from './algorithm_sorting/quick_sort'
// import { selectionSort } from './algorithm_sorting/selection_sort'
import regeneratorRuntime from "regenerator-runtime";

class SortingVisualizer {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext("2d");

    this.colorStart = (Math.floor(Math.random() * 360));

    this.algorithmType = document.getElementById('algorithm-type').value;
    this.algorithmInput = document.getElementById('algorithm').value;
    
  }
  
  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };
  
  buildArray() {
    this.size = Number(document.getElementById("size").value);

    this.array = []
    for (let i = 1; i <= this.size; i++) {
      this.array.push(i);
    }
  };
  
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
      this.ctx.fillRect(i * widthRatio,  this.canvas.height - barHeight, widthRatio, barHeight)
      this.ctx.save();
    }
  }

  gradient(val) {
    let index = this.array.indexOf(val)

    let colorNext = (this.colorStart + (index * (70 / this.size))) % 360;
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
  
  sort() {
    let sortArray = this.bubbleSort(this.array);

    const animate = () => {
      
      let speed = Math.floor(1000 / Number(document.getElementById("speed").value))
        setTimeout(function() { 
        requestAnimationFrame(animate); 
      }, speed);
      
      this.drawCanvas();
      sortArray.next(); // call next iteration of the bubbleSort function
    };
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
