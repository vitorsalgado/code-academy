'use strict'

const Spawn = require('child_process').spawn
const SHELL_OPTIONS = { stdio: 'inherit', shell: true }

module.exports = () =>
  Spawn('./gradlew', ['check'], SHELL_OPTIONS)
    .on('exit', process.exit)
