/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/algorithm_sorting/bubble_sort.js":
/*!**********************************************!*\
  !*** ./src/algorithm_sorting/bubble_sort.js ***!
  \**********************************************/
/*! exports provided: bubbleSort, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bubbleSort", function() { return bubbleSort; });
function bubbleSort(arr) {
  var swapped = true;

  while (swapped) {
    swapped = false;

    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        swapped = true;
      }
    }
  }

  return arr;
}

function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

/* harmony default export */ __webpack_exports__["default"] = (bubbleSort);

/***/ }),

/***/ "./src/algorithm_sorting/insertion_sort.js":
/*!*************************************************!*\
  !*** ./src/algorithm_sorting/insertion_sort.js ***!
  \*************************************************/
/*! exports provided: insertionSort, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertionSort", function() { return insertionSort; });
function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var currElement = arr[i];

    for (var j = i - 1; j >= 0 && currElement < arr[j]; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = currElement;
  }

  return arr;
}
/* harmony default export */ __webpack_exports__["default"] = (insertionSort);

/***/ }),

/***/ "./src/algorithm_sorting/merge_sort.js":
/*!*********************************************!*\
  !*** ./src/algorithm_sorting/merge_sort.js ***!
  \*********************************************/
/*! exports provided: mergeSort, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeSort", function() { return mergeSort; });
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  var midIdx = Math.floor(arr.length / 2);
  var left = arr.slice(0, midIdx);
  var right = arr.slice(midIdx);
  var sortedLeft = mergeSort(left);
  var sortedRight = mergeSort(right);
  return merge(sortedLeft, sortedRight);
}

function merge(arr1, arr2) {
  var merged = [];

  while (arr1.length || arr2.length) {
    var ele1 = arr1.length ? arr1[0] : Infinity;
    var ele2 = arr2.length ? arr2[0] : Infinity;
    var next = void 0;

    if (ele1 < ele2) {
      next = arr1.shift();
    } else {
      next = arr2.shift();
    }

    merged.push(next);
  }

  return merged;
}

/* harmony default export */ __webpack_exports__["default"] = (mergeSort);

/***/ }),

/***/ "./src/algorithm_sorting/quick_sort.js":
/*!*********************************************!*\
  !*** ./src/algorithm_sorting/quick_sort.js ***!
  \*********************************************/
/*! exports provided: quickSort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quickSort", function() { return quickSort; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  var pivot = arr.shift();
  var left = arr.filter(function (el) {
    return el < pivot;
  });
  var right = arr.filter(function (el) {
    return el >= pivot;
  });
  var leftSorted = quickSort(left);
  var rightSorted = quickSort(right);
  debugger;
  return [].concat(_toConsumableArray(leftSorted), [pivot], _toConsumableArray(rightSorted));
} // export default quickSort;

/***/ }),

/***/ "./src/algorithm_sorting/selection_sort.js":
/*!*************************************************!*\
  !*** ./src/algorithm_sorting/selection_sort.js ***!
  \*************************************************/
/*! exports provided: selectionSort, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectionSort", function() { return selectionSort; });
function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var minIdx = i;

    for (var j = i + 1; j < arr.length; j++) {
      if (arr[minIdx] > arr[j]) {
        minIdx = j;
      }
    }

    swap(arr, i, minIdx);
  }

  return arr;
}

function swap(arr, idx1, idx2) {
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

/* harmony default export */ __webpack_exports__["default"] = (selectionSort);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _algorithm_sorting_bubble_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./algorithm_sorting/bubble_sort */ "./src/algorithm_sorting/bubble_sort.js");
/* harmony import */ var _algorithm_sorting_insertion_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./algorithm_sorting/insertion_sort */ "./src/algorithm_sorting/insertion_sort.js");
/* harmony import */ var _algorithm_sorting_merge_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./algorithm_sorting/merge_sort */ "./src/algorithm_sorting/merge_sort.js");
/* harmony import */ var _algorithm_sorting_quick_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./algorithm_sorting/quick_sort */ "./src/algorithm_sorting/quick_sort.js");
/* harmony import */ var _algorithm_sorting_selection_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./algorithm_sorting/selection_sort */ "./src/algorithm_sorting/selection_sort.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






 //------------------------------------------------------------------------------

