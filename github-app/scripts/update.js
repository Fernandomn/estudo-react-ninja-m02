'use strict'

const spawn = require('cross-spawn')
const pkg = require('../package.json')

const dependencies = Object.keys(pkg.dependencies)
const devDependencies = Object.keys(pkg.devDependencies)

// console.log(dependencies)

const add = (args) => {
  return spawn('yarn', ['add'].concat(args), { stdio: 'inherit' })
}
const addDev = (args) => {
  return add(['--dev'].concat(args))
}

add(dependencies).on('close', () => {
  addDev(devDependencies.concat(
    'react-hot-loader@3.0.0-beta.6',
    'extract-text-webpack-plugin@beta'
  )).on('close', (code) => {
    process.exit(code)
  })
})
