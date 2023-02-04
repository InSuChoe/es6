/**
 * A trap for `Object.preventExtensions()`.
 * @param target The original object which is being proxied.
 */
const target={};
// 1. 처리에 성공하면 true 를 반환하고, 실패하면 false 를 반환합니다.
console.log(Reflect.preventExtensions(target)); // true
// 2. 프로퍼티를 추가할 수 없는데 추가하고 있습니다.
//    처리 실패하므로 false 가 반환됩니다.
const result = Reflect.defineProperty(target, 'point', {value:100});
console.log(result); // false
