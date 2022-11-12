$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("add");
        } else {
            $('.navbar').removeClass("add");
        }
    })

    $('.nav_btn').click(function () {
        $('.nav_content').toggleClass("active");
        $('.nav_btn i').toggleClass("active");
    })
})

let loader = document.querySelector('.pre_loader_div');
window.addEventListener('load', function () {
    // loader.style.display = 'none';
    loader.parentElement.removeChild(loader);
});

$(document).ready(function () {

    var typed = new Typed(".i_am", {
        strings: ["Human.", "Student.", "Designer."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
        cursorChar: " "
    });

});

function popuptog() {
    document.getElementById("pop_id").classList.toggle("active");
}