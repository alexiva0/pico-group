module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-mixins')({
            mixinsFiles: 'src/styles/mixins.css',
        }),
        require('postcss-for'),
        require('postcss-nested'),
        require('postcss-simple-vars'),
        require('postcss-custom-properties')({
            preserve: false,
            importFrom: 'src/styles/variables.css',
        }),
        // require('postcss-custom-media')({
        //     preserve: false,
        //     importFrom: 'src/styles/media.css',
        // }),
        require('postcss-calc'),
    ],
};
