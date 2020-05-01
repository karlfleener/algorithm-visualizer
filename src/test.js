N = 100; // Array Size
XYs = 5; // Element Visual Size
Xp = 1; // Start Pos X
Yp = 1; // Start Pos Y
var canvas;
var l = Array.apply(null, {
  length: N,
}).map(Number.call, Number);

Array.prototype.shuffle = function () {
  var i = this.length,
    j,
    temp;
  if (i == 0) return this;
  while (--i) {
    j = Math.floor(Math.random() * (i + 1));
    temp = this[i];
    this[i] = this[j];
    this[j] = temp;
  }
  return this;
};

function map_range(x, in_min, in_max, out_min, out_max) {
  return ((x - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

function rainbow(x) {
  var m = map_range(x, 0, N, 0, 359);
  return "hsl(" + m + ",100%,50%)";
}

function init() {
  canvas = document.getElementById("canvas");
  l.shuffle();
  var sort = bubbleSort(l);
  // an anim function triggered every 60th of a second
  function anim() {
    requestAnimationFrame(anim);
    draw();
    sort.next(); // call next iteration of the bubbleSort function
  }
  anim();
}

function draw() {
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    for (var i = 0; i < l.length; i++) {
      ctx.fillStyle = rainbow(l[i]);
      ctx.fillRect(Xp * i * XYs, Yp * XYs, XYs, XYs);
    }
  }
}

function* bubbleSort(a) {
  // * is magic
  var swapped;
  do {
    swapped = false;
    for (var i = 0; i < a.length - 1; i++) {
      if (a[i] > a[i + 1]) {
        var temp = a[i];
        a[i] = a[i + 1];
        a[i + 1] = temp;
        swapped = true;
        yield swapped; // pause here
      }
    }
  } while (swapped);
}
init();
