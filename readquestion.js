window.onload = function() {
    var text = $(".survey h2").html();
    readquestion(text);
};

function readquestion(text) {
    artyom.say(text);
}