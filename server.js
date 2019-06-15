const { send } = require('micro')
const { readFile } = require('fs')
const { promisify } = require('util')
const { join } = require('path')
const readFilePromise = promisify(readFile)

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 's-maxage=0')
  res.setHeader('Content-Type', 'application/liquid')
  const read = await readFilePromise(join(__dirname, 'build', 'index.html'))
  return send(res, 200, read.toString())
}
