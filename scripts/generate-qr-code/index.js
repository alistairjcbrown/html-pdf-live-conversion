/*
 * Looks for an element with class "qr-code-value" and uses text data to create QR code
 * Puts QR code in element with class "qr-code"
 */
(function() {

    var qr_code_value = document.querySelectorAll(".qr-code-value")[0],
        qr_code_location = document.querySelectorAll(".qr-code")[0];

    if (typeof qr_code_value === "undefined" || typeof qr_code_location === "undefined") {
        return false;
    }

    new QRCode(
        qr_code_location,
        {
            text: qr_code_value.textContent,
            width: 64,
            height: 64,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        }
    );

})();