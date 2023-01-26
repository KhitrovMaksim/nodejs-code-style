"use strict";

const calculatePercentage = (partialValue, totalValue) =>
  Math.round((partialValue / totalValue) * 100);

module.exports = calculatePercentage;
