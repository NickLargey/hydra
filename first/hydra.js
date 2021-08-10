const canvas = document.getElementById("c");

// canvas.width = 1024;
// canvas.height = 1024;

var hydra = new Hydra({
  canvas,
  detectAudio: false,
  enableStreamCapture: false,
});

osc(10, 0.1, 0.8)
  .rotate(0, 1)
  .pixelate(16, 16)
  .color(-4, 4)
  .invert(2)
  .modulate(noise(5 << 1), 2 >> 1)
  .out();
