/*
 * Looks for span elements with data attribute type which has value "reference"
 * Reads data attributes href and title to create reference. Will add a numbered note at the end of the span.
 * Looks for the first element with class "footnote-references" and adds in reference list.
 * Notes: if the element with the reference span has a small text size, the <sup> element will not be used.
 */
(function() {
    var reference_points = document.querySelectorAll("span[data-type='reference']"),
        reference_footnote = document.querySelector(".footnote-references"),
        references = [],
        reference_list_text = "";

    Array.prototype.slice.call(reference_points).forEach(function(reference_point) {
        var reference_text = "",
            reference_title = reference_point.getAttribute('data-title'),
            reference_href = reference_point.getAttribute('data-href'),
            reference_point_size,
            sup_open  = "<sup>",
            sup_close = "</sup>";

        if (reference_title !== null) {
            reference_text += "&ldquo;" + reference_title + "&rdquo;";
        }

        if (reference_title !== null && reference_href !== null) {
            reference_text += " [ ";
        }

        if (reference_href !== null) {
            reference_text += "<span class=\"link\">" + reference_href + "</span>";
        }

        if (reference_title !== null && reference_href !== null) {
            reference_text += " ]";
        }

        if (reference_text !== "") {
            references.push(reference_text);
            reference_point_size = parseInt(window.getComputedStyle(reference_point).getPropertyValue("font-size"));
            if (isNaN(reference_point_size) || reference_point_size < 16) {
                sup_open = " ";
                sup_close = "";
            }
            reference_point.innerHTML = reference_point.innerHTML.trim() + sup_open + "[" + references.length + "]" + sup_close;
        }
    });

    if (reference_footnote !== null) {
        reference_list_text += "<ul>";
        references.forEach(function(reference, index) {
            reference_list_text += "<li class=\"footnote-reference-"+(index+1)+"\">[" + (index+1) + "] - " + reference + "</li>";
        });
        reference_list_text += "</ul>";

        reference_footnote.innerHTML = reference_list_text;
    }

})();