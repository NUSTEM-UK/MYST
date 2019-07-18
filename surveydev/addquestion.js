//JQuery function call on click of the button to create new question
$("#addquestion").click(function() {
    let questions = document.querySelectorAll(".questions .question");
    let nextq = questions.length + 1;

    if (nextq < 11) {
        $(".questions").append("<section class='question'> <select name='questiontype' class='questiontype'> <option selected disabled>Select a question type...</option> <option value='leterselect'>Alphabet select</option> <option value='sliderrange'>Slider question</option> <option value='buttonselect'>Button select</option> <option value='textenter'>Text question</option> </select> <input type='button' value='Remove question' class='removequestion'> </section>");
    } else {
        alert("Too many questions");
    }
});