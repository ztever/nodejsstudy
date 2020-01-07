const path = require("path");
console.log(path.normalize("/user/local/des")); //将不规范的路径转换成规范的
console.log(path.normalize("/user//local/des"));
// 拼接路径，会主动调用normalize
const joinPath = path.join("/foo", "bar", "baz/asdf", "quux", "..");
console.log("join path", joinPath);
// resolve 将路径或路径片段的序列解析为绝对路径。从右往左处理，直到返回一个结对路径，如果没有绝对路径。会自动加上当前工作目录的路径
const resolvePath = path.resolve("/foo/bar", "./baz");
const resolvePath2 = path.resolve("/foo/bar", "/baz", "./aa");
const resolvePath3 = path.resolve("foo/bar", "./baz/cc", "../dd");
console.log("resolve path", resolvePath);
console.log("resolve path 2", resolvePath2);
console.log("resolve path 3", resolvePath3);

// path.parse() 方法返回一个对象，其属性表示 path 的重要元素。 尾部的目录分隔符将被忽略
const parsePath = path.parse("/user/test/dev/aa.js");
console.log("parsepath", parsePath);

//format() 方法从对象返回路径字符串 如果未指定 `dir`，则使用 `root`。
// 如果提供了 `dir`、 `root` 和 `base`，
// 则返回 `${dir}${path.sep}${base}`。
// `root` 会被忽略。
const formatPath = path.format({
  root: "/ignored",
  dir: "/home/user/dir",
  base: "file.txt"
});
console.log("formatPath", formatPath);

//path.sep
//提供平台特定的路径片段分隔符：
//Windows 上是 \。
//POSIX 上是 /。
console.log("path.sep", path.sep, path.posix.sep);

// pwd process.cwd() 总是返回nodejs 命令执行的路径
// __dirname ,filename 总是返回文件所在的绝对路径
console.log("node cwd", process.cwd());
