const fs = require("fs");
fs.readFile("./events.js", (err, data) => {
  if (err) {
    console.log("err", err);
  }
  // console.log("data", data.toString());
});
const data2 = fs.readFileSync("./events.js", "utf8"); // 高并发用同步会阻挡其他的用户
// console.log("data2", data2);
fs.writeFile(
  "./text",
  "this is a text",
  {
    encoding: "utf8"
  },
  err => {
    console.log("err", err);
  }
);
fs.writeFile("./text", "this is a text 2", "utf8", err => {
  console.log("err", err);
});
fs.stat("./buffer.js", (err, stat) => {
  if (err) throw err;
  console.log("stat", stat);
});

const fsstream = fs.createReadStream("./buffer.js");
fsstream.pipe(process.stdout);
const ws = fs.createWriteStream("./text.txt");
const timer = setInterval(() => {
  const num = Math.random() * 100;
  if (num > 2) {
    ws.write(num.toString() + "/n");
  } else {
    clearInterval(timer);
    ws.end();
  }
}, 200);
