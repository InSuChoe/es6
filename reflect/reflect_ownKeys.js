/**
 * A trap for `Reflect.ownKeys()`.
 * @param target The original object which is being proxied.
 */


console.log('=== Reflect.ownKeys() ===');
const sym=Symbol('mySymbol');
const target={};
Object.defineProperties(target,{
    point: {value:100, configurable:false},
    [sym]:{value:200}
});
Reflect.preventExtensions(target);
// 1. target 오브젝트가 확장 불가이지만,
//    모든 프로퍼티 키를 배열로 반환합니다. Symbol 도 반환합니다.
console.log(Reflect.ownKeys(target)); // [ 'point', Symbol(mySymbol) ]

