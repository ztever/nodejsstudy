const readLine = require("readline");

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

const unloadChar = "-";
const loadedChar = "=";

rl.question("你想对谁说声hello？ ", answer => {
  let i = 0;
  let time = setInterval(() => {
    if (i > 50) {
      clearInterval(time);
      readLine.cursorTo(process.stdout, 0, 0); //移动光标
      readLine.clearScreenDown(process.stdout); //清楚屏幕
      console.log(`hello ${answer}`);
      process.exit(0);
      return;
    }
    readLine.cursorTo(process.stdout, 0, 1);
    readLine.clearScreenDown(process.stdout);
    renderProgress("saying hello", i);
    i++;
  }, 100);
});

function renderProgress(text, step) {
  const PERCENT = Math.round(step * 2);
  const COUNT = 2;
  const unloadStr = new Array(COUNT * (50 - step)).fill(unloadChar).join("");
  const loadedStr = new Array(COUNT * step).fill(loadedChar).join("");
  process.stdout.write(`${text}:【${loadedStr}${unloadStr}|${PERCENT}%】`);
}
