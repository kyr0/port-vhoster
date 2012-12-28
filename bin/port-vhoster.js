#!/usr/bin/env node
var fs = require('fs'),
    path = require('path'),
    findup = require('../lib/findup'),
    dir;

// Where might a locally-installed port-vhoster?
dir = path.resolve(findup(process.cwd(), 'port-vhoster.js'), '../node_modules/port-vhoster');

// If port-vhoster is installed locally, use it. Otherwise use this port-vhoster.
if (!fs.existsSync(dir)) {
    dir = '../lib/port-vhoster';
}

// Run port-vhoster!
require(dir).cli();