var SortingVisualizer = /*#__PURE__*/function () {
  function SortingVisualizer() {
    _classCallCheck(this, SortingVisualizer);

    this.canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext("2d");
    this.clearCanvas = this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.algorithmType = document.getElementById('algorithm-type').value;
    this.algorithmInput = document.getElementById('algorithm').value;
    this.size = Number(document.getElementById("size").value);
    this.speed = Number(document.getElementById('speed').value);
    this.bubbleSort = _algorithm_sorting_bubble_sort__WEBPACK_IMPORTED_MODULE_1__["bubbleSort"];
    this.insertionSort = _algorithm_sorting_insertion_sort__WEBPACK_IMPORTED_MODULE_2__["insertionSort"];
    this.mergeSort = _algorithm_sorting_merge_sort__WEBPACK_IMPORTED_MODULE_3__["mergeSort"];
    this.quickSort = _algorithm_sorting_quick_sort__WEBPACK_IMPORTED_MODULE_4__["quickSort"];
    this.selectionSort = _algorithm_sorting_selection_sort__WEBPACK_IMPORTED_MODULE_5__["selectionSort"];
    debugger;
  } // this.buildArray();
  // this.shuffleArray();
  // // this.buildGradient();
  // this.visualizeArray();
  // this.reset();
  // this.algorithms();
  // //algorithms
  // this.quickSort = quickSort;
  // ---------------------------------Canvas------------------------------------


  _createClass(SortingVisualizer, [{
    key: "canvasClear",
    value: function canvasClear() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }, {
    key: "buildArray",
    value: function buildArray() {
      this.array = [];

      for (var i = 1; i <= this.size; i++) {
        this.array.push(i);
      } // this.buildGradient();


      this.visualizeArray();
      debugger;
    }
  }, {
    key: "shuffleArray",
    value: function shuffleArray() {
      for (var i = this.size - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var _ref = [this.array[j], this.array[i]];
        this.array[i] = _ref[0];
        this.array[j] = _ref[1];
      }

      debugger;
      this.visualizeArray();
    } //  buildGradient() {
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

  }, {
    key: "visualizeArray",
    value: function visualizeArray() {
      var widthRatio = this.canvas.width / this.size;
      var heightRatio = this.canvas.height / this.size;
      this.canvasClear();
      var colorStart = Math.floor(Math.random() * 360);

      for (var i = 0; i < this.size; i++) {
        var val = this.array[i];
        var barHeight = val * heightRatio;
        var colorNext = (colorStart + i * (70 / this.size)) % 360;
        this.ctx.fillStyle = "hsl(" + colorNext + ",90%,50%)";
        this.ctx.fillRect(i * widthRatio, this.canvas.height - barHeight, widthRatio, barHeight);
      }

      this.ctx.save(); // this.shuffleArray();
      // debugger
    }
  }, {
    key: "reset",
    // -----------------------------------Options-----------------------------------
    value: function reset() {
      debugger;
      document.getElementById('reset').onclick = this.shuffleArray.bind(this);
    }
  }, {
    key: "sort",
    value: function sort() {
      debugger;
      document.getElementById('sort').onclick = this.algorithm.bind(this);
    }
  }, {
    key: "algorithm",
    value: function algorithm() {
      this.algorithmType = document.getElementById('algorithm-type').value;
      this.algorithmInput = document.getElementById('algorithm').value;
      debugger;

      switch (true) {
        case this.algorithmType === 'Sorting' && this.algorithmInput === "Bubble Sort":
          this.bubbleSort(this.array);
          break;

        case this.algorithmType === 'Sorting' && this.algorithmInput === "Insertion Sort":
          return this.insertionort(this.array);

        case this.algorithmType === 'Sorting' && this.algorithmInput === "Merge Sort":
          return this.mergeSort(this.array);

        case this.algorithmType === 'Sorting' && this.algorithmInput === "Quick Sort":
          this.array = this.quickSort(this.array);
          break;

        case this.algorithmType === 'Sorting' && this.algorithmInput === "Selection Sort":
          return this.selectionSort(this.array);
      }

      debugger;
      this.visualizeArray();
    }
  }]);

  return SortingVisualizer;
}(); // -----------------------------------Run Program-------------------------------


