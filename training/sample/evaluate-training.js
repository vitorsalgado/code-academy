'use strict'

const Spawn = require('child_process').spawn
const SHELL_OPTIONS = { stdio: 'inherit', shell: true }

const evaluateTraining = () =>
  Spawn('gradle', ['check', '--stacktrace'], SHELL_OPTIONS)
    .on('exit', process.exit)

evaluateTraining()
