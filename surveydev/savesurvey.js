//JQuery function call on click of the button to save the survey
$("#save").click(function() {
    let surveyname = $("#newsurveyname").val();
    let surveyurl = $("#newsurveyurl").val();
    let questionslist = document.querySelectorAll(".questions .question");
    console.log(surveyname);
    console.log(surveyurl);
    console.log(questionslist);
});