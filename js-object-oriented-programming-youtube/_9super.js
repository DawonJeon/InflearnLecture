/**
 * super가 필요한 이유:
 * Person(name, first, second)인데,
 * PersonPlus(name, first, second, third)로 인자를 추가하고 싶을경우
 * 우리는 부모가 있는 성분은 super로 부모 클래스에서 처리하고
 * 남은건 this로 자식 클래스에서 처리함
 */
class Person {
    constructor(name, fisrt, second) {
        this.name=name; 
        this.fisrt=fisrt;
        this.second=second;
    }
    sum() {
        return  this.fisrt+this.second;
    } 
}
//즉, super란 자식class에서 부모class를 가르키는말
class PersonPlus extends Person {
    constructor(name, first, second, third) {
        super(name, first, second);
        this.third = third;
    }
    sum() {
        return super.sum() + this.third;
    } 
    avg() {
        return (this.fisrt+this.second+this.third)/3;
    }
}

let june = new PersonPlus('June', 10, 20, 30);
console.log("june.sum()", june.sum());
console.log("jund.avg()", june.avg());
