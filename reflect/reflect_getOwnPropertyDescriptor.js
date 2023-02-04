/**
 * A trap for `Object.getOwnPropertyDescriptor()`.
 * @param target The original object which is being proxied.
 * @param p The name of the property whose description should be retrieved.
 */
console.log('=== Reflect.getOwnPropertyDescriptor() ===');
const target={};Object.defineProperty(target,'point',{
    value:100, configurable:true
});
// 1. target {value: 100, configurable: true}를 작성했지만, 디폴트 속성도 반환합니다.
const desc=Reflect.getOwnPropertyDescriptor(target,'point');
console.log(desc); // { value: 100, writable: false, enumerable: false, configurable: true }

