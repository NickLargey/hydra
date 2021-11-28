var canvas = document.getElementById("c");
canvas.width = window.innerWidth * 2;
canvas.height = window.innerHeight * 2;

var hydra = new Hydra({
  canvas,
  detectAudio: false,
  enableStreamCapture: false,
});

const first = () => {
  osc(1, -0.1, 0.3)
    .diff(osc(60, 0.01))
    .modulateScale(
      noise(2.5, 0.25).modulateScale(osc(15).rotate(() => Math.sin(time / 2))),
      0.6
    )
    .color(7, 220, 220)
    .contrast(1)
    .add(src(o0).modulate(o0, 0.04), 0.6)
    .invert()
    .brightness(0.01)
    .contrast(1)
    .modulateScale(osc(2), -0.1)
    .out();
};

const test = () => {
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
