const { createFile } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
var colors = require("colors");
console.clear();

createFile(argv.b, argv.l, argv.o)
  .then((value) => {})
  .catch((error) => console.log(error));
