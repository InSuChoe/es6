/**
 * Adds a property to an object, or modifies attributes of an existing property.
 * @param o Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object.
 * @param p The property name.
 * @param attributes Descriptor for the property. It can be for a data property or an accessor property.
 */
console.log('=== Reflect.defineProperty() ===');
let target = {};
// 1. target 에 프로퍼티를 설정합니다.
Reflect.defineProperty(target, 'point', {
    value: 100, writable: true
});
console.log(Object.getOwnPropertyDescriptor(target, 'point')); // { value: 100, writable: true, enumerable: false, configurable: false }
console.log();

console.log('=== Object.defineProperty()  ===')
target = {};
// 1. 처리에 성공하면 Object 를 반환하고, 실패하면 TypeError 가 발생합니다. 따라서 try-catch 를 사용해야 합니다.
Object.defineProperty(target, 'point', {
    value: 100, configurable: false
});
// 2. 처리에 성공하면, true 를 반환하고, 실패하면 false 를 반환합니다. try-catch 를 사용하지 않아도 됩니다.
const result = Reflect.defineProperty(target, 'point', {
    value: 200
});
console.log(result) // false
// 3. point 프로퍼티가 {configurable: false}이므로 에러가 발생하게 되며, false 를 반환했습니다.
// 따라서 100이 200으로 바뀌지 않습니다.
console.log(Reflect.get(target, 'point')); // 100
