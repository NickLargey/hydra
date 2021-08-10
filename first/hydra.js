var hydra = new Hydra({
    canvas: document.getElementById("c"),
    detectAudio: false,
    enableStreamCapture: false,
  });

  osc(10, 0.1, 0.8).rotate(0, 0.1).kaleid().color(-1, 1).out();