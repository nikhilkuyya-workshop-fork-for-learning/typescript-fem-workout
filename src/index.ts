// @noImplicitAny: false
function add(a: number, b: number): number {
  return a + b
}
/// ---cut---
const result = add(3, 4);
const p = new Promise((res,rej) => res(3));
//                     ^?