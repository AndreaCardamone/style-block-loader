# style block loader for webpack

## installation

`npm install style-block-loader --save-dev`

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

``` javascript
var home_style = require("style-block!./src/pages/home.html")
// => returns raw css code from the first style block of html file
```
### Example config with other loaders

This is an example of a [webpack](https://www.npmjs.com/package/webpack)
configuration that uses the style-block loader in conjucntion with
[css-loader](https://www.npmjs.com/package/css-loader) and
[less-loader](https://www.npmjs.com/package/less-loader).

``` javascript
module.exports = {
    module: {
        loaders: [
            ...
            { test: /\.html$/, loader: "css?minimize!less!style-block"  },
            ...
        ]
    }
};
```

## More complex example
Another common use of style-block-loader is with the
[extract-text-webpack-plugin](https://www.npmjs.com/package/extract-text-webpack-plugin) like this.


``` javascript
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
            { test: /\.less$/, loader: extractLESS.extract("style", "css?minimize!less")            },
            { test: /\.png$/,  loader: "file-loader"                                                }
        ]
    },
    
    plugins: [extractStyle,extractCSS, extractLESS]
}
```
## License

MIT (http://www.opensource.org/licenses/mit-license.php)
