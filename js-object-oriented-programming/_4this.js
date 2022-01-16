const kim = {
    name : 'kim',
    first : 10,
    second : 20,
    sum : function() {
        return this.first+this.second; // kim.first + kim.second도 작동하나, 객체 이름 kim 이 바뀌면 작동하지 않는다(kim이 더이상 존재하지 않기 때문에)
    }
} //this는 this가 속한 method가 속한 객체를 가르키는 특수한 예약어이다.

// console.log("kim.sum(kim.first,kim.second)", kim.sum(kim.first,kim.second));
console.log("kim.sum(kim.first,kim.second)", kim.sum());