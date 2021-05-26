
const path = require("path");


module.exports = {
    outputDir: path.resolve(__dirname, "../../wwwroot/dist"),
    filenameHashing: false,
    configureWebpack: {
        optimization: {
            splitChunks: false
        },
        devtool: 'source-map'
    },
    publicPath: '/dist/',
    //pages: {
    //    basicinput: {
    //        entry: 'src/pages/input/basic-input.js'
    //    }
    //},
    pluginOptions: {
        quasar: {
            importStrategy: 'kebab',
            rtlSupport: true
        }
    },
    transpileDependencies: [
        'quasar'
    ]
}
