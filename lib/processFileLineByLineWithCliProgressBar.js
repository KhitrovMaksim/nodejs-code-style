"use strict";

const { createReadStream } = require("fs");
const { createInterface } = require("readline");
const progress = require("cli-progress");
const fileSizeInBytes = require("./fileSizeInBytes");

const processFileLineByLineWithCliProgressBar = async (fileName) => {
  const file = createReadStream(fileName);
  const fileSize = fileSizeInBytes(fileName);
  const b1 = new progress.Bar();
  const readline = createInterface({
    input: file,
    crlfDelay: Infinity,
  });

  b1.start(fileSize, 0);

  readline.on("line", () => {
    b1.update(file.bytesRead);
  });

  readline.on("close", () => {
    b1.stop();
  });
};

module.exports = processFileLineByLineWithCliProgressBar;
