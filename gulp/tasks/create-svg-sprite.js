import gulp from 'gulp';
import svgSprite from 'gulp-svg-sprite';

import { paths, srcPath } from '../config/paths.js';
import { logger } from "../config/logger.js";

export function createSvgSprite() {
  return gulp.src(paths.src.svgIcons, {})
    .pipe(logger.handleError('SVG SPRITE'))
    .pipe(
      svgSprite({
        mode: {
          symbol: {
            sprite: '../sprite.svg',

            /** Создавать страницу с перечнем иконок */
            example: true,
          },
        },
      })
    )
    .pipe(gulp.dest(srcPath + '/assets/images'));
};