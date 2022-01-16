
class Person {
    constructor(name, fisrt, second) {
        this.name=name; 
        this.fisrt=fisrt;
        this.second=second;
    }
    sum() {
        return 'prototype : ' +(this.fisrt+this.second);
    } 
}

/**상속을 왜쓰는가? (extends)
 * 우리가 평균값을 구하는 avg(){return (this.first+this.second)/2}; 함수를
 * 추가하고 싶으나 class가 남이 짠 라이브러리거나,
 * avg() 함수를 모든 객체에서 쓰기는 부담스러울때 상속을 사용
 */

class PersonPlus extends Person {
    // constructor(name, fisrt, second) {
    //     this.name=name; 
    //     this.fisrt=fisrt;
    //     this.second=second;
    // }
    // sum() {
    //     return 'prototype : ' +(this.fisrt+this.second);
    // } 이 모든 특성이 그대로 상속됨
    avg() {
        return (this.fisrt+this.second)/2;
    }
}
let kim = new PersonPlus('kim', 10, 20);
console.log("kim.sum()", kim.sum());
console.log("kim.avg()", kim.avg());
