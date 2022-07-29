var canvas = document.getElementsByTagName("canvas")[0];
canvas.width = window.innerWidth * 2;
canvas.height = window.innerHeight * 2;

var hydra = new Hydra({
  canvas,
});

// s0.initVideo("C:\\Users\\stops\\Desktop\\JavaScript\\hydra\\hydraVideos/Parker Solar Probe.mp4");
// s1.initVideo("C:\\Users\\stops\\Desktop\\JavaScript\\hydra\\hydraVideos\\NEIN.mp4");
// s2.initVideo("C:\\Users\\stops\\Desktop\\JavaScript\\hydra\\hydraVideos\\asdg.mp4");
// s3.initVideo("C:\\Users\\stops\\Desktop\\JavaScript\\hydra\\hydraVideos\\SMASH.mp4");
const vidLoad = () => {
  s1.initVideo(
    "C:\\Users\\stops\\Desktop\\JavaScript\\hydra\\hydraVideos\\NEIN.mp4"
  );
  s2.initVideo(
    "C:\\Users\\stops\\Desktop\\JavaScript\\hydra\\hydraVideos\\kefkaLife.mp4"
  );
  s3.initVideo(
    "C:\\Users\\stops\\Desktop\\JavaScript\\hydra\\hydraVideos\\Hacking.ogv"
  );

  console.log("vids loaded");
};
const p = () => {
  s0.initVideo(
    "C:\\Users\\stops\\Desktop\\JavaScript\\hydra\\hydraVideos\\pepsimanLV1NA.mp4"
  );
  src(s0)
    .diff(
      voronoi(8, 2, 1)
        .brightness(0.1)
        .invert(() => (2 * Math.PI) / 100)
    )
    .layer(
      src(o0)
        .rotate(({ time }) => -(time % 360), 0.05)
        .posterize(-5)
    )
    .blend(o1)
    .out();
  noise(2).out(o1);
  render(o1);
  speed = 0.25;
};

// .scale(({time})=>Math.sin(time/4)*0.5)
// .scrollX(({time}) => Math.cos(time),.25)
// .scrollY(({time}) => Math.sin(time))

const m = () => {
  src(s1)
    .saturate(8)
    .shift(
      () => Math.cos(time ** 2) / 30,
      () => Math.cos(time >> 2) / 30,
      () => Math.cos(time) / 30
    )
    .out();
};

const k = () => {
  src(s2)
    .invert()
    .luma((Math.PI / time) * 0.1, 0.1)
    .posterize(5)
    .mult(
      shape(5)
        .modulateScale(src(o1).add(src(o0).kaleid(6).scale(0.02)), 5, 0.2)
        .scrollX(() => Math.Sin(time) / 2)
        .scrollY(() => Math.cos(time) / 6)
      //.rotate(() => time / (2 * Math.PI))
    )
    .out();
};

const h = () => {
  src(s3)
    .luma()
    .hue(0.01)
    .modulateHue(src(o1).hue(0.2).posterize(-1).contrast(0.33), 2)
    .layer(src(o1).luma().mult(gradient(1)))
    .out();
};

const o1 = () => {
  src(o0)
    .saturate(1.01)
    .scale(0.999)
    .color(1.01, 1.01, 1.01)
    .hue(0.001)
    .modulateHue(src(o1).hue(0.3).posterize(-1).contrast(0.7), 0.2)
    .layer(src(o1).luma().mult(voronoi(3).saturate(0.9)))
    .out(o0);
  noise(3, 0.2).rotate(1, 0.05).layer(src(o0).scrollX(0.02)).out(o1);
  render(o0);
  speed = 0.001;
};

const o2 = () => {
  src(o0)
    .pixelate(16)
    .modulateHue(
      src(o1)
        .hue(({ time }) => (Math.PI % time) * 0.01)
        .invert(16),
      0.05,
      0.2
    )
    .layer(src(o1).diff(noise(128, 0.5).posterize(-4)))
    .out(o1);
  noise(4, 0.2).rotate(2, 0.32).layer(o1).scrollY(0.02).scrollX(0.02).out(o1);
  render(o1);
};
const o3 = () => {
  src(o0)
    .layer(
      osc(30, 0.1, 0.5)
        .hue([0.1, 0, 0.5, 0.8].smooth())
        .mask(
          shape(200, 0.5, 0)
            .kaleid([3, 2, 1, 0, 8].smooth().fast(0.3))
            .scale(0.3)
        )
        .rotate(() => (time * Math.PI) / 4)
        .repeat([2, 4, 1].smooth(), [2, 4, 1].smooth())
        .modulate(osc(10))
        .rotate(() => (time * Math.PI) / 4)
    )
    .out();
};

const o4 = () => {
  //Pixelscape
  //Marianne Teixido
  //https://github.com/MarianneTeixido
  src(o0)
    .saturate(1.01)
    .scale(0.999)
    .color(1.01, 1.01, 1.01)
    .hue(0.01)
    .modulateHue(src(o1).hue(0.3).posterize(-1).contrast(0.7), 2)
    .layer(src(o1).luma().mult(gradient(1).saturate(0.9)))
    .out(o0);
  noise(1, 0.2).rotate(2, 0.5).layer(src(o0).scrollX(0.2)).out(o1);
  render(o0);
};

const o5 = () => {
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

// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// CNDSD
// http://malitzincortes.net/
// crazy squares

shape(4, (0.01, () => 0.2 + a.fft[2]), 1)
  .mult(osc(1, 1).modulate(osc(5).rotate(1.4, 1), 3))
  .color(1, 2, 4)
  .saturate(0.2)
  .luma(1.2, 0.05, (5, () => 2 + a.fft[3]))
  .scale(0.6, () => 0.9 + a.fft[3])
  .diff(o0) // o0
  .out(o0); // o1

// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
//Hydra Glitchy Slit Scan
//Flor de Fuego
//https://flordefuego.github.io/
s0.initCam();
src(s0)
  .saturate(2)
  .contrast(1.3)
  .layer(src(o0).mask(shape(4, 2).scale(0.5, 0.7).scrollX(0.25)).scrollX(0.001))
  .modulate(o0, 0.001)
  .out(o0);

// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
//corrupted screensaver
//by Ritchse
//instagram.com/ritchse

voronoi(350, 0.15)
  .modulateScale(osc(8).rotate(Math.sin(time)), 0.5)
  .thresh(0.8)
  .modulateRotate(osc(7), 0.4)
  .thresh(0.7)
  .diff(src(o0).scale(1.8))
  .modulateScale(osc(2).modulateRotate(o0, 0.74))
  .diff(
    src(o0)
      .rotate([-0.012, 0.01, -0.002, 0])
      .scrollY(0, [-1 / 199800, 0].fast(0.7))
  )
  .brightness([-0.02, -0.17].smooth().fast(0.5))
  .out();

// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// Glitch River
// Flor de Fuego
// https://flordefuego.github.io/
voronoi(8, 1)
  .mult(
    osc(10, 0.014, () => Math.sin(time) * 3)
      .saturate(3)
      .kaleid(200)
  )
  .modulate(o0, 0.5)
  .add(o0, 0.8)
  .scrollY(-0.01)
  .scale(0.99)
  .modulate(voronoi(8, 1.143), 0.002)
  .luma(0.3)
  .out();
speed = 0.1;
