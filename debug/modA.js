module.exports.modA = "A";

const modB = require("./modB");
console.log("modeA log modB", modB.modB);
module.exports.modA = "AA";
