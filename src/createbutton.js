window.onload = function() {
    instanciatebuttons();
};

function instanciatebuttons() {
    var btnlist = ['val-1', 'val-2', 'val-3', 'val-4', 'val-5'];

    for (var val in btnlist) {
        $("fieldset.buttons").append("<input type='button' value='" + btnlist[val] + "' class='selectorbutton'></input>");
    }
}