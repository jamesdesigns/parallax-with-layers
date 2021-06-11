let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
.to('.rock', 3, { y: -300})
.to('.man', 3, {y: -200}, '-=3')
.to('.bg1', 3, {y: 50}, "-=3")
.fromTo('.content-images', { opacity: 0 }, { opacity: 1, duration: 3 })
.fromTo(".text", { opacity: 0  }, { opacity: 1, duration: 3 });


let scene = new ScrollMagic.Scene({
  triggerElement: 'section',
  duration: "100%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin('section')
  .addTo(controller);

  