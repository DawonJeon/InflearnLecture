/*class= 객체를 만드는 공장
생성자함수(constructor)=객체가 생성될때 가져야할 기능들을 자동으로 설정해줌
클래스(class)=
*/

class Person {
    constructor(name, fisrt, second) {
        this.name=name; //이 사례가 객체가 생성되는 과정에서 constructor가 실행됨을 보여줌
        this.fisrt=fisrt;
        this.second=second;
    }
    sum() {
        return 'prototype : ' +(this.fisrt+this.second);
    }  //같은 class에 속한 모든 객체가 공유하는 함수
}
/**
 * 두번째 방법: constructor안에 바로 method 넣기
 */

/**class에 method 추가하는 방법
 * 첫번째 : 생성자 함수와 동일한 방법
 * 객체.prototype.함수이름 = function() {~}
 */
// Person.prototype.sum = function() {
//     return 'prototype : ' +(this.first + this.second);
// }

//클래스 = 객체가 생성되기 전에 자동으로 먼저 생성되도록 약속되어있는 constructor.


let kim = new Person('kim', 10, 20);
//1억개의 객체중 kim 객체의 sum 함수만 다르게 동작시키고 싶을때
kim.sum = function() {
    return 'this : '+ (this.fisrt+this.second);
}
/**자바스크립트 엔진은 가장 먼저 각 객체의 함수를 먼저 들여다보고
 * 없으면 그 다음에 클래스 내부의 함수를 본다. 
 */
console.log("kim.sum()", kim.sum());

// console.log('kim', kim);
/**클래스 내에 method를 만들때는 
 * function이란 키워드를 쓰지 않는다. 
 * 객체를 만들기 전에 객체의 초기상태를 지정하기 위한 함수 
 * 그 함수의 이름 = constructor()
 * 객체가 생성되는 과정에서 constructor가 실행됨 */

// let kim = new Person();
// console.log('kim', kim);
// kim.sum = function() {
//     return 'this : ' + (this.first+this.second);
// }

let lee = new Person('lee', 10, 10);
console.log("lee.sum()", lee.sum());