/**
 * Returns a value that indicates whether new properties can be added to an object.
 * @param o Object to test.
 */
// Object.seal(), Object.freeze(), Object.preventExtensions() 함수를 실행한 상태이면, false 를 반환합니다.
const target = {point: 100};
// target 오브젝트에 프로퍼티를 추가할 수 있으므면 true 를 반환하고, 추가할 수 없으면 false 를 반환합니다.
console.log(Reflect.isExtensible(target)); // true

Reflect.preventExtensions(target);
console.log(Reflect.isExtensible(target)); // false