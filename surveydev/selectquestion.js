//JQuery function call on click of next button to create question type specific elements
$("form").on("change", ".questiontype", function() {
    let value = $("option:selected", this).val();
    let question = $(this).parent();
    let code = "";

    switch (value) {
        case "leterselect":
            code = "<article id='selectedquestion'> <input type='text' placeholder='Question...' name='questionname' class='questionname'> <textarea type='text' placeholder='Subtext...' name='questionsubtext' class='questionsubtext'></textarea> </article>";
            break;
        case "sliderrange":
            code = "<article id='selectedquestion'> <input type='text' placeholder='Question...' name='questionname' class='questionname'> <textarea type='text' placeholder='Subtext...' name='questionsubtext' class='questionsubtext'></textarea><div class='datapoints'> <input type='text' placeholder='1st value' name='value1' class='questiondp'> <input type='text' placeholder='2nd value' name='value2' class='questiondp'> <input type='text' placeholder='3rd value' name='value3' class='questiondp'> </div> <input type='button' value='+' class='adddatapoint' id='question1'> </article>";
            break;
        case "buttonselect":
            code = "<article id='selectedquestion'> <input type='text' placeholder='Question...' name='questionname' class='questionname'> <textarea type='text' placeholder='Subtext...' name='questionsubtext' class='questionsubtext'></textarea><div class='datapoints'> <input type='text' placeholder='1st value' name='value1' class='questiondp'> <input type='text' placeholder='2nd value' name='value2' class='questiondp'> <input type='text' placeholder='3rd value' name='value3' class='questiondp'> </div> <input type='button' value='+' class='adddatapoint' id='question1'> </article>";
            break;
        case "textenter":
            code = "<article id='selectedquestion'> <input type='text' placeholder='Question...' name='questionname' class='questionname'> <textarea type='text' placeholder='Subtext...' name='questionsubtext' class='questionsubtext'></textarea> </article>";
            break;
    }

    question.find("article").remove();

    question.append(code);
});