window.onload = function() {
    instanciateslider();
};

function instanciateslider() {
    var sliderrange = [0, 5];
    var mid = sliderrange[0] + ((sliderrange[1] - sliderrange[0]) / 2);
    $("fieldset.selectslider").append("<input type='range' min='0' max='10' value='5' class='slider'></input>");
    $("fieldset.selectslider").append("<label for='happy' class='pull-left'>" + sliderrange[0] + "</label>");
    $("fieldset.selectslider").append("<label for='' class='pull-right'>" + sliderrange[1] + "</label>");
}

$("form").on("change", ".slider", function() {
    var text = $(this).val();
    $('.sliderText').html = text;
});