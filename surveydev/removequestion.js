//JQuery function call on click of next button to remove question
$("form").on("click", ".removequestion", function() {
    $(this).parent().remove();
});