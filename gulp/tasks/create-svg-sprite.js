import gulp from 'gulp';
import svgSprite from 'gulp-svg-sprite';

import { paths, srcPath } from '../config/paths.js';
import { logger } from "../config/logger.js";

const config = {
  shape: {
    dimension: {
        maxWidth: 50,
        maxHeight: 50,
    }
  },

  mode: {
    symbol: {
      sprite: '../sprite.svg',

      /* Создавать страницу с перечнем иконок*/
      example: true,
    },
  },
}

export function createSvgSprite() {
  return gulp.src(paths.src.svgIcons, {})
    .pipe(logger.handleError(' SVG SPRITE '))
    .pipe(
      svgSprite(config)
    )
    .pipe(gulp.dest(srcPath + '/assets/images'));
};