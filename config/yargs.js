const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Multiplication base",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "Base must be a number";
    }
    return true;
  })
  .option("l", {
    alias: "limit",
    type: "number",
    demandOption: true,
    describe: "Multiplication limit",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "Limit must be a number";
    }
    return true;
  })
  .option("o", {
    alias: "output",
    type: "boolean",
    default: false,
    describe: "Show table in console",
  }).argv;

module.exports = argv;
