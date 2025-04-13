gsap.to('.orange',
    {
    rotation: 300,
    x: 300,
    repeat: 3
});

gsap.fromTo('.green',
    {
        x:0,
        y:0
    }, {
        x: 200,
        y: 100,
        rotation: 720,
        duration: 2
    });