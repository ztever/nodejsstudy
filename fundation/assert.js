const http = require("http");
// const async_hooks = require("async_hooks");
// const fs = require("fs");
// const hook = async_hooks.createHook({
//   init(asyncId, type, triggerAsyncId, resource) {
//     fs.writeSync(
//       1,
//       `init: asyncId-${asyncId},type-${type},triggerAsyncId-${triggerAsyncId}\n`
//     );
//   },
//   before(asyncId) {
//     fs.writeSync(1, `before: asyncId-${asyncId}\n`);
//   },
//   after(asyncId) {
//     fs.writeSync(1, `after: asyncId-${asyncId}\n`);
//   },
//   destroy(asyncId) {
//     fs.writeSync(1, `destroy: asyncId-${asyncId}\n`);
//   }
// });

// hook.enable();
// console.log("hello");
// const { spawn } = require("child_process");
// const ls = spawn("ls", ["-lh", "/usr"]);

// ls.stdout.on("data", data => {
//   console.log(`stdout: ${data}`);
// });

// ls.stderr.on("data", data => {
//   console.error(`stderr: ${data}`);
// });

// ls.on("close", code => {
//   console.log(`子进程退出，使用退出码 ${code}`);
// });
const cluster = require("cluster");
// console.log("cluster", cluster);
const numCPUs = require("os").cpus().length;
console.log('require("os").cpus().', require("os").cpus());
console.log("numCPUs", numCPUs);
if (cluster.isMaster) {
  console.log(`主进程 ${process.pid} 正在运行`);

  // 衍生工作进程。
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`工作进程 ${worker.process.pid} 已退出`);
  });
} else {
  // 工作进程可以共享任何 TCP 连接。
  // 在本例子中，共享的是 HTTP 服务器。
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end("你好世界\n");
    })
    .listen(8000);

  console.log(`工作进程 ${process.pid} 已启动`);
}
// http
//   .createServer((req, res) => {
//     res.write("hello world");
//     res.end();
//   })
//   .listen(8888, () => {
//     console.log("server is running @port 8888");
//   });
