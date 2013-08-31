/*
 * Slightly modified version found at: https://github.com/ariya/phantomjs/blob/master/examples/rasterize.js
 * Modifcations:
 *  - Added in page scripts to be listed at the top and injected when the page is opened.
 *  - Use of the page boady margin to affect the page margin 
 */

var page = require('webpage').create(),
    system = require('system'),
    address, output, size,
    in_page_scripts = [
        'scripts/generated-date.js',
        'scripts/generate-qr-code/qrcode.js',
        'scripts/generate-qr-code/index.js'
    ],
    paper_size,
    body_margin;

if (system.args.length < 3 || system.args.length > 5) {
    console.log('Usage: rasterize.js URL filename [paperwidth*paperheight|paperformat] [zoom]');
    console.log('  paper (pdf output) examples: "5in*7.5in", "10cm*20cm", "A4", "Letter"');
    phantom.exit(1);
}

address = system.args[1];
output = system.args[2];
page.viewportSize = { width: 600, height: 600 };

if (system.args.length > 3 && system.args[2].substr(-4) === ".pdf") {
    size = system.args[3].split('*');
    paperSize = size.length === 2 ? { width: size[0], height: size[1], margin: '0px' }
                                       : { format: system.args[3], orientation: 'portrait', margin: '1cm' };
}

if (system.args.length > 4) {
    page.zoomFactor = system.args[4];
}

page.open(address, function (status) {
    if (status !== 'success') {
        console.log('Unable to load the address!');
        phantom.exit();
    }

    in_page_scripts.forEach(function(script) {
        page.injectJs(script);
    });

    body_margin = page.evaluate(function () {
        var body_element = document.getElementsByTagName('body')[0],
            body_style = window.getComputedStyle(body_element),
            body_margin =  {
                top:    body_style.getPropertyValue('margin-top'),
                right:  body_style.getPropertyValue('margin-right'),
                bottom: body_style.getPropertyValue('margin-bottom'),
                left:   body_style.getPropertyValue('margin-left'),
            };

        body_element.style.margin = 0;

        return body_margin;
    });

    Object.keys(body_margin).forEach(function(margin_location) {
        if (body_margin[margin_location] === "0px") {
            body_margin[margin_location] = paperSize.margin;
        }
    });
    paperSize.margin = body_margin;
    console.log(JSON.stringify(paperSize));
    page.paperSize = paperSize;

    window.setTimeout(function () {
        page.render(output);
        phantom.exit();
    }, 200);
});