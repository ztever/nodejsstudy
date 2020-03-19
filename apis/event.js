const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

// const myEmitter = new MyEmitter();
// myEmitter.on("event", () => {
//   console.log("触发事件");
// });
// myEmitter.emit("event");

const myEmitter = new MyEmitter();
myEmitter.on("event", function(a, b) {
  console.log(a, b, this, this === myEmitter);
  // 打印:
  //   a b MyEmitter {
  //     domain: null,
  //     _events: { event: [Function] },
  //     _eventsCount: 1,
  //     _maxListeners: undefined } true
});
myEmitter.emit("event", "a", "b");

// 当使用 eventEmitter.on() 注册监听器时，监听器会在每次触发命名事件时被调用。
// 使用 eventEmitter.once() 可以注册最多可调用一次的监听器。 当事件被触发时，监听器会被注销，然后再调用。
