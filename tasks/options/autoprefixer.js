module.exports = {
    options: {
        browsers: ['last 2 version']
    },
    multiple_files: {
        expand: true,
        flatten: true,
        src: 'bower_components/css-loading-spinners/css/*.css',
        dest: 'css/build/prefixed/'
    }
};
