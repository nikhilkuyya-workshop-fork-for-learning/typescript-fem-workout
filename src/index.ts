// @noImplicitAny: false
function add(a, b) {
  return a + b
}
/// ---cut---
const result = add(3, "4")
const p = new Promise(result)
//                     ^?