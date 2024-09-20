import Lenis from '@studio-freight/lenis'

// Initialize Lenis
const lenis = new Lenis({
  duration: 1.2,         // scroll duration
  easing: (t) => t,      // easing function
  smooth: true,          // enable smooth scrolling
  smoothTouch: true,     // enable smooth touch scrolling
})

// Scroll update
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
