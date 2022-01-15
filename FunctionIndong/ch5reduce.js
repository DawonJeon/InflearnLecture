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

console.clear();    //너무 많은 console.log로 결과값을 알아보기 헷갈릴때 



//reduce만들기
/**
 * reduce함수: 원래 들어온 데이터타입을 다른 타입으로 변환하여 return함.
 * filter나 map함수는 array를 받으면 array를 리턴하나
 * reduce함수는 array를 받았다 하더라도 다른 데이터타입으로 변환하여 return함.
 * @param {} list 
 * @param {*} iter 
 * @param {*} memo 
 */

var slice = Array.prototype.slice;
function _rest(list, num) {
    return slice.call(list, num || 1);
}

/**
 * slice는 array만의 특성이기 때문에 list.slice(1)을 사용하면 list를 array만 써야한다. 다른 타입은 절대 못씀
    arraylike객체도 사용하지 못함 (대표적인 arraylike객체)
    ex) var a = document.querySelectorAll('*');
    console.log(a)  -> [html, head, meta, title, script, script, body, script]
    a.slice -> undefined
    a.slice(1) -> TypeError : a.slice is not a function
    ##### a에 slice를 적용하는 깜찍한 방법 #####
    var slice = Array.prototype.slice;
    slice.call(a, 2);   
    이때, a를 this로 사용해서 a를 불러와 복사된 객체에서 2개를 잘라서 array형태로 return함.
    console.log(slice.call(a,2));  -> [meta, title, script, script, body, script]
 */
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

console.log(_reduce([1, 2, 3, 4], add, 0));

/** 
 * 결론적으로 말하자면 _reduce함수내에 파라미터로 1. 배열 / 2. 함수 / 3. 최초점수
 * 
 * memo = add(0,1)
 * memo = add(memo, 2);
 * memo = add(memo, 3);
 * return memo;
 * */

 console.log(_reduce([1, 2, 3], add));
