$(".readquestion").click(function() {
    var text = $(".survey h2").html();
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
});