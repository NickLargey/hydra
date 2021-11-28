var canvas = document.getElementById("background");
canvas.width = window.innerWidth * 2;
canvas.height = window.innerHeight * 2;

var hydra = new Hydra({
  canvas,
  detectAudio: false,
  enableStreamCapture: false,
});

p1 = new P5({ mode: "WEBGL" });

s0.init({ src: p1.canvas });
mymodel = p1.loadModel(
  "https://cdn.glitch.me/fd55b150-3668-41d0-9622-d8b353506d69%2Fbladeren.stl",
  true
);

p1.hide();

p1.draw = () => {
  p1.background(0, 0, 0, 0);
  p1.rotateX(time / 5);
  p1.rotateY(time / 5);
  p1.scale(5);

  p1.model(mymodel);
};

osc(() => (Math.PI / 2) * Math.cos(15 ^ 9), 0.05, Math.PI / 6)
  .scrollX(() => Math.cos(31 ^ 65793))
  .kaleid(99)
  .modulate(noise(12, 1.5))
  .out(o0);
  