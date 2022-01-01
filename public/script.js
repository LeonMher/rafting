gsap.registerEffect({
    name: "fade",
    defaults: {duration: 2}, //defaults get applied to the "config" object passed to the effect below
    effect: (targets, config) => {
        return gsap.to(targets, {duration: config.duration, opacity: 0});
    }
});

//now we can use it like this:
//gsap.effects.fade(".box");

document.querySelectorAll(".test").forEach(function(box) {
  box.addEventListener("mouseenter", function() {
    gsap.effects.fade(this);
  });
});

gsap.registerPlugin(ScrollTrigger); 


gsap.to('.moveIt', {
    scrollTrigger: ".moveIt",
    
    rotationX: 45, 
    scaleX: 1.8, 
    scaleY: 1.8, 
    z: 300
    
})

gsap.to('.moveIt', {
    scrollTrigger: {
     trigger: ".moveIt",
     toggleActions: "restart pause reverse pause",
     start: "top center",
     end: "top 100px",
     scrub: true
    },
    duration:1,
    rotationX: 45, 
    scaleX: 1.8, 
    scaleY: 1.8, 
    z: 300
    
})


gsap.to('.shiftIt', {
  scrollTrigger:{
    trigger:".shiftIt",
    toggleActions:"restart pause reverse pause",
    start:"top center",
    end:"top 100px",
    scrub: true

},
x:-400,


})

gsap.to('.raftingSvg',{
  scrollTrigger:{
    trigger:".thirdSection",
    toggleActions: "restart pause reverse pause",
    start: "top center",
    end: "top 100px",
    scrub:true
  },

  duration:9.5,
  x:700,
  rotation:-10
})


gsap.to('.waterSvg',{
  scrollTrigger:{
    trigger:".thirdSection",
    toggleActions: "restart pause reverse pause",
    start: "top center",
    end: "top 100px",
    scrub:true
  },

  duration:12.5,
  x:400,
  
})
