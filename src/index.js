import './styles/index.scss';
import { bubbleSort } from './algorithm_sorting/bubble_sort'
import { insertionSort } from './algorithm_sorting/insertion_sort'
import { mergeSort } from './algorithm_sorting/merge_sort'
import { quickSort } from './algorithm_sorting/quick_sort'
import { selectionSort } from './algorithm_sorting/selection_sort'


//------------------------------------------------------------------------------

class SortingVisualizer {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext("2d");
    this.clearCanvas = this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.algorithmType = document.getElementById('algorithm-type').value;
    this.algorithmInput = document.getElementById('algorithm').value;
    this.size = Number(document.getElementById("size").value);
    this.speed = Number(document.getElementById('speed').value);
    
    this.bubbleSort = bubbleSort;
    this.insertionSort = insertionSort;
    this.mergeSort = mergeSort;
    this.quickSort = quickSort;
    this.selectionSort = selectionSort;
    debugger
  }
  
  
  // this.buildArray();
  // this.shuffleArray();
  // // this.buildGradient();
  // this.visualizeArray();
  // this.reset();
  // this.algorithms();
  
  // //algorithms
  // this.quickSort = quickSort;
  
  // ---------------------------------Canvas------------------------------------
  
  canvasClear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  };
  
  buildArray() {
    this.array = []
    for (let i = 1; i <= this.size; i++) {
      this.array.push(i);
    }
    // this.buildGradient();
    this.visualizeArray();
    debugger
  }
  
  shuffleArray() {
    for (let i = this.size - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.array[i], this.array[j]] = [this.array[j], this.array[i]];
    }

    debugger
    this.visualizeArray();
  }
  
    //  buildGradient() {
    //   let Idx1 = Math.floor(Math.random() * 7);
    //   let Idx2 = Math.floor(Math.random() * 7);
    //   if (Idx2 === Idx1) Idx2 = (Idx2 + 3) % 7;
    
    //   const colors = ["#FF0000", "#FF8000", "#FFFF00", "#01DF3A", "#00BFFF", "#642EFE", "#FE2EF7"];
    //   let gradientStart = colors[Idx1];
    //   let gradientEnd = colors[Idx2];
    //   debugger
    //   this.gradient = this.ctx.createLinearGradient(0, 0, this.canvas.width, 0);
    //   gradient.addColorStop(0, gradientStart);
    //   gradient.addColorStop(1, gradientEnd);
    
    // }
    
  visualizeArray() {
    let widthRatio = this.canvas.width / this.size;
    let heightRatio = this.canvas.height / this.size;
    
    this.canvasClear();
    
    let colorStart = (Math.floor(Math.random() * 360));
    
    for (let i = 0; i < this.size; i++) {
      let val = this.array[i];
      let barHeight = val * heightRatio;
      let colorNext = (colorStart + (i * (70 / this.size))) % 360;
      this.ctx.fillStyle = "hsl(" + colorNext + ",90%,50%)";
      this.ctx.fillRect(i * widthRatio,  this.canvas.height - barHeight, widthRatio, barHeight) 
    }
    this.ctx.save();
    
    // this.shuffleArray();
    // debugger
  };
// -----------------------------------Options-----------------------------------
    
  reset() {
    debugger
    document.getElementById('reset').onclick = this.shuffleArray.bind(this);
  }
    
  sort() {
    debugger
    document.getElementById('sort').onclick = this.algorithm.bind(this);
  }
    
  algorithm() {
    this.algorithmType = document.getElementById('algorithm-type').value;
    this.algorithmInput = document.getElementById('algorithm').value;
    debugger
    switch (true) {
      case this.algorithmType === 'Sorting' && this.algorithmInput === "Bubble Sort":
        this.bubbleSort(this.array);
        break
      case this.algorithmType === 'Sorting' && this.algorithmInput === "Insertion Sort":
        return this.insertionort(this.array);
      case this.algorithmType === 'Sorting' && this.algorithmInput === "Merge Sort":
        return this.mergeSort(this.array);
      case this.algorithmType === 'Sorting' && this.algorithmInput === "Quick Sort":
        this.array = this.quickSort(this.array);
        break
      case this.algorithmType === 'Sorting' && this.algorithmInput === "Selection Sort":
        return this.selectionSort(this.array);
    }
    debugger
    this.visualizeArray();
  }
  
}

// -----------------------------------Run Program-------------------------------

let test = new SortingVisualizer();
test.buildArray();
test.shuffleArray();
test.reset();
test.algorithm();
test.sort();