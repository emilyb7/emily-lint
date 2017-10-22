/* eslint-disable no-console */

const { readFileSync, writeFile, } = require('fs')
const { join, } = require('path')

const config = readFileSync(join(__dirname, '.eslintrc'))

const targetDir = process.argv[2]
const targetFile = join(targetDir, '.eslintrc')

writeFile(targetFile, config, err => {
  if (err) {
    return console.log('error', err)
  }
  console.log('successfully created eslint config in target directory')
})
