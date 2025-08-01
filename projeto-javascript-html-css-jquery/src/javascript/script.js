$(document).ready(function () {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-bars fa-xmark');
    });

    const sections = $('section');
    const navItems = $('.nav-item'); // Corrigido

    $(window).on('scroll', function () {
        const header = $('header');
        let activeSectionIndex = 0;

        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.5)'); // Corrigido
        }

        sections.each(function (i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96; // ou header.outerHeight();
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        });

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });


    
    ScrollReveal().reveal('.shape', {
        origin: 'right',           // A animação começa da direita
        distance: '30px',          // Move 30px durante a transição
        duration: 1000,            // Dura 1000ms (1 segundo)
        delay: 0,                  // Inicia imediatamente
        easing: 'ease-in-out',     // Curva de velocidade suave
        // reset: false               // Não repete a animação ao voltar o scroll
    });

    // Anima o banner (imagem principal da seção #home)
    ScrollReveal().reveal('#banner', {
        origin: 'right',           // Vem da direita
        distance: '50px',          // Move 50px durante a animação
        duration: 1200,            // Leva 1.2 segundos
        delay: 200,                // Começa 200ms depois da anterior
        easing: 'ease-in-out',
        // reset: false
    });

    // Anima a chamada para ação (texto e botões do #cta)
    ScrollReveal().reveal('#cta', {
        origin: 'left',            // Vem da esquerda (contraste com o banner)
        distance: '50px',
        duration: 1000,
        delay: 400,                // Começa 400ms depois da primeira (ou seja, depois de banner)
        easing: 'ease-in-out',
        // reset: false
    });
    

});
