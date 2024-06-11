//codigo slider
$('.slider-container').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    prevArrow: '<i class="fas btn-prev">&lt;</i>', // Ícone Font Awesome para seta esquerda
    nextArrow: '<i class="fas btn-next">&gt;</i>',
});