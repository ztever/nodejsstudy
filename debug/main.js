const modA = require("./modA");
const modB = require("./modB");
// 先引入modA  modA里引入了modB，因此开始执行modB modB里打印了modA，此时modA后面的代码没执行，
//因此打印的值是A，接着将modB赋值为BB，继续执行modA，打印了modB，打印的值是BB，
// 再引入modB，由于是从缓存内获取的，所以不会在执行模块，就不会打印数据了

// 引入模块，遇到require的时候，会暂停执行当前模块，等引入的模块执行完毕后，再接着执行当前模块

// 继续打印modA  modB，值为AA，BB，因为modA，modB是完全加载了
