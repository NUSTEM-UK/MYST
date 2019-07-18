//JQuery function call on click of the button to create new data point
$("form").on("click", ".adddatapoint", function() {
    let questionselectedtype = $(this).parent();
    let datapoints = questionselectedtype.find(".datapoints .questiondp");
    let nextdp = datapoints.length + 1;

    if (nextdp < 11) {
        questionselectedtype.find(".datapoints").append("<input type='text' placeholder='New value' name='value" + nextdp + "' class='questiondp'>");
    } else {
        alert("Too many data points");
    }
});