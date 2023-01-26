'use strict'

const { statSync } = require('fs')

const fileSizeInBytes = (pathToFile) => statSync(pathToFile).size

module.exports = fileSizeInBytes