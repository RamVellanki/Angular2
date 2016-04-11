'use strict';

//Required plugins
var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    nodemon = require('gulp-nodemon'),
    ts = require('gulp-typescript'),
    del = require('del'),
    merge = require('merge-stream'),
    runSequence = require('run-sequence'),
    debug = require('gulp-debug'); //Syntax: .pipe(debug({title: 'checking:'}))

//Default main task:
//Depends on build, starts watch and browser-sync
gulp.task('default', function () {
    runSequence('clean:dist', 'build', 'copyfiles', 'watch', 'nodemon', 'browser-sync');
    // runSequence('copyfiles',['build']);
    // gulp.start('watch');
    // gulp.start('browser-sync');
});

//clear dist - runs before build
gulp.task('clean:dist', function () {
    return del(['dist/**/*']);
});

//Build all TS and copy all files (js, css and html) to dist folder
//depends on clean:dist
gulp.task('build', function () {
    console.log('Build started');
    var tsProject = ts.createProject('tsconfig.json');
        
    //Compile all TS files as per tsconfig  
    return tsProject.src()
        .pipe(ts(tsProject))
        .pipe(gulp.dest('.'))
        .pipe(debug({title: 'checking:'}));
});

gulp.task('copyfiles', function() {
    console.log('Running copyfiles');    
    return gulp.src(['index.html', 'src/**/*.*'], { passtrough: true })
        .pipe(gulp.dest('dist'));
});

//browser sync runs in proxy mode, it depends on nodemon to start the express server
gulp.task('browser-sync', function () {
    browserSync({
        proxy: 'localhost:8383',
        port: 8484,
        browser: ['chrome', 'firefox'],
        notify: true
    })
});

//nodemon starts at index.js
gulp.task('nodemon', function (cb) {
    var called = false;
    return nodemon({
        script: 'index.js',
        ignore: [
            'gulpfile.js',
            'node_modules/'
        ]
    })
        .on('start', function () {
            if (!called) {
                called = true;
                cb();
            }
        })
        .on('restart', function () {
            setTimeout(function () {
                browserSync.reload({ stream: false });
            }, 1000);
        })
});

gulp.task('bsreload', function() {
    browserSync.reload;
});

//Watch for TS and other file changes and reload borwser-sync
gulp.task('watch', function () {
    gulp.watch(['index.html', 'src/**/*.ts', 'src/**/*.css', 'src/**/*.html'],function () {
        runSequence('clean:dist', 'build', 'copyfiles', 'bsreload');
        // browserSync.reload;
    });
});