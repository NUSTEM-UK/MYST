window.onload = function() {
    instanciatetext();
};

function instanciatetext() {
    $("fieldset.textinput").append("<input type='text' class='text' required >");
}