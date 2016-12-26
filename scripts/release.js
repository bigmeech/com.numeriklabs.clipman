#!/usr/bin/env node

'use strict';

// GITHUB_USERNAME=bigmeech GITHUB_PASSWORD=Opensesamie85 ./scripts/release.js

const config = require('../package.json');
const Github = require('./github');

const tagName = `v${config.version}`;
Github.repos.createRelease({
  owner: 'numeriklabs',
  repo: 'com.numeriklabs.clipman',
  tag_name: tagName,
  name: tagName,
  prerelease: true
}).then(function(result){
  console.log(result);
});