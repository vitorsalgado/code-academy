'use strict'

const Spawn = require('child_process').spawn
const SHELL_OPTIONS = { stdio: 'inherit', shell: true }

module.exports.spawn = (cmd, args) =>
  Spawn(cmd, args, SHELL_OPTIONS)
  .on('exit', process.exit)
