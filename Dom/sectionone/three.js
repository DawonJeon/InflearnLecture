/**
 * DOM은 인터페이스를 제공
 * DOM 스펙의 Document 인터페이스
 * 
 * interface Document : Node {}
 * 여기서 :은 Document interface에서 Node를 상속받는 것이다.
 * 
 * document는 Document 인터페이스를 오브젝트로 생성한것(document !== Document)
 * 
 * DOM이 인터페이스로 제공하는 것은
 *  1) 특정언어에 의존하지 않기 위한 것
 *  2) DOM 인터페이스의 타입을 언어에 맞도록 변환해야 하기때문
 * 
 * 자바스크립트는 오브젝트로 빌트인 되어 있으므로
 * 오브젝트로 생성하고 변환하는 처리를 하지 않습니다(즉, 바로 사용할 수 있습니다. )
 */

// document.getElementById("dummy");
// console.log(typeof document);
// console.log(document.URL);

/**
 * Host Environment
 * OOP의 Object에 다양한 개념, 형태 등이 포함되어 있으므로
 */

const group = document.getElementById("group");
const list = group.getElementsByTagName("li");
console.log(list[Symbol.toStringTag]);

for(let element of list) {
    console.log(element.id);
};

