#!/usr/bin/env node

'use strict'

const Package = require('./package')
const Path = require('path')
const Program = require('commander')

const argv = process.argv

if (argv.length <= 2) argv.push('--help')

console.log(Path.resolve('sample', 'evaluate-training'))

Program
  .version(Package.version)
  .description(Package.description)

Program
  .command('evaluate [training]')
  .description('Command to evaluate a training')
  .action(training =>
    require(Path.resolve(training, 'evaluate-training'))())

Program.parse(argv)
