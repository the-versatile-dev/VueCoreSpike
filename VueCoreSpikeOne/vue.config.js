
module.exports = {
    outputDir: './wwwroot/dist',
    filenameHashing: false,

    configureWebpack: {
        optimization: {
            splitChunks: false
        },
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            }
            },
        devServer: {
            //proxy: {
            //    "^/api": {
            //        target: "http://localhost:44360",
            //        changeOrigin: true,
            //        logLevel: "debug"
                    
            //    }
            //},
            clientLogLevel: 'info',
            watchOptions: {
                poll: true
            }
        },
        devtool: 'eval-source-map'
    },


    transpileDependencies: [
      'vuetify'
    ]
}
