function Person(name, first, second, third) {
    this.name = name,
    this.first = first,
    this.second = second,
    this.third = third,
    this.sum = function() {
        return this.first+this.second+this.third; 
    }
}

var kim = new Person('kim', 10, 20, 30);
var lee = new Person('lee', 10, 10, 10);

// console.log("kim.sum(kim.first,kim.second)", kim.sum(kim.first,kim.second));
console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());

let d1 = new Date('2022-01-16'); //new라는 단어는 객체를 만들어서 우리에게 return해준다. Date는 함수이다.
console.log('d1.getFullYear()', d1.getFullYear());
console.log('d1.getMonth()', d1.getMonth()); //Month는 0 부터 세기때문에 1월이면 0이 return된다.

console.log('Date', Date); //Date [Function: Date]


function Person() {
    this.name = 'kim',
    this.first = 10,
    this.second = 20,
    this.third = 30,
    this.sum = function() {
        return this.first+this.second+this.third; 
    }
}

console.log('Person()', Person());  // undefined . 아무것도 return하지 않는다
// constructor (new가 붙어있으면 생성자 함수라고 부름.)
console.log('new Person()', new Person()); //new를 붙여서 실행하면 완전히 달라짐. 객체를 생성하여 우리에게 보여줌



