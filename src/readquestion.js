$(".readquestion").click(function() {
    speechSynthesis.cancel();
    var text = $(".survey").find("h2").html();
    speechSynthesis.speak(new SpeechSynthesisUtterance(text));
    alert(text);
});