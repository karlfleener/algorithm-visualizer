## Algorithm Visualizer

The Algorithm Visualizer is a tool that allows users to visualize how algorithms work under the hood.

Live: https://karlfleener.github.io/algorithm-visualizer/

## Table of Contents

- [Background and Overview](#background-and-overview)
- [Technologies](#Technologies)
- [Features](#features)
- [Code Highlights](#code-highlights)
- [Future Plans](#future-plans)

## Background/Overview

Not sure how a certain algorithm works? Select the algorithm from the dropdown menu and click sort to see the selected algorithm come to life! If you want to visualize a greater amount of elements being sorted, or watch at a different speed, simply adjust the sliders accordingly and the changes take effect in realtime. If at any time you want to see a newly randomized collection of elements click the reset button.

## Technologies

- JavaScript
- HTML5
- Sass
- Canvas for animations
- Git for version control

## Features

* Users can choose from a selection of sorting algorithms to visualize
* Users can increase/decrease amount of elements to sort
* Users can increase/decrease the sorting time
* Users can reset/randomize elements

<div>
  <img width="100%" src="/src/images/algo-demo.gif" alt="demo gif">
</div>

## Code Highlights

- Used generator functions for asynchronous programming. The algorithm pauses once it yields and only continues once when the next iteration is called upon.

```JavaScript
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
```
- This allows Canvas to render each iterative loop in the sorting algorithm, and call for the next loop after.

```JavaScript
  sort() {
    
    let sortArray = this.algorithm();
    if (sortArray === undefined) return;
    const animate = () => {
      let speed = Math.floor(1000 / Number(document.getElementById("speed").value));

      this.drawCanvas();

      if (this.isSorted(this.array)) {
        return;
      } else {
        setTimeout(animate, speed);
        sortArray.next(); // call next iteration of the bubbleSort function
      }
    };
    animate();
  }
```

## Future Plans

* Continue adding sorting algorithms
* Add error Messages
* Add pathfinding algorithms
* Increase amount of ways to visualize
