# Live update HTML file to PDF conversion

## Prerequisites

Install

 * nodejs - [Installing via Package Manager](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)

 * phantomjs - `sudo apt-get install phantomjs`<br />
   If you want the latest and greatest, you can [download pre-build binaries](http://phantomjs.org/download.html).

 * grunt - [Getting started](http://gruntjs.com/getting-started)


## Getting started

 * Clone the repository
  `git clone git@github.com:alistairjcbrown/html-pdf-live-conversion.git`

 * `cd html-pdf-live-conversion`

 * Intall dependencies
   `npm install`

 * Now, `grunt watch`

__Notes:__ 

If required, edit the watch path in `Gruntfile.js`. By default it will watch any HTML or CSS file in the directory above.

The last updated HTML file is converted to PDF when a CSS file is changed. The PDF file will be created in the same directory as the HTML file.

## Advanced

You can create a script to modify the HTML page before conversion.

Create your JS file in the `scripts` directory and add the path to the `in_page_scripts` array in `rasterize.js`. This will be injected into the page before it is converted.

I have created a script which will add a "Generated on" message in an element with class "generated-on". 