/**
 * A trap for `Object.setPrototypeOf()`.
 * @param target The original object which is being proxied.
 * @param newPrototype The object's new prototype or `null`.
 */

console.log('=== Reflect.setProperty() ===');

class Point {
    getPoint() {
        return 100
    }

};
const target = function () {
};
target.prototype.getPoint = function () {
    return 200;
};
// 1. target 의 __proto__에 Point.prototype 에 연결된 메소드를 설정합니다.
Reflect.setPrototypeOf(target, Point.prototype);
// 2. target.__proto__의 getPoint()가 호출됩니다.
//    target.prototype.getPoint()가 호출되지 않습니다.
console.log(target.getPoint()); // 100