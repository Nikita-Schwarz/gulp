const srcPath = './src';
const distPath = './build';

const paths = {
    build: {
        html:   `${distPath}`,
        js:     `${distPath}/assets/js/`,
        css:    `${distPath}/assets/css/`,
        images: `${distPath}/assets/images/`,
        fonts:  `${distPath}/assets/fonts/`
    },
    src: {
        html:   `${srcPath}/*.html`,
        js:     `${srcPath}/assets/js/*.js`,
        scss:   `${srcPath}/assets/scss/*.scss`,
        images: `${srcPath}/assets/images/**/*.{jpg,png,svg,gif,ico,webp,webmanifest,xml,json}`,
        fonts:  `${srcPath}/assets/fonts/**/*.{eot,woff,woff2,ttf,svg}`
    },
    watch: {
        html:   `${srcPath}/**/*.{html,json}`,
        js:     `${srcPath}/assets/js/**/*.js`,
        scss:   `${srcPath}/assets/scss/**/*.scss`,
        images: `${srcPath}/assets/images/**/*.{jpg,png,svg,gif,ico,webp,webmanifest,xml,json}`,
        fonts:  `${srcPath}/assets/fonts/**/*.{eot,woff,woff2,ttf,svg}`
    },
    clean: distPath,
}

export { paths, srcPath, distPath };