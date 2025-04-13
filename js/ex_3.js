function reset() {
    gsap.set(['.pink','.green','.blue'],
        {x:0, opacity:1, rotation: 0, borderRadius: '10px'}
    )};
function play() {
    gsap.to('.pink', {x:200, ratation: 360, duration: .5});
    gsap.to('.green', {x: 200, borderRadius: 50, duration: 1});
    gsap.to('.blue', {x: 200, rotation: 720, duration: 2, opaticy: 0});
}