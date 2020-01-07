const { EventEmitter } = require("events");
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on("eventName", (a, b) => {
  console.log("触发事件", a, b);
});
myEmitter.emit("eventName", "aa", "bb");
myEmitter.on("error", err => {
  console.error("错误信息");
});
myEmitter.emit("error", new Error("错误"));
// 打印: 错误信息
myEmitter.once("once", () => {
  console.log("once");
});

setInterval(() => {
  myEmitter.emit("once");
}, 300);
