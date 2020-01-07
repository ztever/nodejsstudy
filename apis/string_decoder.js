// string_decoder 模块提供了一个 API，用于以保留编码的多字节 UTF-8 和 UTF-16 字符的方式将 Buffer 对象解码为字符串。
const buff = Buffer.from("这是中文字符串");

for (let i = 0; i < buff.length; i += 5) {
  const b = Buffer.allocUnsafe(5);
  buff.copy(b, 0, i);
  console.log("b", b.toString());
}
const { StringDecoder } = require("string_decoder");
const decoder = new StringDecoder("utf8");
for (let i = 0; i < buff.length; i += 5) {
  const b = Buffer.allocUnsafe(5);
  buff.copy(b, 0, i);
  console.log("b", decoder.write(b)); //每三个字符打印一次，不够了，就在下一次打印的时候做拼接，在下一次打印出来
}
