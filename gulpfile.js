import gulp from 'gulp';
import browserSync from 'browser-sync';
import { paths } from './gulp/config/paths.js';


// Импорт задач
import { copyRootFiles } from './gulp/tasks/copy-root-files.js';
import { reset } from './gulp/tasks/reset.js'
import { server } from './gulp/tasks/server.js';
import { html } from './gulp/tasks/html.js';
import { scss } from './gulp/tasks/scss.js'
import { javascript } from './gulp/tasks/javascript.js';
import { images } from './gulp/tasks/images.js';
import { createSvgSprite } from './gulp/tasks/create-svg-sprite.js';
import { zip } from './gulp/tasks/zip.js';

const isBuild = process.argv.includes('--build');
const browserSyncInstance = browserSync.create();

const SERVER = server.bind(null, browserSyncInstance);
const HTML = html.bind(null, isBuild, browserSyncInstance);
const SCSS = scss.bind(null, isBuild, browserSyncInstance);
const JAVASCRIPT = javascript.bind(null, browserSyncInstance);
const IMAGES = images.bind(null, isBuild, browserSyncInstance);

// Наблюдатель за изменениями
function watcher() {
    gulp.watch(paths.watch.html, HTML);
    gulp.watch(paths.watch.scss, SCSS);
    gulp.watch(paths.watch.js, JAVASCRIPT);
    gulp.watch(paths.watch.images, IMAGES);
    gulp.watch(paths.watch.svgIcons, createSvgSprite);
}

const mainTasks = gulp.parallel(copyRootFiles, createSvgSprite, HTML, SCSS, JAVASCRIPT, IMAGES);
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, SERVER));

const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);

export default dev;

export { build, deployZIP, createSvgSprite, IMAGES }
