var canvas = document.getElementsByTagName("canvas")[0];
canvas.width = window.innerWidth * 2;
canvas.height = window.innerHeight * 2;

var hydra = new Hydra({
  canvas,
  detectAudio: false,
  enableStreamCapture: false,
});

var button = () => s0.initCam();
src(s0)
  .rotate(({ time }) => (time % 360) / 8)
  .modulatePixelate(noise(25, 0.5), 75)
  .add(noise(0.01))
  .color(1, 0.01, 0.2)
  .mask(gradient(0.125).pixelate(16))
  .out(o2);
render(o2);
