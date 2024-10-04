import gulp from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css';
import webpcss from 'gulp-webpcss';
import autoprefixer from 'autoprefixer';
import postcss from 'gulp-postcss';
import postcssPresetEnv from 'postcss-preset-env';
import postcssGroupMedia from 'postcss-sort-media-queries';
import sourcemaps from "gulp-sourcemaps";

import { paths } from '../config/paths.js';
import { plugins } from '../config/plugins.js';
import { logger } from "../config/logger.js";

const sass = gulpSass(dartSass);

export function scss(isBuild, serverInstance) {
	const webpConfig = {
		webpClass: '.webp',
		noWebpClass: '.no-webp',
	};

	return gulp.src(paths.src.scss)
	.pipe(logger.handleError(' SCSS '))

		.pipe(plugins.if(!isBuild, sourcemaps.init()))
		.pipe(sass())
		.pipe(plugins.if(isBuild, webpcss(webpConfig)))
		.pipe(plugins.if(isBuild, postcss([
			autoprefixer(),
			postcssPresetEnv(),
			postcssGroupMedia({ sort: 'desktop-first' })
		])))
		.pipe(plugins.if(isBuild, cleanCss({ level: 2 })))
		.pipe(rename({ suffix: ".min", extname: '.css' }))
		.pipe(plugins.if(!isBuild, sourcemaps.write('.')))

		.pipe(gulp.dest(paths.build.css))
		.pipe(serverInstance.stream());
};
