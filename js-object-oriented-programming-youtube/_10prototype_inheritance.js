/**자바스크립트에서만
 * 클래스-클래스 간의 상속뿐만 아니라
 * 객체-객체 간의 상속가능
 */

var superObj = {superVal: 'super'}
var subObj = {subVal : 'sub'}
subObj.__proto__ =superObj;
console.log('subObj.subval => ', subObj.subVal);
console.log('subObj.superVal => ', subObj.superVal);