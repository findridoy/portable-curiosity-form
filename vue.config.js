module.exports = {
    configureWebpack: {
        optimization: {
            splitChunks: false
        },
        output: {
            filename: 'js/[name].min.js'
        }
    },
    css: {
        extract: false,
    },
}