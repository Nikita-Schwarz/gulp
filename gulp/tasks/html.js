import gulp from 'gulp';
import webpHtml from 'gulp-webp-html-nosvg';
import panini from 'panini';
import htmlMin from 'gulp-htmlmin';

import { paths, srcPath } from '../config/paths.js';
import { logger } from '../config/logger.js';
import { plugins } from '../config/plugins.js';

export function html (isBuild, serverInstance) {
    panini.refresh();
    return gulp.src(paths.src.html)
        .pipe(logger.handleError(' HTML '))
        .pipe(panini({
            root:       srcPath,
            layouts:    srcPath + '/layouts',
            partials:   srcPath + '/partials',
            helpers:    srcPath + '/helpers',
            data:       srcPath + '/data'
        }))
        .pipe(plugins.if(isBuild, webpHtml()))
        .pipe(plugins.if(isBuild, htmlMin({
                useShortDoctype: true,
                sortClassName: true,
                removeComments: true,
                collapseWhitespace: true,
            })))
        .pipe(gulp.dest(paths.build.html))
        .pipe(serverInstance.stream());
}