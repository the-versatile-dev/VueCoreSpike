module.exports = {
    outputDir: './wwwroot/dist',
    filenameHashing: false,  
    configureWebpack: {
        optimization: {
            splitChunks: false
        }

    },
    publicPath: '/dist/',
    css: {
        extract: false
    },
    pages: {
        contact: {
            entry: 'src/pages/contact/index.js'
        },
        about: {
            entry: 'src/pages/about/index.js'
        },
        docounter: {
            entry: 'src/pages/counter/counter/index.js'
        },
        showcounter: {
            entry: 'src/pages/counter/showcounter/index.js'
        },
        fullcounter: {
            entry: 'src/pages/counter/fullcounter/fullcounter.js'
        },
        home: {
            entry: 'src/pages/home/index.js'
        },
        posts: {
            entry: 'src/pages/posts/posts.js',
            chunks: 'all'
        },
        index: {
            entry: 'src/main.js'
        }

    }
}