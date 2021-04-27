const path = require('path');
var webpack = require('webpack');
var fs = require('fs');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var appBasePath = './src/app/pages';

//process.traceDeprecation = true;

var jsEntries = {}
// We search for index.js files inside basePath folder and make those as entries
fs.readdirSync(appBasePath).forEach(function(name) {

    var indexFile = appBasePath + name + '/index.js';
    if (fs.existsSync(indexFile)) {
        jsEntries[name] = indexFile;
    }
});

module.exports = {
    entry: jsEntries,
    output: {
        path: path.resolve(__dirname, './src/bundle/'),
        publicPath: '/src/bundle/',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.join(__dirname, appBasePath)
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    'vue-loader',
                    {
                        loader: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
                    },
                    {
                        loader: 'vue-style-loader!css-loader!sass-loader' // <style lang="scss">
                    }]
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                use: ['file-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
                use: ['file-loader',
                 {
                    loader: '[name].[ext]?[hash]'
                }]
            }
        ]
    },
    devServer: {
        proxy: {
            '*': {
                target: 'http://localhost:5001',
                changeOrigin: true
            }
        }
    },
    devtool: 'eval-source-map',
    optimization: {
        minimizer: [new UglifyJsPlugin()]
    }
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = 'eval-source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    ]);
}
