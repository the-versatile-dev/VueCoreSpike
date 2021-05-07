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
    chainWebpack: config => {
        if (process.env.NODE_ENV === 'development') {
            config.module.rule('vue').uses.delete('cache-loader');
            config.module.rule('js').uses.delete('cache-loader');
            config.module.rule('ts').uses.delete('cache-loader');
            config.module.rule('tsx').uses.delete('cache-loader');
        }
    }
}