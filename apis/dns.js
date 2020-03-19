const dns = require("dns");

dns.lookup("example.org", (err, address, family) => {
  console.log("地址: %j 地址族: IPv%s", address, family);
});
dns.lookup("baidu.com", (err, address, family) => {
  console.log("baidu 地址: %j 地址族: IPv%s", address, family);
});
// 地址: "93.184.216.34" 地址族: IPv4
dns.resolve4("baidu.com", (err, addresses) => {
  if (err) throw err;

  console.log(`resolve4 地址: ${JSON.stringify(addresses)}`);

  addresses.forEach(a => {
    dns.reverse(a, (err, hostnames) => {
      if (err) {
        throw err;
      }
      console.log(`地址 ${a} 逆向到: ${JSON.stringify(hostnames)}`);
    });
  });
});
