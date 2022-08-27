const fs = require("fs");
const colors = require("colors");

const createFile = async (base = 6, limit = 10, showOutput) => {
  try {
    let fileName = `table-${base}.txt`;
    const output = multiplicationTable(base, limit, showOutput);
    fs.writeFileSync(`./output/${fileName}`, output);
    return `table-${fileName} created`;
  } catch (error) {
    return `An erros has occurred: ${error}`;
  }
};

const multiplicationTable = (tabla, limit, showOutput) => {
  let output = "";
  let consoleOutput = "";
  for (let i = 1; i <= limit; i++) {
    output += `${tabla} x ${i} = ${tabla * i}\n`;
    consoleOutput += `${tabla} ${"x".green} ${i} ${"=".green} ${tabla * i}\n`;
  }

  if (showOutput) {
    console.log(`==== Table of ${tabla} ===`);
    console.log(consoleOutput);
  }
  return output;
};

module.exports = {
  createFile,
};
