console.log("this is export js");
const testVar = 100;
function test() {
  console.log("test testvar", testVar);
}
//module.exports 可以直接使用 exports.testVar = testVar 不能写成exports = {var:100}
// exports = testVar;//这种写法是错误的
// module.exports.testVar = testVar;
module.exports.testFn = test;
// export default {
//   testVar,
//   testFn
// };
