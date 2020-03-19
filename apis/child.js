process.on("message", function(msg) {
  console.log("child mes", msg);
  process.send(msg);
});
