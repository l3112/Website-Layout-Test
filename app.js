function splitScroll(){
    // this seems like a library to import, alas.
const controller = new ScrollMagic.controller();

new ScrollMagic.Scene({
    duration: '100%',
    triggerElement: '.about-title',
    triggerHook:  0,
})

.addIndicators()

.addTo(controller);
}

splitScroll();