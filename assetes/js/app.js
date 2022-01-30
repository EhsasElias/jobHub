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
window.addEventListener('scroll' ,()=>{
    if(window.scrollY < 50){
        _bgColor.classList.remove('bg-white');
        _bgColor.classList.remove('shadow-lg');
        _signIn.classList.add('btn-outline-light');
        _signIn.classList.add('text-light');
        _signIn.classList.remove('btn-outline-dark');
        _signIn.classList.remove('text-dark');
    }
   else if(window.scrollY >= 50){
        _bgColor.classList.add('bg-white');
        _bgColor.classList.add('shadow-lg');
        _signIn.classList.add('btn-outline-dark');
        _signIn.classList.add('text-dark');
        _signIn.classList.remove('btn-outline-light');
        _signIn.classList.remove('text-light');
    }
    
     
   
    
})