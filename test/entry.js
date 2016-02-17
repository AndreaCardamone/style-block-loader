var path = require("path");
var glob = require("glob");

var ExtractTextPlugin = require("extract-text-webpack-plugin");

var extractStyle = new ExtractTextPlugin("[name].styles.css");
var extractLESS  = new ExtractTextPlugin("[name].less.css");
var extractCSS   = new ExtractTextPlugin("[name].sheets.css");


var entries = []
    .concat(glob.sync(__dirname+"/index.js"))
    .concat(glob.sync(__dirname+"/src/**/*.js"))
    .concat(glob.sync(__dirname+"/src/**/*.html"))
    .concat(glob.sync(__dirname+"/src/**/*.css"))
    .concat(glob.sync(__dirname+"/src/**/*.less"))
;

module.exports = {
    entry: entries,
    output: {
        path: path.join(__dirname, "dist"),
        filename: '[name].build.js'
    },
    
    module: {
        loaders: [
            { test: /\.html$/, loader: extractStyle.extract("raw", "css?minimize!less!style-block") },
            { test: /\.css$/,  loader: extractCSS.extract("style", "css?minimize")                  },
            { test: /\.less$/,  loader: extractLESS.extract("style", "css?minimize!less")            },
            { test: /\.png$/,  loader: "file-loader"                                                }
        ]
    },
    
    plugins: [extractStyle,extractCSS, extractLESS]
}
