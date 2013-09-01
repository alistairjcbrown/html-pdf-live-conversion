# Live update HTML file to PDF conversion

Uses grunt watch to watch HTML and CSS files for changes. If a change is detected, phantomjs is used to convert the HTML into a PDF file.

Instructions below are aimed at linux. This has only been tested on Ubuntu. YMMV.

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

### Notes:

If required, edit the watch path in `Gruntfile.js`. By default it will watch any HTML or CSS file in the directory above.

The last updated HTML file is converted to PDF when a CSS file is changed. The PDF file will be created in the same directory as the HTML file.

## Advanced

You can create a script to modify the HTML page before conversion.

Create your JS file in the `scripts` directory and add the path to the `in_page_scripts` array in `rasterize.js`. This will be injected into the page before it is converted.

### Existing sctipts:

 * Generated date script will add text with the format "Document generated at YYY-MM-DD HH:MM" to the first element with class `generated-on`.
 * Generate QR code script will read the value from the first element with class `qr-code-value`, generate a QR code and insert the QR code image into the first element with class `qr-code`.
    * Depends on the library `QRCode.js` - [http://davidshimjs.github.io/qrcodejs/](http://davidshimjs.github.io/qrcodejs/)
 * Generate reference script will create a list of references in the first element with class `footnote-references` by checking the document for `span` elements with the attribute `data-type` with value `reference`.

## Contact

Twitter [@alistairjcbrown](http://twitter.com/alistairjcbrown)

## License

MIT License

Copyright (c) 2013 Alistair Brown

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.