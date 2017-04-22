    var path = require('path');

module.exports = {
    context:  path.join(__dirname, "/app"),
    entry: "./index.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    devtool: 'source-map',
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "jshint-loader"
            }
        ],
        loaders: [
            {
                test: /\.html$/,
                loader: "angular-templatecache-loader?prefix=/app/"
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['ng-annotate', 'babel-loader?presets=es2015']
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
            {
  test    : /\.(jpg|png)$/,
  loader: "file?name=[path][name].[ext]"
}
        ]
    },
    devServer: {
        port: 8083
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css'],
        modulesDirectories: [
          'node_modules'
        ],
        root: path.join(__dirname, "/app"),        
    }
}