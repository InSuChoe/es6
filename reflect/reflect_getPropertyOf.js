/**
 * Returns the prototype of an object.
 * @param target The object that references the prototype.
 */
console.log('=== Reflect.getPrototypeOf() ===');
// 1. Array 오브젝트의 __proto__ 를 반환합니다.
// 2. Array.prototype 에 Array 오브젝트의 메소드가 있으며,
//    Array.__proto__ 에 Function.prototype 의 메소드가 있습니다.
// 3. __proto__ 를 반환하므로, Function.prototype 이 반환됩니다.
// 4. 사용하는 오브젝트의 prototype 과 __proto__ 구조가 연상되어야 합니다.
let proto = Reflect.getPrototypeOf(Array);
// 5. true
console.log(proto === Function.prototype); // true
// 6. false
console.log(proto === Array.prototype); // false
console.log();

// 7. Array 인스턴스를 생성하면,
//    list.__proto__에 Array.prototype 의 메소드가 있습니다.
const list = [];
// 8. proto 에 list.__proto__가 할당됩니다.
proto = Reflect.getPrototypeOf(list);
// 9. proto 와 Array.prototype 이 같습니다.
console.log(proto === Array.prototype); // true
console.log();
console.log('=== __proto__ 반환 ===');
// 1. Array.prototype.__proto__을 반환합니다.
//    여기에 빌트인 Object.prototype 의 메소드가 있습니다.
proto = Reflect.getPrototypeOf(Array.prototype);
// 2. map()은 Array.prototype 에 있으므로 undefined 가 반환됩니다.
console.log(proto.map); // undefined
// 3. hasOwnProperty()는 Object.prototype 의 메소드로 Array.prototype.__proto__에 있습니다.
console.log(proto.hasOwnProperty); // [Function: hasOwnProperty]
