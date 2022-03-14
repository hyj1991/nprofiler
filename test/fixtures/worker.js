'use strict';

if (Number.parseInt(process.versions.node.split('.')[0], 10) <= 10) {
  process.exit(0);
}

const workerThreads = require('worker_threads');
require('../../xprofiler');

if (workerThreads.isMainThread) {
  const w = new workerThreads.Worker(__filename);
  w.on('exit', code => {
    console.log('worker exited', code);
  });
} else {
  setTimeout(() => {}, 1000);
}
