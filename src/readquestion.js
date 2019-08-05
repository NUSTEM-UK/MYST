$(".readquestion").click(function() {
    speechSynthesis.cancel();
    var text = $(".survey h2").html();
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
});