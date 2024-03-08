// script.js
$(document).ready(function() {
    // Smooth scrolling for navigation links
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });

    // Add active class to navigation items when scrolling
    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();

        // Assign active class to nav links while scrolling
        $('.section').each(function(i) {
            if ($(this).position().top <= scrollDistance + 100) {
                $('.navbar-nav a.active').removeClass('active');
                $('.navbar-nav a').eq(i).addClass('active');
            }
        });
    }).scroll();
});
// script.js
$(document).ready(function () {
    // Toggle comment expansion
    $(".testimonial .comment").click(function () {
        $(this).toggleClass("expanded");
    });

    // Add hover effect to testimonials
    $(".testimonial").hover(
        function () {
            $(this).css({
                backgroundColor: "#f0f0f0", // Change background color on hover
                color: "#fff" // Change text color on hover
            });
        },
        function () {
            $(this).css({
                backgroundColor: "", // Revert background color
                color: "" // Revert text color
            });
        }
    );
});
