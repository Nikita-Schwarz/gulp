import gulp from 'gulp';
import { deleteAsync } from 'del';
import zipPlugin from 'gulp-zip';

import { distPath } from '../config/paths.js';
import { logger } from "../config/logger.js";

const zip = () => {
  deleteAsync(`./${distPath}.zip`)
    .then(() => logger.warning('Прошлый ZIP архив успешно удалён'))
    .catch(() => logger.error('Не удалось удалить архив'));

  return gulp.src(`${distPath}/**/*.*`)
    .pipe(logger.handleError(' ZIP '))
    .pipe(zipPlugin(`${distPath}.zip`))
    .pipe(gulp.dest('./'));
};

export { zip };