gsap.to('.box', {rotation:360, stagger: .3});
// stagger는 어긋나게 시작

document.querySelectorAll('.box').forEach(function(box) {
    box.addEventListener("click",
        function() {
            gsap.to('.box',{
                duration: 0.5, opacity: 0, y: -100,
                stagger: 0.1, ease: "bakc.in"
        });
    });
});
// 시작과 동시에 순차적으로 사각형들이 회전을 한다.
// 그리고, 사각형들 중에서 임의의 사각형을 클릭하면 순차적으로 사라진다.