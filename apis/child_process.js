let cp = require("child_process");

// spawn ： 子进程中执行的是非node程序，提供一组参数后，执行的结果以流的形式返回。
// execFile：子进程中执行的是非node程序，提供一组参数后，执行的结果以回调的形式返回。
// exec：子进程执行的是非node程序，传入一串shell命令，执行后结果以回调的形式返回，与execFile
// 不同的是exec可以直接执行一串shell命令。
// fork：子进程执行的是node程序，提供一组参数后，执行的结果以流的形式返回，与spawn不同，fork生成的子进程只能执行node应用。接下来的小节将具体的介绍这一些方法。
cp.exec("echo hello world", function(err, stdout) {
  console.log("exec stdout", stdout);
});

// 像exec那样，可以直接执行一段shell是极为不安全的，比如有这么一段shell：
// echo hello world;rm -rf
// 通过exec是可以直接执行的，rm -rf会删除当前目录下的文件。exec正如命令行一样，执行的等级很高，执行后会出现安全性的问题，而execFile不同：

// execFile('echo',['hello','world',';rm -rf'])
// 在传入参数的同时，会检测传入实参执行的安全性，如果存在安全性问题，会抛出异常。除了execFile外，spawn和fork也都不能直接执行shell，因此安全性较高。

cp.execFile("echo", ["hello", "world"], function(err, stdout) {
  console.log("execFile", stdout);
});

// spawn同样是用于执行非node应用，且不能直接执行shell，与execFile相比，spawn执行应用后的结果并不是执行完成后，一次性的输出的，而是以流的形式输出。对于大批量的数据输出
// ，通过流的形式可以减少内存的使用。
// cp.exec("cat input.txt | sort | uniq", function(err, stdout, stderr) {
//   console.log("cat input.txt ", stdout);
// });

let cat = cp.spawn("cat", ["input.txt"]);
let sort = cp.spawn("sort");
let uniq = cp.spawn("uniq");

cat.stdout.pipe(sort.stdin);
sort.stdout.pipe(uniq.stdin);
uniq.stdout.pipe(process.stdin);
// console.log("uniq.stdout", uniq.stdout);

// cat.stdout.on("data", data => {
//   console.log(`cat stdout: ${data}`);
// });
sort.stdout.on("data", data => {
  console.log(`sort stdout: ${data}`);
});
uniq.stdout.on("data", data => {
  console.log(`uniq stdout: ${data}`);
});

// 在javascript中，在处理大量计算的任务方面，HTML里面通过web work来实现，使得任务脱离了主线程。
// 在node中使用了一种内置于父进程和子进程之间的通信来处理该问题，降低了大数据运行的压力。node中提供了fork方法，
// 通过fork方法在单独的进程中执行node程序，并且通过父子间的通信，子进程接受父进程的信息，并将执行后的结果返回给父进程。

// 使用fork方法，可以在父进程和子进程之间开放一个IPC(Inter-process comunication)通道，使得不同的node进程间可以进行消息通信。
// 在子进程中：通过process.on('message')和process.send()的机制来接收和发送消息。

// 在父进程中：通过child.on('message')和child.send()的机制来接收和发送消息。

let child = cp.fork("./child");
child.on("message", function(msg) {
  console.log("got a message is", msg);
});
child.send("hello world");
