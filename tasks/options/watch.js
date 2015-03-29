module.exports = {
    options: {
        livereload: true
    },
    scripts: {
        files: ['src/*.js'],
        tasks: ['jshint', 'concat', 'uglify'],
        options: {
            spawn: false
        }
    },
    css: {
        files: ['css/*.css'],
        tasks: ['sass', 'autoprefixer', 'cssmin'],
        options: {
            spawn: false
        }
    }
};
