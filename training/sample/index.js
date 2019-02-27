'use strict'

const ChildProcess = require('child_process')
const exec = ChildProcess.execSync

module.exports = () => exec('./gradlew check')
