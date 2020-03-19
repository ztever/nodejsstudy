const readLine = require("readline");
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "请输入> "
});
rl.prompt();
// rl.question("你喜欢node.js吗？", res => {
//   console.log("您的回答是 " + res);
//   // rl.close();
// });
rl.on("line", line => {
  console.log("lie", line);
  switch (line.trim()) {
    case "hello":
      console.log("world!");
      break;
    default:
      console.log("your input is " + line);
  }

  rl.setPrompt("你会用了吗？ ");
  rl.prompt();
  // rl.close("close");
}).on("close", data => {
  console.log("bye bye " + data);
  process.exit(0);
});
