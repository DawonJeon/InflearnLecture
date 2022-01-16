function Person(name, first, second) {
    this.name = name,
    this.first = first,
    this.second = second
}

Person.prototype.sum = function() {
    return 'prototype : ' + (this.first+this.second);
}
//생성자함수가 공통적으로 사용하는 함수를 가지면 얼마나 좋을까?

let kim = new Person('kim', 10, 20);
        /*prototype없이 하나하나 method변경시
        밑의 코드를 반복해서 넣어야 함.
        kim.sum = function() {
            return 'modified : ' + (this.first+this.second);
        }*/
//1억개의 객체중 kim이라는 객체의 method만 특별하게 호출원할때
kim.sum = function() {
    return 'this : ' + (this.first+this.second);
}

let lee = new Person('lee', 10, 10);
console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());