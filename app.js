particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

var controller = new ScrollMagic.Controller();

var revealProject = document.getElementsByClassName("project-box");
for (var i=0; i<revealProject.length; i++) {
  new ScrollMagic.Scene({
    triggerElement: revealProject[i],
    offset: 50,
    triggerHook: 0.8,
  })
  .setClassToggle(revealProject[i], "visible")
  .addTo(controller);
}
var aboutReveal =document.getElementsByClassName("about-text");
for (var i=0; i<aboutReveal.length; i++) {
  new ScrollMagic.Scene({
    triggerElement: aboutReveal[i],
    offset: 50,
    triggerHook: 0.8,
  })
  .setClassToggle(aboutReveal[i], "visible")
  .addTo(controller);
}