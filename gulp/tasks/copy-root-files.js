import gulp from 'gulp';

import { plugins } from '../config/plugins.js';
import { srcPath, distPath } from '../config/paths.js';
import { logger } from "../config/logger.js";

const copyRootFiles = () => {
  const config = {
    dot: true,
    allowEmpty: true,
    encoding: false
  };

  /* Добавляем файлы, которые нужны в корне проекта */
  const files = ['favicon.ico'];

  return gulp.src(plugins.concat(srcPath, files), config)
    .pipe(logger.handleError('COPY ROOT FILES'))
    .pipe(gulp.dest(distPath));
};

export { copyRootFiles };