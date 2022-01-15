/** 
 * ■ 함수실행단계
 * 호출 전: 함수실행을 위한 기반 환경 설정
 * 함수 호출: 호출하여 함수실행
 * 
 * ■ 함수실행을 위한 기반 환경 설정
 * function(함수) 오브젝트로 생성
 * 스코프 설정(정적 스코프)
 * 이 단계의 키워드는 오브젝트, 프로퍼티
 * 함수의 이름 =프로퍼티 키, function object= 프로퍼티 값
 * 
 * ■ 함수를 호출하여 함수 실행
 * 함수가 실행되는 환경을 만들고
 * 함수 블록의 코드 실행합니다.
 * 실행 콘텍스트(Execution Context)  
 */

const sports = ["체조", "펜싱"];
// console.log(sports);
console.log("1.", sports instanceof Array);     //instanceof Array는 Array오브젝트로 생성한 인스턴스인것을 체크, true출력

const communicate = sports.join(",");           //,로 연결하여 문자열로 반환
console.log("2.", communicate);
console.log("3.", communicate.split(","));      //,를 기준으로 배열로 반환
