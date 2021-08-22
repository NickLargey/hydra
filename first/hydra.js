var canvas = document.getElementsByTagName("canvas")[0];
canvas.width = window.innerWidth * 2;
canvas.height = window.innerHeight * 2;

var hydra = new Hydra({
  canvas,
  detectAudio: false,
  enableStreamCapture: false,
});

const bitshift = () =>
  osc(10, 0.1, 0.8)
    .rotate(0, 1)
    .pixelate(16, 16)
    .color(-4, 4)
    .invert(2)
    .modulate(noise(5 << 1), 2 >> 1)
    .out(o0);

const mask = () => {
  osc(10, -0.25, 1)
    .color(0, 0, 1)
    .saturate(2)
    .add(noise(2), [0.5, 0.75, 2, 3, 4, 7])
    .mask(noise(25, 2).modulateScale(noise(0.25, 0.05)))
    .modulateScale(osc(6, -0.5, 2).kaleid(50))
    .mult(osc(3, -0.25, 2).kaleid(50))
    .scale(0.5, 0.5, 0.75)
    .rotate(0, 0.25)
    .out(o0);
};

const addition = () => {
  osc(({ time }) => Math.sin(time / 10) * 100)
    .add(shape(3), [0.25, 0.5, 1, 3, 6, 9])
    .modulateScrollX(osc(10), 0.5, 0)
    .modulateScrollY(osc(10), 0.5, 0)
    .out(o0);
  console.log(time);
};

const subtraction = () => {
  osc(({ time }) => window.innerWidth / window.innerHeight - Math.sin(time))
    .rotate(16, 0.5)
    .color(Math.cos(time), Math.sin(time), Math.tan(time))
    .out(o0);

  console.log(time);
};

const mouser = () => {
  osc(() => mouse.x / mouse.y)
    .rotate(
      Math.abs(window.innerWidth / mouse.x) / mouse.y,
      Math.abs(window.innerHeight / mouse.y) * mouse.x
    )
    .kaleid(32, 32)
    .invert(window.innerWidth / mouse.x)
    .color(1, 0.0078, 0.576)
    .mask(voronoi(64, 4, 10).brightness(0.5))
    .mult(shape(3))
    .out(o0);

  window.addEventListener("click", function (e) {
    console.log(mouse.x, mouse.y, window.innerWidth, window.innerHeight);
  });
};
