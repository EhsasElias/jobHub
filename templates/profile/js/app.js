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
        $('.selected').show();

        $('#com-name').empty();
        if ($("#categories").val() == "com") {
            $("#com-name").append("<option>IOM</option><option>UN</option> <option>ADRA</option>").fadeIn(2000);
            $('.selected').hide();
            $('.selected:contains("IOM")').show();
            $('#com-name').on('change', function () {
                if ($("#com-name").val() == "ADRA") {
                    $('.selected').hide();
                    $('.selected:contains("ADRA")').show();

                }
                else if ($("#com-name").val() == "UN") {
                    $('.selected').hide();
                    $('.selected:contains("UN")').show();

                }
                else {
                    $('.selected').hide();
                    $('.selected:contains("IOM")').show();
                }
            });

        }
        else if ($("#categories").val() == "city") {
            $("#com-name").append("<option>Sanaa</option><option>Taiz</option><option>Hadramoot</option>").fadeIn(2000);
            $('.selected').hide();
            $('.selected:contains("Sanaa")').show();
            $('#com-name').on('change', function () {
                if ($("#com-name").val() == "Taiz") {
                    $('.selected').hide();
                    $('.selected:contains("Taiz")').show();

                }
                else if ($("#com-name").val() == "Hadramoot") {
                    $('.selected').hide();
                    $('.selected:contains("Hadramoot")').show();


                }
                else {
                    $('.selected').hide();
                    $('.selected:contains("Sanaa")').show();
                }
            });

        }

    });
});

$("#search").on('input', function () {
    var word = $('#search').val().toLowerCase();
    $(".selected").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(word) > -1);
    });
});

$("#key-search").on('input', function () {
    var word = $('#key-search').val().toLowerCase();
    $(".cards div").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(word) > -1);
    });
});
