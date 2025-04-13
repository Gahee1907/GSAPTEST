function reset() {
    gsap.set('.green', {x:0, backgroundColor: 'lightgreen', borderRadius: 0});
     // {x:0} -> 실제 위치는 x(200)
}
function from() {
    gsap.from('.green', {x: -200, backgroundColor:'red'});
    // {x:-200}에서 red로 시작해 초기값 x(200)으로 이동
}
function fromto() {
    gsap.fromTo('.green', {x: -100}, {x: 100});
    // {x:-100}에서 시작해 x(100)으로 이동
}
function to() {
    gsap.to('.green', {x:200, borderRadius: 50});
    // x(200)의 위치에서 x(400)으로 이동
}