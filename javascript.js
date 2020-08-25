$('.owl-carousel').owlCarousel({
    loop: true, /*se tem loop ou nao*/
    margin: 10, /*margim da tela*/
    nav: false, /* estilo da navegacao*/
    responsive: { /*responsividade*/
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})