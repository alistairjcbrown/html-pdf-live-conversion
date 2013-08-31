/*
 * Looks for the first element with class "qr-code-value" and uses element text to create QR code.
 * Puts QR code in the first element with class "qr-code".
 */
(function() {

    var qr_code_value    = document.querySelector(".qr-code-value"),
        qr_code_location = document.querySelector(".qr-code");

    if (qr_code_value === null || qr_code_location === null) {
        return false;
    }

    new QRCode(
        qr_code_location,
        {
            text: qr_code_value.textContent.trim(),
            width: 64,
            height: 64,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.M
        }
    );

    return true;

})();