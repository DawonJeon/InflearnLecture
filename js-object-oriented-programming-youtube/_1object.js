let memberArray = ['egoing', 'graphittie', 'leezhce']
console.log("memberArray[1]", memberArray[1]);  // 배열은 값에 접근시 대괄호 사용

//객체는 값 각각에 이름이나 특성을 부여하고 싶을때 
let memberObject = {
    manager :'egoing',
    developer : 'graphittie',
    designer : 'leezhce'
}
memberObject.designer = 'leezche';  //객체의 값 수정가능
console.log(memberObject.designer);  //객체는 값에 접근시 점을 사용
console.log("memberObject['designer']",memberObject['designer']);
delete memberObject.manager;  //객체의 값 삭제 가능
console.log('after delete memberObject.manager', memberObject.manager)
