/*
 * Looks for an element with class "generated-at"
 * Sets inner HTML of the element with:
 *   Generated from source on YYY-MM-DD HH:MM
 */
(function() {
    var last_modified_elements = document.querySelectorAll(".generated-at"),
        date   = new Date(),
        year   = date.getFullYear(),
        month  = ('0' + (date.getMonth() + 1)).slice(-2),
        day    = ('0' + date.getDate()).slice(-2),
        hour   = ('0' + date.getHours()).slice(-2),
        minute = ('0' + date.getMinutes()).slice(-2),
        generated_date;

    if (last_modified_elements.length !== 0) {
        generated_date = year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
        last_modified_elements[0].innerHTML = "Document generated at " + generated_date;
    }
})();