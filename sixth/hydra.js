var canvas = document.getElementsByTagName("canvas")[0];
canvas.width = window.innerWidth * 2;
canvas.height = window.innerHeight * 2;

var hydra = new Hydra({
  canvas,
  detectAudio: false,
  enableStreamCapture: false,
});

s0.initCam();
src(s0)
  .invert([0, 1].fast(0.25))
  .kaleid(3)
  .shift(
    ({ time }) => Math.sin(time) * 0.2,
    ({ time }) => Math.sin(time) * 0.1,
    ({ time }) => Math.sin(time) * 0.3,
    ({ time }) => Math.sin(time) * 0.25
  )
  .blend(
    voronoi()
      .rotate(({ time }) => (time % 360) / 2)
      .modulate(noise(1, 0.25))
      .scrollX(0, 0.05)
      .scrollY(0.2, 0.001)
      .kaleid(33),
    ({ time }) => Math.sin(time)
  )

  .out();
