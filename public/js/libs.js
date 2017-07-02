window.onload = function() {
  Particles.init({
    selector: '.particles',
    maxParticles: 140,
    color: '#FFFFFF',
    speed: 0.3
  });
};

$.extend($.scrollTo.defaults, {
  duration: 1100,
  margin: true,
  over: {
    top: -0.2
  }
});