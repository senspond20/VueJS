const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')
// nodejs 환경 require 

// 스크립트가 너무 많아질때 하나로 합칠때 필요해진다.
// webpacking
module.exports = {
    mode : 'development',
    devtool : 'eval',
    resolve :{
        extensions : ['.js','.vue']
    },
    // 크게 4개가 중요하다.
    entry : {
        app: path.join(__dirname, 'main.js'),
    },
    // webpack 핵심
    module : {
        rules : [{
            test : /\.vue$/,
            loader :'vue-loader',
        }],
    },
    plugins : [
        new VueLoaderPlugin()
    ],
    output : {
        filename : '[name].js', // app.js
        path : path.join(__dirname, 'dist'),
    },
}