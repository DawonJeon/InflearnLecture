/**
 * DOM: Document Object Model
 * 
 * DOM의 핵심
 * 사용자와 상호작용(interaction) - 사용자는 상호작용 대상의 총칭
 * 동적으로 콘텐츠(contents)표현 - 이를 위한 기반 기술을 제공 
 */


/**
 * html,css 
 * <img src="./image/sea-side.png" id=seaside class=gray alt="바닷가">
 * .gray{filter: grayscale(100%)};
 * 마우스를 클릭할때마다 동적으로 사진이 변화함
 */

const seaside = document.getElementById("seaside");
seaside.onclick = (event) => {
    seaside.classList.toggle("gray");
};

/**
 * 1. const seaside = document.getElementById("seaside");
 *    1) id 속성값인 seaside로 엘리먼트 오브젝트를 생성하여 반환합니다.
 *    2) 반환된 엘리먼트 오브젝트를 seaside 변수에 할당합니다.
 * 
 * 2. seaside.onclick = (event) => {...}
 * 생성한 엘리먼트 오브젝트에 onclick이벤트를 설정합니다.
 * 
 * 3. seaside.classList.toggle("gray");
 *    1) <img>엘리먼트 이미지를 클릭할 때마다
 *    2) class속성에 gray속성값을 토글(추가/삭제)합니다.
 * 
 * 4. 처음에는 <img>엘리먼트의 class속성값에 gray가 있으며
 *    1) gray속성값을 삭제합니다.
 *    2) "filter: grayscale(100%)"가 적용되지 않은 이미지가 표시됩니다.
 * 
 * 5. 다시 이미지를 클릭하면
 *      <img>엘리먼트의 class 속성값에 gray가 없으며
 *    1) gray를 class 속성값에 추가합니다.
 *    2) "filter:grayscale(100%)"가 적용된 이미지가 표시됩니다. 
 */


/**
 * DOM은 종합 예술의 기반
 * 사용자가 참여, 개발자는 연출/감독
 * DOM은 다양한 기술과 "연동"되며 자바스크립트로 통합, 융합
 * DOM은 오로지 프로퍼티와 메서드만 있음 (for문이나 while문이 있는게 아니다)
 * 강좌에서 다루는 DOM 연동 기술
 * HTML, Canvas, SVG, XML
 * 자바스크립트 - Proxy, Promise, Symbol, Class, ArrayBuffer, DataView
 * 자바스크립트 통신관련 - XMLHttpRequest, Fetch, WebWorkers
 * 자바스크립트 엔진관련 - 실행 콘텍스트 개념, Event Loop 개념
 * 서버 - Node.js
 */