// 创建一个长度为 10、且用零填充的 Buffer。
const buf1 = Buffer.alloc(10);
console.log("buf1", buf1);

// 创建一个长度为 10、且用 0x1 填充的 Buffer。
const buf2 = Buffer.alloc(8, 1);
console.log("buf2", buf2);

// 创建一个长度为 10、且未初始化的 Buffer。
// 这个方法比调用 Buffer.alloc() 更快，
// 但返回的 Buffer 实例可能包含旧数据，
// 因此需要使用 fill() 或 write() 重写。
const buf3 = Buffer.allocUnsafe(10);
console.log("buf3", buf3);

// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
const buf4 = Buffer.from([1, 2, 3]);
console.log("buf4", buf4);

// 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
const buf5 = Buffer.from("tést");
console.log("buf5", buf5);

// 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
const buf6 = Buffer.from("tést", "utf8");
console.log("buf6", buf6);

// Buffer.byteLength  长度
console.log("buffer test", Buffer.byteLength("test"));
console.log("buffer 测试", Buffer.byteLength("测试"));
// Buffer.concat
const buff1 = Buffer.from("test");
const buff2 = Buffer.from("asa");
const buff3 = Buffer.from("bbs");
const contactBuffer = Buffer.concat([buff1, buff2, buff3]);
console.log("contact buffer", contactBuffer);
// Buffer.isBuffer
console.log("{} is buffer ", Buffer.isBuffer({}));
console.log("teset is buffer ", Buffer.isBuffer(Buffer.from("test")));
// buffer length
const buff = Buffer.from("this is test!");
console.log("buff this.is test length", buff.length);
const buffAlloc = Buffer.alloc(10);
console.log("buffer alloc", buffAlloc.length);
buffAlloc[2] = 2;
console.log("buffer alloc", buffAlloc.length);
console.log("buff to string", buff.toString("base64"));
//fill
const buffFill = Buffer.allocUnsafe(10);
console.log("bufffill ", buffFill);
console.log("buff fill 10", buffFill.fill(10, 2, 5)); //默认是16进制

// buf.equals
const bufe1 = Buffer.from("ABC");
const bufe2 = Buffer.from("414243", "hex");
const bufe3 = Buffer.from("ABCD");

console.log(bufe1.equals(bufe2));
// 打印: true
console.log(bufe1.equals(bufe3));
// 打印: false

const buf = Buffer.from("this is a buffer");

console.log(buf.indexOf("this"));
// 打印: 0
console.log(buf.indexOf("is"));
// 打印: 2

// 创建两个 `Buffer` 实例。
const bufc1 = Buffer.allocUnsafe(26);
const bufc2 = Buffer.allocUnsafe(26).fill("!");

for (let i = 0; i < 26; i++) {
  // 97 是 'a' 的十进制 ASCII 值。
  bufc1[i] = i + 97;
}

console.log("bufc1", bufc1);

// 拷贝 `buf1` 中第 16 至 19 字节偏移量的数据到 `buf2` 第 8 字节偏移量开始。
bufc1.copy(bufc2, 8, 16, 20);

console.log(bufc2.toString("ascii", 0, 25));
// 打印: !!!!!!!!qrst!!!!!!!!!!!!!
