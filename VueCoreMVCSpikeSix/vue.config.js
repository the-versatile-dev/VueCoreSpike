var path = require('path');
var webpack = require('webpack');
var fs = require('fs');

var appBasePath = './src/';

var jsEntries = {}
// We search for index.js files inside basePath folder and make those as entries
fs.readdirSync(appBasePath).forEach(function (name) {
    var indexFile = appBasePath + name + '/index.js';
    if (fs.existsSync(indexFile)) {
        console.log(name);
        jsEntries[name] = indexFile;
    }
});

module.exports = {
    outputDir: './wwwroot/dist',
    filenameHashing: false,  
    configureWebpack: {
        entry: jsEntries,
        optimization: {
            splitChunks: false
        }
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
        }

    }
}