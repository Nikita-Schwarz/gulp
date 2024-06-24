import gulp from 'gulp';
import webpackStream from 'webpack-stream';

import { paths } from '../config/paths.js';
import { logger } from "../config/logger.js";

export function javascript(serverInstance) {
	return gulp.src(paths.src.js)
		.pipe(logger.handleError(' JS '))

		.pipe(webpackStream({
			mode: "production",
			output: {
				filename: 'app.min.js',
			},
		}))

		.pipe(gulp.dest(paths.build.js))
		.pipe(serverInstance.stream());
}