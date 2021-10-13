var canvas = document.getElementsByTagName("canvas")[0];
canvas.width = window.innerWidth * 2;
canvas.height = window.innerHeight * 2;

var hydra = new Hydra({
  canvas,
  detectAudio: false,
  enableStreamCapture: false,
});

osc(80, -0.1, 0.3)
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
