/**
 * pipe함수: 두개의 함수를 연속적으로 시행하는 함수를 리턴하는 함수
 * reduce로 축약을 하는데, 함수들이라는 배열을 통해서 인자를 연속적으로 적용한 최종결과로 축약하는 함수 
 */


function _pipe() {      //pipe함수는 함수를 리턴하기 때문에, pipe()를 실행했을때 결과는 함수이다. 
    var fns = arguments;    // arguments로 여러개의 함수를 받는다.
    return function(arg) {         //_pipe()실행 시 return되는 것은 함수!
        return _reduce(fns, function(arg, fn) {
            return fn(arg);
        }, arg);            //나중에 실행되었을때 결과는 _reduce()함수적용 즉, f1(1)에서 1이 arg로 들어간다. (pipe실행시 리턴은 function(arg)이므로 f1(1)하면 1이 arg이됨 )
    }
}

function _reduce(list, iter, memo) {
    if (arguments.length == 2) {
        memo = list[0];
        // list = list.slice(1);            위의 설명 참조. list.slice(1)로 하면 array만 함수에 적용가능함.
        list = _rest(list);    
    }
    _each(list, function(val) {
        memo = iter(memo, val);
    });
    return memo;
}

function _each(list, iter) {
    for (var i = 0; i < list.length; i++){
        iter(list[i]);
    }
    return list;
}

var slice = Array.prototype.slice;
function _rest(list, num) {
    return slice.call(list, num || 1);
}

function _go(arg) {
    var fns = _rest(arguments);
    return _pipe.apply(null, fns)(arg);
}

var f1 = _pipe(
    function(a) {return a + 1; },  // 1 + 1
    function(a) {return a * 2; },
    function(a) {return a * a; })  

console.log( f1(1) );



/**_go 함수
 * 첫번째 인자로는 인자로 받고
 * 두번째 인자부터 함수들을 받아서
 * 결과를 바로 즉시시행하는 함수
 */

 _go(1,
    function(a) {return a + 1; },
    function(a) {return a * 2; },
    function(a) {return a * a; },
    console.log);



 //명령형 코드로 짯던것들 함수형으로 다시 바꿔보기 map, filter함수_get함수

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


function _filter(list, predi) {  //_filter함수의 인자값 배열(객체)list, predi함수
    var new_list = [];
    _each(list, function(val) {
        if (predi(val)) new_list.push(val);
    });
    return new_list;  //console.log는 외부효과 존재하나 return은 외부효과가 없음
}
    
function _map(list, mapper) {
    var new_list = [];
    _each(list, function(val) {
        new_list.push(mapper(val)); 
    });
    return new_list;
}

function _get(obj, key) {
    return obj == null ? undefined : obj[key];
}
    
function _map(list, mapper) {
    var new_list = [];
    for (var i = 0; i < list.length; i++) {
        new_list.push(mapper(list[i])); 
    }
    return new_list;
}

console.log(
    _map(
    _filter(users, function(user) {return user.age >= 30; }),
    _get('name')));

console.log(
    _map(
        _filter(users,function(user) {return user.age < 30; }),
        _get('age')));