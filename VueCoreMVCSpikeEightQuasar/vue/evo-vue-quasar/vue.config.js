
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
    pages: {
        fullcounter: {
            entry: 'src/pages/counter/fullcounter/fullcounter.js'
        },
        main: {
            entry:'src/main.js'
        }
    },
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
