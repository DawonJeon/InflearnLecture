/**1회 map,filter
 * 
 */
var users = [
    { id: 1, name:'ID', age: 36 },
    { id: 2, name:'BJ', age: 32 },
    { id: 3, name:'JM', age: 32 },
    { id: 4, name:'PJ', age: 27 },
    { id: 5, name:'HA', age: 25 },
    { id: 6, name:'JE', age: 26 },
    { id: 7, name:'JI', age: 31 },
    { id: 8, name:'MP', age: 23 },
]

//1. 30세 이상인 users를 거른다
var temp_users = [];
for (var i = 0; i < users.length; i++) {
    if (users[i].age >= 30) {
        temp_users.push(users[i]);
    }
}
console.log(temp_users);


//2. 30세 이상인 users의 names를 수집한다. 
var names = [];
for (var i = 0; i < temp_users.length; i++) {
    names.push(temp_users[i].name);
}
console.log(names);


//3. 30세 미만인 users를 거른다.
var temp_users = [];
for (var i = 0; i < users.length; i++) {
    if (users[i].age < 30) {
        temp_users.push(users[i]);
    }
}
console.log(temp_users);


//4. 30세 미만인 users의 ages를 수집한다.
var ages = [];
for (var i = 0; i < temp_users.length; i++) {
    ages.push(temp_users[i].age);
}
console.log(ages);


/**2. _filter, _map으로 리팩토링 */
// 응용형 함수(=고차함수): 함수가 함수를 인자로 받아서원하는 시점에 평가를 하면서 함수안에서 아는 특정인자를 적용해나가며 로직을 완성해가는 함수
// _filter 함수 만들어보기
function _filter(list, predi) {  //_filter함수의 인자값 배열(객체)list, predi함수
    var new_list = [];
    for (var i = 0; i < list.length; i++) {
        if (predi(list[i])) {   // if문안에 조건문을 predi 함수에게 완전히 위임함
            new_list.push(list[i]);
        }
    }
    return new_list;  //console.log는 외부효과 존재하나 return은 외부효과가 없음
}


var over_30 = _filter(users, function(user) {return user.age >= 30;});
console.log(over_30);

var under_30 = _filter(users, function(user) {return user.age < 30;});
console.log(under_30);



//_map 함수 만들어보기

function _map(list, mapper) {
    var new_list = [];
    for (var i = 0; i < list.length; i++) {
        new_list.push(mapper(list[i])); 
    }
    return new_list;
}


var names = _map(over_30, function(user) {
    return user.name;
});
console.log(names);


var ages = _map(over_30, function(user) {
    return user.age;
});


console.log(_map(_filter(users,function(user) {return user.age >= 30; }),
function(user) {return user.name; }))

console.log(_map(_filter(users,function(user) {return user.age < 30; }),
function(user) {return user.name; }))



// console.log(ages);
// console.log(_filter([1, 2, 3, 4], function(num) {return num % 2}))
// console.log(_filter([1, 2, 3, 4], function(num) {return !(num % 2)}


console.log(_map([1, 2, 3], function(num) {return num *2;}));
/**4회 커링함수
 * 함수의 인자가 다 채워질때까지 기다리다가
 * 함수의 인자가 다 채워지면 본체함수를 실행하는 함수 
 * 
 * @param {*} fn 
 * @returns 
 */
function _curry(fn) {       // 함수의 인자로 함수를 받는다. 
    return function(a, b) {
        return arguments.length == 2 ? 
        fn(a, b) : function(b) {return fn(a, b);} ;
    }
}

function _curryr(fn) {
    return function(a, b) {
        return arguments.length == 2 ? fn(a,b) : function(b) {return fn(b, a); };
    }
}

/**fn(a, b)와 function(b) {return fn(a, b);}가 모두 앞에 return을
 * 달고 있기 때문에 삼항조건식으로 묶을 수 있다. 
 */


var add = _curry(function(a, b) {
    return a + b;
});

var add10 = add(10) ;
console.log( add10(5) );

console.log( add(5)(3) );

var add5 = add(5);
console.log( add5(3) );
console.log( add(10)(3) );
console.log( add(1,2) );
/**본래 add(1,2)는 에러처리 나지만, if(arguments.length ==2)
 * 조건을 넣어주면 정상동작할 수 있게됨
 */


var sub = _curryr(function(a, b) {
    return a-b;
});
console.log( sub(10, 5) );

var sub10 = sub(10);
console.log(sub10(5));

//2

function _get(obj, key) {
    return obj == null ? undefined : obj[key];
}

var user1 = users[0];
console.log(user1);