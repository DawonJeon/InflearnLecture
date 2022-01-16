//map 함수는 JS엔진내에 이미 정의 되어 있음


console.log([1, 2, 3, 4].map(function(val) {return val*2;}));
/**즉, Array에는 이미 map, filter가 있다.  */

console.log([1, 2, 3, 4].filter(function(val) {return val %2;}));


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

console.log(_map([1, 2, 3, 4], function(v) {return v + 10;}));
/**그런데 굳이 있는 함수들을 왜 만들었을까요?
 * 이미 JS엔진에 있는 map,filter는 메서드이다 
 * 함수가 아니라 메서드이다
 * 즉, 순수함수가 아니고 메서드는 객체상태에 따라 결과가 달라지는 특징이 있다.
 * 그래서 우리가 만든 map, filter와는 생각보다 여러가지 면에서 차이가 있다. 
 * 메서드는 객체지향 프로그래밍이다. 
 * map, filter 함수가아니라 메서드내의 객체이다. (해당 클래스의 인스턴스내에서만 사용가능)
 * 즉, array가 아니면 map과 filter를 사용할 수 없다.
 * 
 * 자바스크립트에는 array가 아닌데 array처럼 사용하는 것들이 굉장히 많다(arraylike)
 * 예를 들어, 제이쿼리 객체 (엘리만트를 찾았을때 리턴된 객체)
 * 제이쿼리 객체는 array가 아니라 arraylike객체이다.
 * 
 * document.querySelectorAll('body')의 네이티브버전 -이것도 배열이 아니고
 * arraylike객체이다. 
 * 
 * ex) consoel.log(document.queruSelectorAll("*").map(function(node){return node.nodeName}))
 * 절대 불가능 왜냐면 객체가 아닌, arraylike객체이기 때문이다.
 * 객체는 객체를 반드시 먼저 생성하고 프로그램이 진행되어야한다. 평가시점이 빡빡해진다. 
 *
 * 함수는 함수를 만들고 객체를 핸들링한다.
 * 함수는 함수가 항상 데이터보다 먼저나온다. 따라서 평가시점이 상태적으로 유연해진다. 
 * 순수함수는 들어오는 인자가 length가 있고 그것이 for문 돌았을때 값이 있으면 사용가능하다고 생각하면 적용가능
 * 순수함수는 arraylike라고 할지라도, 결과를 함수로 바꾸어서 return한다. 
 * 
 * 
 * 
*/