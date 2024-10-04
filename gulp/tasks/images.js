import gulp from 'gulp';
import webp from 'gulp-webp';
import imageMin from 'gulp-imagemin';

import { plugins } from '../config/plugins.js';
import { paths } from '../config/paths.js';
import { logger } from "../config/logger.js";

function images(isBuild, serverInstance) {
	return gulp.src(paths.src.images, { encoding: false })
		.pipe(logger.handleError(' IMAGES '))

		.pipe(plugins.newer(paths.build.images))
		.pipe(plugins.if(isBuild, webp())) // конвертирует в webp
		.pipe(plugins.if(isBuild, gulp.dest(paths.build.images))) // записывает
		.pipe(plugins.if(isBuild, gulp.src(paths.src.images, { encoding: false }))) // и опять берёт img
		.pipe(plugins.if(isBuild, plugins.newer(paths.build.images)))
		.pipe(
			plugins.if(
				isBuild,
				imageMin({
					progressive: true,
					svgoPlugins: [{ removeViewBox: false }],
					interlaced: true,
					optimizationLevel: 3, // 0 to 7
				})
			)
		)

		.pipe(gulp.dest(paths.build.images))
		.pipe(gulp.src(paths.src.svg))
		.pipe(gulp.dest(paths.build.images))
		.pipe(serverInstance.stream());
};
