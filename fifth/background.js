var canvas = document.getElementById("background");
canvas.width = window.innerWidth * 2;
canvas.height = window.innerHeight * 2;

var hydra = new Hydra({
  canvas,
  detectAudio: false,
  enableStreamCapture: false,
});

s0.initCam();
src(s0).out(o2);
render(o2);
