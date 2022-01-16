let memberArray = ['egoing', 'graphittie', 'leezche']
console.group('array loop');
let i = 0;
while(i < memberArray.length){
    console.log(i, memberArray[i]);
    i = i + 1;
}
console.groupEnd('array loop');

 
let memberObject = {
    manager :'egoing',
    developer : 'graphittie',
    designer : 'leezche'
}

console.group('object loop');
for(let name in memberObject ){
    console.log(name, memberObject[name]);
};
/*객체 for - in 문 
객체의 원소의 갯수만큼 중괄호 안을 돌게됨
for ( key에 주입될 변수 + in + 객체의 이름)
*주의*
console.log(name, memberObject.name); 시 undefined가 뜬다
. 뒤에 나오는것 변수자체가 아니라 값의 이름이여야 함으로
consoel.log(name, memberObject[name]); 처럼 배열형식으로 써줘야
올바르게 뜬다.  */
console.groupEnd('object loop');