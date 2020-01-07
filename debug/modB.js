module.exports.modB = "B";
const modA = require("./modA");
console.log("modeB log modA", modA.modA);
module.exports.modB = "BB";
