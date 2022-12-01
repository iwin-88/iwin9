$('.owl-carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 2500, //2500ms = 25s;
    autoplayHoverPause: true,
    loop:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            // nav:true
        },
        600:{
            items:1,
            // nav:false
        },
        1000:{
            items:1,
            // nav:true,
        }
    }
});

function openNav(){
    document.getElementById('nav').style.width = '50%';
}
function closeNav(){
    document.getElementById('nav').style.width = '0%';
}