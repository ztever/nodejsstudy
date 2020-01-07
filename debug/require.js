const test = require("./export");
// import test from "./export";
// require特性 只加载一次，加载后会执行，执行后会被缓存，再次在其他文件引入exportjs，不会console.log this is export js
// 一旦某个模块被循环加载，就指数出已经执行的部分，没执行的部分不会被输出,尽量避免循环引入模块
//  安装babel-cli和babel-preset-env 才能使用import
console.log("test", test);
console.log("testval", test.testVar);
test.testFn();
console.log("test.testFn()", test.testFn()); //不能这么写
