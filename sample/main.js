//scrolls
$(document).on("click", "#learnBtn", function (e) {
    e.preventDefault();
    $.scrollTo('#aboutCont', 2000);
});

$(document).on("click", "#workBtn", function (e) {
    e.preventDefault()
    $.scrollTo('#projCont', 4000);
})

$(document).on("click", "#contBtn", function (e) {
    e.preventDefault()
    $.scrollTo('.contactCont', 2000);
})

//when doc loads, fade in top title, map css grid
$(document).ready(function () {
    gridMapper()
    $(".title").fadeIn(2000);
    $("#btnCont").fadeIn(4000);
});

//fades / remapping triggered on scroll
$(window).on("load", function () {
    $(window).scroll(function () {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();

        $(".fade").each(function () {

            var objectBottom = $(this).offset().top + $(this).outerHeight();

            if (objectBottom < windowBottom) {
                if ($(this).css("opacity") == 0) {
                    $(this).fadeTo(1500, 1);
                }
            } else {
                if ($(this).css("opacity") == 1) {
                    $(this).fadeTo(2000, 0);
                }
            }
        });

        $(".card").each(function () {

            var cardTop = $("#projTitle").offset().top + $(this).outerHeight();
            if (cardTop < windowBottom) {

                gridMapper()
                if ($(this).css("opacity") == 0) {
                    fadeTime = Math.ceil(Math.random() * 2000) + 1000;
                    $(this).fadeTo(fadeTime, 1);
                    fadeTime++
                }
            } else {

                if ($(this).css("opacity") == 1) {
                    $(this).fadeTo(1000, 0);
                }
            }
        });
    }).scroll();
});

//maps cards on css grid
function gridMapper() {

    function isOverflown(element) {
        return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
    }

    $(".card").each(function () {
        var span = 0
        while (isOverflown(document.getElementById(this.id))) {
            span++
            $(this).css("grid-row-end", " span " + span)
        };
    })
}