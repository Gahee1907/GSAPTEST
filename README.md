# GSAPTEST

gsap
library내부에서 구성되어 있는 GSAP interface의 인스턴스를 가리키는 식별자.

Tween class
어떤 속성을 시간에 따라 변화시키는 애니메이션 단위.
하나의 애니메이션은 하나의 Tween. 
하나의 애니메이션을 제어하는 기능이 메소드로 제공.

Timeline class
Timeline은 여러 Tween을 시간 순서대로 묶어서 구성하고 제어할 수 있게 해주는 컨트롤러이다.
즉, 여러 애니메이션을 순차적, 병렬적으로 조합, 타임 라인형 애니메이션 스케줄러이다.

1) gsap.to(target, toVars)
2) gsap.fromTo(target, fromVars, toVars)

- target: 타겟 엘리먼트. CSS 선택ㅈ로 구성
- fromVars: 시작 지점에서의 value를 설정.
- toVars: 종료 지점에서의 value를 설정.
- fromVars & toVars: JavaScript Obect로 구성.

Methods
1) set(targets, vars)
targets엘리먼트에 대한 스타일 값을 vars 자바스크립트 오브젝트의 값들에 맞춰서 셋팅.
return: Tween instance

2) to(targets, vars)
targets엘리먼트에 대한 스타일 값을 vars값들로 애니메이션 진행해서 변화시킴.
return: Tween instance

3) from(targets, vars)
targets엘리먼트에 대한 스타일 값을 vars값에서 애니메이션 진행해서 현재 상태로 변화.
return: Tween instance

4) fromTo(targets, fromvars, tovars)
targets엘리먼트에 대한 스타일 값을 fromvars값에서 tovars갓까지 애니메이션 진행해서 변화시킨다.
return: Tween instance

GSAP method에서 vars값은 JSON 기반이다.
(JavaScriptObject형태로 Notiation 함)

CSS에서의 Style Sheet구성과는 다소 차이가 있다.

vars구성은 JSON 기반이기 때문에 key: value형태로 구성된다.

GSAP method에서 vars값을 JSON형태로 구성할 때 key값을 구성하는 방식을 크게 2가지가 있다.
1) CSS function을 사용하는 방식(shorthand로 구성)
transform: translateX(100px) -> x: 100
transform: rotate(90deg) -> ratation: 90

2) CSS property를 camelCase 형태로 구성
border-radius: 10px -> borderRadius: "10px"

Easing
Easing은 모션 디자인에서 매우 중요한 부분이다.
- power1.inOut
- power2.inOut
- power3.inOut
- bounce.out
- elastic.out
- back.out

Stagger
Stagger는 Tween에 여러 개의 target이 있는 경우 각 애니메이션의 시작 사이에 약간의 지연을 추가한다.
(비틀거리다. 휘청거리다. 어긋나게 배치하다. 출발점을 조금씩 비켜놓다.)

Timeline
Timeline은 Tween및 기타 Timeline의 컨테이너 역할을하는 강력한 시퀀싱도구로, 전체적으로 타임라인을 쉽게 제어하고 타이밍을 정확하게 관리한다.

gsap method, timeline()에 의해서 인스턴스가 만들어지게 된다.

Timelineclass method들은 새로운 Timeline인스턴스를 생성시켜서 시퀀싱을 완성한다.

