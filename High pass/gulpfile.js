'use strict'
const { src, dest, parallel, series, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass')); // Отвечает за
const notify = require('gulp-notify'); // ошибки
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const fileinclude = require('gulp-file-include');
const svgSprite = require('gulp-svg-sprite');
const ttf2woff = require('gulp-ttf2woff')
const ttf2woff2 = require('gulp-ttf2woff2')
const del = require('del');
const fs = require('fs');
const webpack = require('webpack');
const uglify = require('gulp-uglify-es').default
const webpackStream = require('webpack-stream');
const imgMin = require('gulp-imagemin')


const fonts = () => { // преобразовывает шрифт
    src('./src/fonts/**.ttf')
        .pipe(ttf2woff())
        .pipe(dest('./app/fonts/'))
    return src('./src/fonts/**.ttf')
        .pipe(ttf2woff2())
        .pipe(dest('./app/fonts/'))
}

const styles = () => {
    return src('./src/scss/**/*.scss') // '/**/*' - Все папки scss и все файлы .scss
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded' // Дополнительное сжатие
        }).on('error', notify.onError())) // Выводит ошибки
        .pipe(rename({
            suffix: '.min'  // Добавляет к имени файла .min - минифицированный файл
        }))
        .pipe(autoprefixer({
            cascade: true, // Чтобы небыло каскада в css-файле
        }))
        // .pipe(cleanCSS({
        //     level: 2, // Уровень сдатия
        // }))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('./app/css'))
        .pipe(browserSync.stream());
}

const cb = () => { }

let srcFonts = './src/scss/_fonts.scss';
let appFonts = './app/fonts';

// const fontsStyle = (done) => {
//     let file_content = fs.readFileSync(srcFonts);

//     fs.writeFile(srcFonts, '', cb);

//     fs.readdir(appFonts, function (err, items) {
//         if (items) {
//             let c_fontname;
//             for (var i = 0; i < items.length; i++) {
//                 let fontname = items[i].split('.');
//                 fontname = fontname[0];
//                 if (c_fontname != fontname) {
//                     fs.appendFile(srcFonts, '@include font-face("' + fontname + '", "' + fontname + '", 400);\r\n', cb)
//                 }
//                 c_fontname = fontname;
//             }
//         }
//     })
//     done();
// }

const htmlInclude = () => {
    return src(['./src/index.html'])
        .pipe(fileinclude({
            prefix: '@',
            basepath: '@file'
        }))
        .pipe(dest('./app'))
        .pipe(browserSync.stream());
}

const imgToApp = () => {
    return src(['./src/img/**.jpg', './src/img/**.png', './src/img/**.jpeg', './src/img/**.svg' ])
        .pipe(dest('./app/img'))
}

const svgSprites = () => {
    return src('./src/img/svg/**.svg')
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: "../sprite.svg"
                }
            }
        }))
        .pipe(dest('./app/img/svg'))
}

const resources = () => {
    return src('./src/resources/**')
        .pipe(dest('./app'))
}

const clean = () => {   // удаляет выбранную папку и файли в ней
    return del(['app/*'])
}

const scripts = () => {
    return src('./src/js/main.js')
        .pipe(webpackStream({
            output: {
                filename: 'main.js' // Название итогового файла после изменений
            },
            module: { // настройки бабеля в npmjs
                rules: [
                    {
                        test: /\.m?js$/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    ['@babel/preset-env', { targets: "defaults" }]
                                ]
                            }
                        }
                    }
                ]
            }
        }))
        .pipe(sourcemaps.init())
        .pipe(uglify().on('error', notify.onError()))
        .pipe(sourcemaps.write())
        .pipe(dest('./app/js'))
        .pipe(browserSync.stream());
}


// Функция вызова браузера sync
const watchFiles = () => {
    browserSync.init({
        server: {
            baseDir: "./app"  // Указываем путь к файлам
        }
    });


    watch('./src/scss/**/*.scss', styles) // Указываем путь к файлам для отслеживания изменений и вызываем функцию - styles
    watch('./src/index.html', htmlInclude)
    watch('./src/img/**.jpg', imgToApp);
    watch('./src/img/**.jpeg', imgToApp);
    watch('./src/img/**.png', imgToApp);
    watch('./src/img/**.svg', svgSprites);
    watch('./src/resouces/**', resources)
    watch('./src/fonts/**.ttf', fonts)
    // watch('./src/fonts/**.ttf', fontsStyle)
    watch('./src/js/**/*.js', scripts)
}

// Добавить fontStyle при первом запуске
exports.default = series(clean, parallel(htmlInclude, scripts, fonts, imgToApp, svgSprites, resources), styles, watchFiles); // parallel - паралельный вызов функций

const stylesBuild = () => {
    return src('./src/scss/**/*.scss') // '/**/*' - Все папки scss и все файлы .scss
        .pipe(sass({
            outputStyle: 'expanded' // Дополнительное сжатие
        }).on('error', notify.onError())) // Выводит ошибки
        .pipe(rename({
            suffix: '.min'  // Добавляет к имени файла .min - минифицированный файл
        }))
        .pipe(autoprefixer({
            cascade: false, // Чтобы небыло каскада в css-файле
        }))
        .pipe(cleanCSS({
            level: 2, // Уровень сдатия
        }))
        .pipe(dest('./app/css'))
}

const scriptsBuild = () => {
    return src('./src/js/main.js')
        .pipe(webpackStream({
            output: {
                filename: 'main.js' // Название итогового файла после изменений
            },
            module: { // настройки бабеля в npmjs
                rules: [
                    {
                        test: /\.m?js$/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    ['@babel/preset-env', { targets: "defaults" }]
                                ]
                            }
                        }
                    }
                ]
            }
        }))
        .pipe(uglify().on('error', notify.onError()))
        .pipe(dest('./app/js'))
}

const imageMin = () => {
    return src(['./src/img/**.jpg', './src/img/**.png', './src/img/**.jpeg', './src/img/**.svg' ])
        .pipe(imgMin())
        .pipe(dest('./app/img'))
}




exports.build = series(clean, parallel(htmlInclude, scriptsBuild, fonts, svgSprites, resources), stylesBuild, imageMin);
