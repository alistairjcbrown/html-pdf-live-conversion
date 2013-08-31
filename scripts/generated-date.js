/*
 * Looks for the first element with class "generated-at".
 * Sets inner HTML of the element with generated at message.
 */
(function() {

    var last_modified_elements = document.querySelector(".generated-at"),
        date   = new Date(),
        year   = date.getFullYear(),
        month  = ('0' + (date.getMonth() + 1)).slice(-2),
        day    = ('0' + date.getDate()).slice(-2),
        hour   = ('0' + date.getHours()).slice(-2),
        minute = ('0' + date.getMinutes()).slice(-2),
        generated_date = year + '-' + month + '-' + day + ' ' + hour + ':' + minute,
        reference_span_open  = "<span data-type=\"reference\" data-href=\"http://git.io/GJwn1g\" data-title=\"Github /alistairjcbrown: HTML to PDF live conversion\">",
        reference_span_close = " </span>";

    if (last_modified_elements === null) {
        return false;
    }

    last_modified_elements.innerHTML = reference_span_open + "Document generated at " + generated_date + reference_span_close;

    return true;
})();