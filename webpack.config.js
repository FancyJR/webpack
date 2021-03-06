var webpack=require('webpack');
module.exports = {
    entry: "./page1.js",
    output: {
        path: __dirname + '/dist/js',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style-loader!css-loader"}
        ]
    },
    plugins:[
        new webpack.BannerPlugin('webpack')
    ]
};