var test = new SortingVisualizer();
test.buildArray();
test.shuffleArray();
test.reset();
test.algorithm();
test.sort();

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FsZ29yaXRobV9zb3J0aW5nL2J1YmJsZV9zb3J0LmpzIiwid2VicGFjazovLy8uL3NyYy9hbGdvcml0aG1fc29ydGluZy9pbnNlcnRpb25fc29ydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWxnb3JpdGhtX3NvcnRpbmcvbWVyZ2Vfc29ydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWxnb3JpdGhtX3NvcnRpbmcvcXVpY2tfc29ydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWxnb3JpdGhtX3NvcnRpbmcvc2VsZWN0aW9uX3NvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvaW5kZXguc2NzcyJdLCJuYW1lcyI6WyJidWJibGVTb3J0IiwiYXJyIiwic3dhcHBlZCIsImkiLCJsZW5ndGgiLCJzd2FwIiwiaWR4MSIsImlkeDIiLCJ0ZW1wIiwiaW5zZXJ0aW9uU29ydCIsImN1cnJFbGVtZW50IiwiaiIsIm1lcmdlU29ydCIsIm1pZElkeCIsIk1hdGgiLCJmbG9vciIsImxlZnQiLCJzbGljZSIsInJpZ2h0Iiwic29ydGVkTGVmdCIsInNvcnRlZFJpZ2h0IiwibWVyZ2UiLCJhcnIxIiwiYXJyMiIsIm1lcmdlZCIsImVsZTEiLCJJbmZpbml0eSIsImVsZTIiLCJuZXh0Iiwic2hpZnQiLCJwdXNoIiwicXVpY2tTb3J0IiwicGl2b3QiLCJmaWx0ZXIiLCJlbCIsImxlZnRTb3J0ZWQiLCJyaWdodFNvcnRlZCIsInNlbGVjdGlvblNvcnQiLCJtaW5JZHgiLCJTb3J0aW5nVmlzdWFsaXplciIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiY2xlYXJDYW52YXMiLCJjbGVhclJlY3QiLCJ3aWR0aCIsImhlaWdodCIsImFsZ29yaXRobVR5cGUiLCJ2YWx1ZSIsImFsZ29yaXRobUlucHV0Iiwic2l6ZSIsIk51bWJlciIsInNwZWVkIiwiYXJyYXkiLCJ2aXN1YWxpemVBcnJheSIsInJhbmRvbSIsIndpZHRoUmF0aW8iLCJoZWlnaHRSYXRpbyIsImNhbnZhc0NsZWFyIiwiY29sb3JTdGFydCIsInZhbCIsImJhckhlaWdodCIsImNvbG9yTmV4dCIsImZpbGxTdHlsZSIsImZpbGxSZWN0Iiwic2F2ZSIsIm9uY2xpY2siLCJzaHVmZmxlQXJyYXkiLCJiaW5kIiwiYWxnb3JpdGhtIiwiaW5zZXJ0aW9ub3J0IiwidGVzdCIsImJ1aWxkQXJyYXkiLCJyZXNldCIsInNvcnQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFPLFNBQVNBLFVBQVQsQ0FBb0JDLEdBQXBCLEVBQXlCO0FBQzlCLE1BQUlDLE9BQU8sR0FBRyxJQUFkOztBQUVBLFNBQU1BLE9BQU4sRUFBZTtBQUNiQSxXQUFPLEdBQUcsS0FBVjs7QUFFQSxT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R0FBYSxLQUFLeEIsU0FBTCxDQUFlLEtBQUt3QixLQUFwQixDQUFiO0FBQ0E7O0FBQ0YsYUFBSyxLQUFLTixhQUFMLEtBQXVCLFNBQXZCLElBQW9DLEtBQUtFLGNBQUwsS0FBd0IsZ0JBQWpFO0FBQ0UsaUJBQU8sS0FBS2QsYUFBTCxDQUFtQixLQUFLa0IsS0FBeEIsQ0FBUDtBQVpKOztBQWNBO0FBQ0EsV0FBS0MsY0FBTDtBQUNEOzs7O0tBSUg7OztBQUVBLElBQUlpQixJQUFJLEdBQUcsSUFBSWxDLGlCQUFKLEVBQVg7QUFDQWtDLElBQUksQ0FBQ0MsVUFBTDtBQUNBRCxJQUFJLENBQUNKLFlBQUw7QUFDQUksSUFBSSxDQUFDRSxLQUFMO0FBQ0FGLElBQUksQ0FBQ0YsU0FBTDtBQUNBRSxJQUFJLENBQUNHLElBQUwsRzs7Ozs7Ozs7Ozs7QUNoSkEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGJ1YmJsZVNvcnQoYXJyKSB7XG4gIGxldCBzd2FwcGVkID0gdHJ1ZTtcblxuICB3aGlsZShzd2FwcGVkKSB7XG4gICAgc3dhcHBlZCA9IGZhbHNlO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBpZiAoYXJyW2ldID4gYXJyW2kgKyAxXSkge1xuICAgICAgICBzd2FwKGFyciwgaSwgaSArIDEpXG4gICAgICAgIHN3YXBwZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiBzd2FwKGFyciwgaWR4MSwgaWR4Mikge1xuICBsZXQgdGVtcCA9IGFycltpZHgxXTtcbiAgYXJyW2lkeDFdID0gYXJyW2lkeDJdO1xuICBhcnJbaWR4Ml0gPSB0ZW1wO1xufVxuXG5leHBvcnQgZGVmYXVsdCBidWJibGVTb3J0O1xuXG4iLCJleHBvcnQgZnVuY3Rpb24gaW5zZXJ0aW9uU29ydChhcnIpIHtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgY3VyckVsZW1lbnQgPSBhcnJbaV07XG4gICAgZm9yICh2YXIgaiA9IGkgLSAxOyBqID49IDAgJiYgY3VyckVsZW1lbnQgPCBhcnJbal07IGotLSkge1xuICAgICAgYXJyW2ogKyAxXSA9IGFycltqXTtcbiAgICB9XG4gICAgYXJyW2ogKyAxXSA9IGN1cnJFbGVtZW50O1xuICB9XG4gIHJldHVybiBhcnI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluc2VydGlvblNvcnQ7IiwiZXhwb3J0IGZ1bmN0aW9uIG1lcmdlU29ydChhcnIpIHtcbiAgaWYgKGFyci5sZW5ndGggPD0gMSkgcmV0dXJuIGFycjtcblxuICBsZXQgbWlkSWR4ID0gTWF0aC5mbG9vcihhcnIubGVuZ3RoIC8gMik7XG4gIGxldCBsZWZ0ID0gYXJyLnNsaWNlKDAsIG1pZElkeCk7XG4gIGxldCByaWdodCA9IGFyci5zbGljZShtaWRJZHgpO1xuXG4gIGxldCBzb3J0ZWRMZWZ0ID0gbWVyZ2VTb3J0KGxlZnQpO1xuICBsZXQgc29ydGVkUmlnaHQgPSBtZXJnZVNvcnQocmlnaHQpO1xuXG4gIHJldHVybiBtZXJnZShzb3J0ZWRMZWZ0LCBzb3J0ZWRSaWdodCk7XG59XG5cblxuZnVuY3Rpb24gbWVyZ2UoYXJyMSwgYXJyMikge1xuICBsZXQgbWVyZ2VkID0gW107XG5cbiAgd2hpbGUgKGFycjEubGVuZ3RoIHx8IGFycjIubGVuZ3RoKSB7XG4gICAgbGV0IGVsZTEgPSBhcnIxLmxlbmd0aCA/IGFycjFbMF0gOiBJbmZpbml0eTtcbiAgICBsZXQgZWxlMiA9IGFycjIubGVuZ3RoID8gYXJyMlswXSA6IEluZmluaXR5O1xuXG4gICAgbGV0IG5leHQ7XG4gICAgaWYgKGVsZTEgPCBlbGUyKSB7XG4gICAgICBuZXh0ID0gYXJyMS5zaGlmdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXh0ID0gYXJyMi5zaGlmdCgpO1xuICAgIH1cblxuICAgIG1lcmdlZC5wdXNoKG5leHQpO1xuICB9XG5cbiAgcmV0dXJuIG1lcmdlZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVyZ2VTb3J0OyIsImV4cG9ydCBmdW5jdGlvbiBxdWlja1NvcnQoYXJyKSB7XG4gIGlmIChhcnIubGVuZ3RoIDw9IDEpIHtcbiAgICByZXR1cm4gYXJyO1xuICB9XG5cbiAgbGV0IHBpdm90ID0gYXJyLnNoaWZ0KCk7XG4gIGxldCBsZWZ0ID0gYXJyLmZpbHRlcigoZWwpID0+IGVsIDwgcGl2b3QpO1xuICBsZXQgcmlnaHQgPSBhcnIuZmlsdGVyKChlbCkgPT4gZWwgPj0gcGl2b3QpO1xuXG4gIGxldCBsZWZ0U29ydGVkID0gcXVpY2tTb3J0KGxlZnQpO1xuICBsZXQgcmlnaHRTb3J0ZWQgPSBxdWlja1NvcnQocmlnaHQpO1xuICBkZWJ1Z2dlclxuICByZXR1cm4gWy4uLmxlZnRTb3J0ZWQsIHBpdm90LCAuLi5yaWdodFNvcnRlZF07XG59XG5cbi8vIGV4cG9ydCBkZWZhdWx0IHF1aWNrU29ydDsiLCJleHBvcnQgZnVuY3Rpb24gc2VsZWN0aW9uU29ydChhcnIpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgbWluSWR4ID0gaTtcblxuICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IGFyci5sZW5ndGg7IGorKykge1xuICAgICAgaWYgKGFyclttaW5JZHhdID4gYXJyW2pdKSB7XG4gICAgICAgIG1pbklkeCA9IGpcbiAgICAgIH1cbiAgICB9XG4gICAgc3dhcChhcnIsIGksIG1pbklkeCk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn1cblxuZnVuY3Rpb24gc3dhcChhcnIsIGlkeDEsIGlkeDIpIHtcbiAgbGV0IHRlbXAgPSBhcnJbaWR4MV07XG4gIGFycltpZHgxXSA9IGFycltpZHgyXTtcbiAgYXJyW2lkeDJdID0gdGVtcDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2VsZWN0aW9uU29ydDtcbiIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguc2Nzcyc7XG5pbXBvcnQgeyBidWJibGVTb3J0IH0gZnJvbSAnLi9hbGdvcml0aG1fc29ydGluZy9idWJibGVfc29ydCdcbmltcG9ydCB7IGluc2VydGlvblNvcnQgfSBmcm9tICcuL2FsZ29yaXRobV9zb3J0aW5nL2luc2VydGlvbl9zb3J0J1xuaW1wb3J0IHsgbWVyZ2VTb3J0IH0gZnJvbSAnLi9hbGdvcml0aG1fc29ydGluZy9tZXJnZV9zb3J0J1xuaW1wb3J0IHsgcXVpY2tTb3J0IH0gZnJvbSAnLi9hbGdvcml0aG1fc29ydGluZy9xdWlja19zb3J0J1xuaW1wb3J0IHsgc2VsZWN0aW9uU29ydCB9IGZyb20gJy4vYWxnb3JpdGhtX3NvcnRpbmcvc2VsZWN0aW9uX3NvcnQnXG5cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuY2xhc3MgU29ydGluZ1Zpc3VhbGl6ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy5jbGVhckNhbnZhcyA9IHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcblxuICAgIHRoaXMuYWxnb3JpdGhtVHlwZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGdvcml0aG0tdHlwZScpLnZhbHVlO1xuICAgIHRoaXMuYWxnb3JpdGhtSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxnb3JpdGhtJykudmFsdWU7XG4gICAgdGhpcy5zaXplID0gTnVtYmVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2l6ZVwiKS52YWx1ZSk7XG4gICAgdGhpcy5zcGVlZCA9IE51bWJlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3BlZWQnKS52YWx1ZSk7XG4gICAgXG4gICAgdGhpcy5idWJibGVTb3J0ID0gYnViYmxlU29ydDtcbiAgICB0aGlzLmluc2VydGlvblNvcnQgPSBpbnNlcnRpb25Tb3J0O1xuICAgIHRoaXMubWVyZ2VTb3J0ID0gbWVyZ2VTb3J0O1xuICAgIHRoaXMucXVpY2tTb3J0ID0gcXVpY2tTb3J0O1xuICAgIHRoaXMuc2VsZWN0aW9uU29ydCA9IHNlbGVjdGlvblNvcnQ7XG4gICAgZGVidWdnZXJcbiAgfVxuICBcbiAgXG4gIC8vIHRoaXMuYnVpbGRBcnJheSgpO1xuICAvLyB0aGlzLnNodWZmbGVBcnJheSgpO1xuICAvLyAvLyB0aGlzLmJ1aWxkR3JhZGllbnQoKTtcbiAgLy8gdGhpcy52aXN1YWxpemVBcnJheSgpO1xuICAvLyB0aGlzLnJlc2V0KCk7XG4gIC8vIHRoaXMuYWxnb3JpdGhtcygpO1xuICBcbiAgLy8gLy9hbGdvcml0aG1zXG4gIC8vIHRoaXMucXVpY2tTb3J0ID0gcXVpY2tTb3J0O1xuICBcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQ2FudmFzLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFxuICBjYW52YXNDbGVhcigpIHtcbiAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gIH07XG4gIFxuICBidWlsZEFycmF5KCkge1xuICAgIHRoaXMuYXJyYXkgPSBbXVxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHRoaXMuc2l6ZTsgaSsrKSB7XG4gICAgICB0aGlzLmFycmF5LnB1c2goaSk7XG4gICAgfVxuICAgIC8vIHRoaXMuYnVpbGRHcmFkaWVudCgpO1xuICAgIHRoaXMudmlzdWFsaXplQXJyYXkoKTtcbiAgICBkZWJ1Z2dlclxuICB9XG4gIFxuICBzaHVmZmxlQXJyYXkoKSB7XG4gICAgZm9yIChsZXQgaSA9IHRoaXMuc2l6ZSAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICAgIFt0aGlzLmFycmF5W2ldLCB0aGlzLmFycmF5W2pdXSA9IFt0aGlzLmFycmF5W2pdLCB0aGlzLmFycmF5W2ldXTtcbiAgICB9XG5cbiAgICBkZWJ1Z2dlclxuICAgIHRoaXMudmlzdWFsaXplQXJyYXkoKTtcbiAgfVxuICBcbiAgICAvLyAgYnVpbGRHcmFkaWVudCgpIHtcbiAgICAvLyAgIGxldCBJZHgxID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNyk7XG4gICAgLy8gICBsZXQgSWR4MiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDcpO1xuICAgIC8vICAgaWYgKElkeDIgPT09IElkeDEpIElkeDIgPSAoSWR4MiArIDMpICUgNztcbiAgICBcbiAgICAvLyAgIGNvbnN0IGNvbG9ycyA9IFtcIiNGRjAwMDBcIiwgXCIjRkY4MDAwXCIsIFwiI0ZGRkYwMFwiLCBcIiMwMURGM0FcIiwgXCIjMDBCRkZGXCIsIFwiIzY0MkVGRVwiLCBcIiNGRTJFRjdcIl07XG4gICAgLy8gICBsZXQgZ3JhZGllbnRTdGFydCA9IGNvbG9yc1tJZHgxXTtcbiAgICAvLyAgIGxldCBncmFkaWVudEVuZCA9IGNvbG9yc1tJZHgyXTtcbiAgICAvLyAgIGRlYnVnZ2VyXG4gICAgLy8gICB0aGlzLmdyYWRpZW50ID0gdGhpcy5jdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIDApO1xuICAgIC8vICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsIGdyYWRpZW50U3RhcnQpO1xuICAgIC8vICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsIGdyYWRpZW50RW5kKTtcbiAgICBcbiAgICAvLyB9XG4gICAgXG4gIHZpc3VhbGl6ZUFycmF5KCkge1xuICAgIGxldCB3aWR0aFJhdGlvID0gdGhpcy5jYW52YXMud2lkdGggLyB0aGlzLnNpemU7XG4gICAgbGV0IGhlaWdodFJhdGlvID0gdGhpcy5jYW52YXMuaGVpZ2h0IC8gdGhpcy5zaXplO1xuICAgIFxuICAgIHRoaXMuY2FudmFzQ2xlYXIoKTtcbiAgICBcbiAgICBsZXQgY29sb3JTdGFydCA9IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzNjApKTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2l6ZTsgaSsrKSB7XG4gICAgICBsZXQgdmFsID0gdGhpcy5hcnJheVtpXTtcbiAgICAgIGxldCBiYXJIZWlnaHQgPSB2YWwgKiBoZWlnaHRSYXRpbztcbiAgICAgIGxldCBjb2xvck5leHQgPSAoY29sb3JTdGFydCArIChpICogKDcwIC8gdGhpcy5zaXplKSkpICUgMzYwO1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJoc2woXCIgKyBjb2xvck5leHQgKyBcIiw5MCUsNTAlKVwiO1xuICAgICAgdGhpcy5jdHguZmlsbFJlY3QoaSAqIHdpZHRoUmF0aW8sICB0aGlzLmNhbnZhcy5oZWlnaHQgLSBiYXJIZWlnaHQsIHdpZHRoUmF0aW8sIGJhckhlaWdodCkgXG4gICAgfVxuICAgIHRoaXMuY3R4LnNhdmUoKTtcbiAgICBcbiAgICAvLyB0aGlzLnNodWZmbGVBcnJheSgpO1xuICAgIC8vIGRlYnVnZ2VyXG4gIH07XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLU9wdGlvbnMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFxuICByZXNldCgpIHtcbiAgICBkZWJ1Z2dlclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldCcpLm9uY2xpY2sgPSB0aGlzLnNodWZmbGVBcnJheS5iaW5kKHRoaXMpO1xuICB9XG4gICAgXG4gIHNvcnQoKSB7XG4gICAgZGVidWdnZXJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc29ydCcpLm9uY2xpY2sgPSB0aGlzLmFsZ29yaXRobS5iaW5kKHRoaXMpO1xuICB9XG4gICAgXG4gIGFsZ29yaXRobSgpIHtcbiAgICB0aGlzLmFsZ29yaXRobVR5cGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxnb3JpdGhtLXR5cGUnKS52YWx1ZTtcbiAgICB0aGlzLmFsZ29yaXRobUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsZ29yaXRobScpLnZhbHVlO1xuICAgIGRlYnVnZ2VyXG4gICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICBjYXNlIHRoaXMuYWxnb3JpdGhtVHlwZSA9PT0gJ1NvcnRpbmcnICYmIHRoaXMuYWxnb3JpdGhtSW5wdXQgPT09IFwiQnViYmxlIFNvcnRcIjpcbiAgICAgICAgdGhpcy5idWJibGVTb3J0KHRoaXMuYXJyYXkpO1xuICAgICAgICBicmVha1xuICAgICAgY2FzZSB0aGlzLmFsZ29yaXRobVR5cGUgPT09ICdTb3J0aW5nJyAmJiB0aGlzLmFsZ29yaXRobUlucHV0ID09PSBcIkluc2VydGlvbiBTb3J0XCI6XG4gICAgICAgIHJldHVybiB0aGlzLmluc2VydGlvbm9ydCh0aGlzLmFycmF5KTtcbiAgICAgIGNhc2UgdGhpcy5hbGdvcml0aG1UeXBlID09PSAnU29ydGluZycgJiYgdGhpcy5hbGdvcml0aG1JbnB1dCA9PT0gXCJNZXJnZSBTb3J0XCI6XG4gICAgICAgIHJldHVybiB0aGlzLm1lcmdlU29ydCh0aGlzLmFycmF5KTtcbiAgICAgIGNhc2UgdGhpcy5hbGdvcml0aG1UeXBlID09PSAnU29ydGluZycgJiYgdGhpcy5hbGdvcml0aG1JbnB1dCA9PT0gXCJRdWljayBTb3J0XCI6XG4gICAgICAgIHRoaXMuYXJyYXkgPSB0aGlzLnF1aWNrU29ydCh0aGlzLmFycmF5KTtcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgdGhpcy5hbGdvcml0aG1UeXBlID09PSAnU29ydGluZycgJiYgdGhpcy5hbGdvcml0aG1JbnB1dCA9PT0gXCJTZWxlY3Rpb24gU29ydFwiOlxuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3Rpb25Tb3J0KHRoaXMuYXJyYXkpO1xuICAgIH1cbiAgICBkZWJ1Z2dlclxuICAgIHRoaXMudmlzdWFsaXplQXJyYXkoKTtcbiAgfVxuICBcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1SdW4gUHJvZ3JhbS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxubGV0IHRlc3QgPSBuZXcgU29ydGluZ1Zpc3VhbGl6ZXIoKTtcbnRlc3QuYnVpbGRBcnJheSgpO1xudGVzdC5zaHVmZmxlQXJyYXkoKTtcbnRlc3QucmVzZXQoKTtcbnRlc3QuYWxnb3JpdGhtKCk7XG50ZXN0LnNvcnQoKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9