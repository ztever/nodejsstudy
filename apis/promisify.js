const fs = require("fs");
const promisify = require("util").promisify;
const readFn = promisify(fs.readFile);

readFn("./events.js")
  .then(data => {
    console.log("data", data);
  })
  .catch(err => {
    console.log("err", err);
  });

async function reaFnAsync() {
  try {
    const readData = await readFn("./buffer.js");
    console.log("readData", readData);
  } catch (error) {
    console.log("error", error);
  }
}
reaFnAsync();
