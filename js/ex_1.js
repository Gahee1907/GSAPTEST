function reset() {
    gsap.set('.green', {x:0}); 
    //{x:0} -> 실제 위치는 x(200)
}
function play() {
    gsap.to('.green', {x: 200, duration: .5})};
    // {x: 200} -> x(400)으로 이동