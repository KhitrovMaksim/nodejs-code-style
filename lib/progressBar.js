"use strict";

const progressBar = (percentageOfCompletion, bytesRead, fileSize) => {
  for (let i = 0; i < 50; i++) {
    process.stdout.write(percentageOfCompletion / 2 < i ? "." : "#");
  }

  process.stdout.cursorTo(49);
  process.stdout.write(
    `\t${percentageOfCompletion}% | ${bytesRead}/${fileSize}`
  );
  process.stdout.cursorTo(0);
};

module.exports = progressBar;
