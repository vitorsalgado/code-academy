'use strict'

const Spawn = require('child_process').spawn
const SHELL_OPTIONS = { stdio: 'inherit', shell: true }

const evaluateTraining = () => Spawn('./gradlew', ['check'], SHELL_OPTIONS)

evaluateTraining()
