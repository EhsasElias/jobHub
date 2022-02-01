// $(document).ready(function() {
//     $(".menu-icon").on("click", function() {
//           $("nav ul").toggleClass("showing");
//     });
// });

// // Scrolling Effect

// $(window).on("scroll", function() {
//     if($(window).scrollTop()) {
//           $('nav').addClass('black');
//     }

//     else {
//           $('nav').removeClass('black');
//     }
// })

var _bgColor = document.getElementById('nav');
var _signIn = document.getElementById('signIn');
window.addEventListener('scroll', () => {

    if (window.scrollY < 50) {
        _bgColor.classList.remove('bg-white');
        _bgColor.classList.remove('shadow-lg');
        _signIn.classList.add('border-primary');
        _signIn.classList.add('text-primary');
        _signIn.classList.remove('border-dark');
        _signIn.classList.remove('text-dark');
    }
    else if (window.scrollY >= 50) {
        _bgColor.classList.add('bg-white');
        _bgColor.classList.add('shadow-lg');
        _signIn.classList.add('border-dark');
        _signIn.classList.add('text-dark');
        _signIn.classList.remove('border-primary');
        _signIn.classList.remove('text-primary');
    }

});
$(document).ready(function () {
$('#categories').on('change', function () {
    $('#com-name').empty();

    if ($("#categories").val() == "com") { $("#com-name").append("<option>IOM</option><option>UN</option>").fadeIn(2000); }
    else if ($("#categories").val() == "city") { $("#com-name").append("<option>Sanaa</option><option>Taiz</option><option>Hadermoot</option>").fadeIn(2000); }

});
});
