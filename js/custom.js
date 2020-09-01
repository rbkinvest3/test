$(function () {

    var max = $("#param").attr("varmax")

    $('.money-count').animationCounter({
        start: 0,
        end: max,
        step: 974,
        delay: 10
    });

});