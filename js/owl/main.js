$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3 // até 600 px vai ter 3 itens na pagina
        },
        1000:{
            items:5 // até 1000px vai ter 5 itens na página
        }
    }
})
// loop: true = permite o menu de filmes infinito.
// nav: true = deixa duas setas para navegar no menu. Nesse caso deixei false pois fica melhor