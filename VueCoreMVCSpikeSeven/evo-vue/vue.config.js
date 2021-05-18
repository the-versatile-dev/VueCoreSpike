const path = require("path");

module.exports = {
    outputDir: path.resolve(__dirname, "../wwwroot/dist"),
    filenameHashing: false,
    configureWebpack: {
        optimization: {
            splitChunks: false
        },
        devtool: 'source-map'
    },
    publicPath: '/dist/',
    css: {
        extract: false
    },
    pages: {

        showcounter: {
            entry: 'src/pages/counter/showcounter/index.js'
        },
    }
}