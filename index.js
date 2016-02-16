/**
 * MIT License http://www.opensource.org/licenses/mit-license.php
 * Author: Andrea Cardamone
 */
var cheerio = require("cheerio");

module.exports = function(content) {
	this.cacheable && this.cacheable();
	this.value = content;
	
	$ = cheerio.load(content);
	var style = $('style').text();
	
	return style;
}
