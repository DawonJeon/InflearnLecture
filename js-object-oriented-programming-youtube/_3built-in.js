console.group("Math")
console.log("Math.PI", Math.PI);
console.log("Math.random()", Math.random()); //객체에 소속된 함수는 method
//Math.random 은 함수이기 때문에 즉시실행 소괄호()가 붙는다. 
console.log("Math.floor(3.9)", Math.floor(3.9));
console.groupEnd("Math");

const MyMath = {
    PI: Math.PI,
    random : function() {
        return Math.random();
    },

    floor: function(val) {
        return Math.floor(val);
    }

}

console.log("MyMath.PI", MyMath.PI);
console.log("MyMath.random()", MyMath.random());
console.log("MyMath.floor(3.9)", MyMath.floor(3.9));

//객체 = 서로 연관된 변수와 함수를 그룹핑하여 이름을 붙인 것.
