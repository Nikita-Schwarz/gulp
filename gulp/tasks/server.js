import { distPath } from '../config/paths.js';

function server (instance) {
  instance.init({
    server: {
      baseDir: distPath,
    },
    logLevel: 'info',
    cors: true,
    notify: false,
    open: false,
    reloadOnRestart: true,
    port: 3000
  });
};

export { server };