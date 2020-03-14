'use strict'

const { series, watch } = require('gulp')

// const { spawn } = require('child_process')
const spawn = require('cross-spawn')

const lint = (cb) => {
  const cmd = spawn('yarn', ['lint'], { stdio: 'inherit' })
  cmd.on('close', () => cb())
}

const watchAll = () => {
  watch('src/**/*.js', lint)
}

exports.lint = lint
exports.default = series(lint, watchAll)

// gulp.task('lint', (cb) => {
//   const cmd = spawn('yarn', ['lint'], { stdio: 'inherit' })
//   cmd.on('close', () => cb())
// })
//
// gulp.task('default', ['lint'], () => {
//   gulp.watch('src/**/*.js', ['lint'])
// })
