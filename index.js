/**
 * MIT License http://www.opensource.org/licenses/mit-license.php
 * Author: Andrea Cardamone
 */
var cheerio = require("cheerio");
var loaderUtils = require("loader-utils");

module.exports = function (content) {
    this.cacheable && this.cacheable();
    this.value = content;
    
    var     $ = cheerio.load(content),
        style = $('style'),
        query = loaderUtils.parseQuery(this.query);
        
    if (query.filter && query.filter === 'less') {
        return style.attr('rel') === 'stylesheet/less'? style.text() : '';
    } else {
        return style.text();
    }
};
