let tw = gsap.to('div',
    {x: 400, duration: 3, rotation: 540, paused: true}
);

function play() { tw.play();}
function pause() { tw.pause();}
function resume() { tw.resume();}
function reverse() { tw.reverse();}
function restart() { tw.restart();}