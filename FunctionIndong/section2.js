// function _curry(fn) {       // 함수의 인자로 함수를 받는다. 
//     return function(a, b) {
//         return arguments.length == 2 ? 
//         fn(a, b) : function(b) {return fn(a, b);} ;
//     }
// }

function _curryr(fn) {
    return function(a, b) {
        return arguments.length == 2 ? fn(a,b) : function(b) {return fn(b, a); };
    }
}

var _get = _curryr(function(obj, key) {
    return obj == null ? undefined : obj[key];
});



function _filter(list, predi) {  //_filter함수의 인자값 배열(객체)list, predi함수
    var new_list = [];
    _each(list, function(val) {
        if (predi(val)) new_list.push(val);
    });
    return new_list;  //console.log는 외부효과 존재하나 return은 외부효과가 없음
}

var add = _curry(function(a, b) {
    return a + b;
});

function _map(list, mapper) {
    var new_list = [];
    _each(list, function(val) {
        new_list.push(mapper(val)); 
    });
    return new_list;
}


function _each(list, iter) {
    for (var i = 0; i < list.length; i++){
        iter(list[i]);
    }
    return list;
}

//6. _each의 외부 다형성 높이기
    // 1. _each에 null 넣어도 에러 안나게 
_each(null, console.log);
console.log(_filter(null, function(v) {return v;}));

_go([1, 2, 3, 4],
    _filter(function(v) {return v % 2;}),
    _map(function(v) {return v*v}),
    console.log);


    //2. _keys 만들기
console.log(Object.keys({ name: 'ID', age : 33}) );
console.log(Object.keys([1, 2, 3, 4]  ));   //array도 object이기 때문에 결과값이 나옴
console.log(Object.keys(10) );   //숫자도 결과값이 나옴
console.log(Object.keys(null) );   //null은 error가 나옴

function _is_object(obj) {
    return typeof obj == 'object' && !!obj;
}

function _keys(obj) {
    return _is_object(obj) ? Object.keys(obj) : []; //먼저 obj인지 확인하고 true일경우에만 Object.key리턴 false는 빈배열리턴
}

// obj && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype 