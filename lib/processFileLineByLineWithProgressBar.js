"use strict";

const { createReadStream } = require("fs");
const { createInterface } = require("readline");

const fileSizeInBytes = require("./fileSizeInBytes");
const calculatePercentage = require("./calculatePercentage");
const progressBar = require("./progressBar");

const processFileLineByLineWithProgressBar = async (fileName) => {
  const file = createReadStream(fileName);
  const fileSize = fileSizeInBytes(fileName);
  let bytesRead = 0;
  let percentage = 0;

  const readline = createInterface({
    input: file,
    crlfDelay: Infinity,
  });

  readline.on("line", () => {
    bytesRead = file.bytesRead;
    percentage = calculatePercentage(bytesRead, fileSize);
    progressBar(percentage, bytesRead, fileSize);
  });

  readline.on("close", () => {
    process.stdout.write("\n");
  });
};

module.exports = processFileLineByLineWithProgressBar;
