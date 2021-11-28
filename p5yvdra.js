async () => {
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

  osc(5, 0.1, 2)
    .luma(0.7, -0.2)
    .repeat()
    .modulateRepeat(src(s0), 3, 3)
    .modulateScale(src(o0).scale(1.2))
    .mult(shape(4, 0.75))
    .layer(src(s0).invert().scale([1.5, 0.75].ease("sin").fast(0.5)))
    .out();
};
