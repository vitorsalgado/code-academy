'use strict'

const {spawn} = require('./cmd')

module.exports.check = () => spawn('./gradlew', ['check', '--info'])
