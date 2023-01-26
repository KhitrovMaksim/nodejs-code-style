'use strict'

const processFileLineByLineWithProgressBar = require('./lib/processFileLineByLineWithProgressBar')
const processFileLineByLineWithCliProgressBar = require('./lib/processFileLineByLineWithCliProgressBar')

// Own implementation.
// processFileLineByLineWithProgressBar('1000kb.txt').catch(console.error)

// Implementation with CLI-Progress package.
processFileLineByLineWithCliProgressBar('free_company_dataset.csv').catch(console.error)





