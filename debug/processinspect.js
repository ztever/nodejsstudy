const { argv, argv0, execArgv, execPath } = process;

argv.forEach(item => {
  console.log("argv ", item);
});
console.log("argv0 ", argv0);

console.log("execargv ", execArgv);

console.log("execPath ", execPath);

console.log("process cwd", process.cwd());

// console.log("process.env ", process.env);

// node --inspect process.js --test --host a=1

setImmediate(() => {
  console.log("setImmediate");
});

// setInterval(() => {
//   console.log("setinterval");
// }, 0);

setTimeout(() => {
  console.log("settimeout");
}, 0);
process.nextTick(() => {
  console.log("nexttick");
  process.nextTick(() => {
    console.log("nexttick,nexttick");
  });
});

// process.nextTick是当前事件队列的最后面，setImmediate是下一个事件队列的开始，而settimeout 和setinterval是在这两个之间
