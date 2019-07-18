window.onload = function() {
    instanciatealphabet();
};

function instanciatealphabet() {
    for (i = 97; i < 123; i++) {
        console.log(String.fromCharCode(i));

        $("fieldset.alphabet").append("<input type='button' value='" + String.fromCharCode(i) + "' class='alphachar'></input>");
    }
}