//JQuery function call on click of the button to remove question
$("form").on("click", ".removequestion", function() {
    $(this).parent().remove();
});