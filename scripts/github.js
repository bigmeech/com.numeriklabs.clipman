'use strict';

const Github = require('github');
const github = new Github({
  debug:true,
  protocol: 'https',
  Promise: require('bluebird')
});

//do auth
github.authenticate({
  type:'basic',
  username: process.env.GITHUB_USERNAME,
  password: process.env.GITHUB_PASSWORD,
});

module.exports = github;