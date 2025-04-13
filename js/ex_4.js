function reset() {
    gsap.set('div', {x:0, rotation:0});
}
function play() {
    gsap.to('.div1', {rotation: 360, duration: 2, ease: 'power1.inOut'});
    gsap.to('.div2', {rotation: 360, duration: 2, ease: 'power2.inOut'});
    gsap.to('.div3', {rotation: 360, duration: 2, ease: 'power3.inOut'});
    gsap.to('.div4', {rotation: 360, duration: 2, ease: 'bounce.out'});
    gsap.to('.div5', {rotation: 360, duration: 2, ease: 'elastic.out'});
    gsap.to('.div6', {rotation: 360, duration: 2, ease: 'back.out'});
}