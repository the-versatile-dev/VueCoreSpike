module.exports = {
    outputDir: './wwwroot/dist',
    lintOnSave: false,
    productionSourceMap: false,
    filenameHashing: false,    
    configureWebpack: {
        mode: 'development',
        optimization: {
            splitChunks: false
        },        
        // resolve: {
        //     alias: {
        //         'vue$': 'vue/dist/vue.esm.js'
        //     }
        // },
        //devServer: {
        //    publicPath: "/Home",
        //    proxy: {
        //        '^/Home/*': {
        //            target: "http://localhost:44360",
        //            changeOrigin: true,
        //            logLevel: "debug"

        //        }
        //    },
        //    clientLogLevel: 'info',
        //    watchOptions: {
        //        poll: true
        //    }
        //},
        devtool: 'eval-source-map'
    },
}