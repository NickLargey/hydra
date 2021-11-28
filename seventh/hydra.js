s0.initCam();

shape(({time}) => Math.sin(time)).mult(src(s0)).scrollX(0,.025).scrollY(0,.01).blend(
osc(20, 0.1, 0.8),({time}) => Math.sin(time)).
out()
