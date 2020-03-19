const http2 = require("http2");
const fs = require("fs");
//服务端
const server = http2.createSecureServer({
  key: fs.readFileSync("./密钥.pem"),
  cert: fs.readFileSync("./证书.pem")
});
server.on("error", err => console.error(err));

server.on("stream", (stream, headers) => {
  // 流是一个双工流。
  stream.respond({
    "content-type": "text/html",
    ":status": 200
  });
  stream.end("<h1>你好世界</h1>");
});

server.listen(8443);

//客户端
const client = http2.connect("https://localhost:8443", {
  ca: fs.readFileSync("证书.pem")
});
client.on("error", err => console.error(err));

const req = client.request({ ":path": "/" });

req.on("response", (headers, flags) => {
  for (const name in headers) {
    console.log(`${name}: ${headers[name]}`);
  }
});

req.setEncoding("utf8");
let data = "";
req.on("data", chunk => {
  data += chunk;
});
req.on("end", () => {
  console.log(`\n${data}`);
  client.close();
});
req.end();
