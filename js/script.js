
//Скрыть PopUp при загрузке страницы  
PopUpHide();

  $(window).on('load', function () {
    $preloader = $('.transition-loader'),
      $loader = $preloader.find('.transition-loader-inner');
    $loader.fadeOut();
    $preloader.delay(350).fadeOut('slow');
  });

//Настройки для менюшки
$('#menu').slicknav({
    label: '',
    duration: 700,
    closeOnClick: true
});
$('.slicknav_menu').wrap('<div class="item_nav">');
$('.slicknav_menu').wrap('<div class="container">');
$('.slicknav_menu ul li').wrapAll('<div class="box">');
$('.slicknav_btn').click(
    function () {
        $('.item_nav').toggleClass('open_item_nav');
    });



//Изменение цветов фона блока how-we-work при размерах экрана больше 768
$('.list-group-item').click(function () {
    if (document.documentElement.clientWidth > 768) {
        var id = "list-" + $(this).attr("aria-controls");
        var div = $(".how-we-work");
        if (id == 'list-products') {
            div.css('background', 'linear-gradient(to right, #F7E5FF, #F7E5FF 50%, #8DC8FF 50%, #8DC8FF 100%)');
        } else if (id == 'list-aim') {
            div.css('background', 'linear-gradient(to right, #AFFFBC, #AFFFBC 50%, #8DC8FF 50%, #8DC8FF 100%)');
        } else if (id == 'list-target') {
            div.css('background', 'linear-gradient(to right, #FFD6AF, #FFD6AF 50%, #8DC8FF 50%, #8DC8FF 100%)');
        } else if (id == 'list-auditory') {
            div.css('background', 'linear-gradient(to right, #AFCAFF, #AFCAFF 50%, #8DC8FF 50%, #8DC8FF 100%)');
        } else if (id == 'list-strategy') {
            div.css('background', 'linear-gradient(to right, #FFD4D4, #FFD4D4 50%, #8DC8FF 50%, #8DC8FF 100%)');
        } else if (id == 'list-media') {
            div.css('background', 'linear-gradient(to right, #DFD4FF, #DFD4FF 50%, #8DC8FF 50%, #8DC8FF 100%)');
        }
    }

});

$(document).ready(function () {
    //каруселька класса how-we-work и jobs при размерах экрана меньше 768
    $('.slider').slick({
        dots: true,
        infinite: false
    });


    //Изменение цветов фона блока how-we-work при размерах экрана меньше 768
    if (document.documentElement.clientWidth <= 768) {
        document.addEventListener("touchend", function () {
            setTimeout(function () {
                if ($('.slick-active button').attr('id') == 'slick-slide-control01') {
                    $(".how-we-work, .jobs").css('background', '#F7E5FF');
                } else if ($('.slick-active button').attr('id') == 'slick-slide-control02') {
                    $(".how-we-work").css('background', '#AFFFBC');
                } else if ($('.slick-active button').attr('id') == 'slick-slide-control03') {
                    $(".how-we-work").css('background', '#FFD6AF');
                } else if ($('.slick-active button').attr('id') == 'slick-slide-control04') {
                    $(".how-we-work").css('background', '#AFCAFF');
                } else if ($('.slick-active button').attr('id') == 'slick-slide-control05') {
                    $(".how-we-work").css('background', '#FFD4D4');
                } else if ($('.slick-active button').attr('id') == 'slick-slide-control06') {
                    $(".how-we-work").css('background', '#DFD4FF');
                } else {
                    $(".how-we-work").css('background', '#8DC8FF');
                }
            }, 400);
        })
    }

    //Изменение цветов фона блока jobs при размерах экрана меньше 768
    if (document.documentElement.clientWidth <= 768) {
        if ($('.jobs .slick-active button').attr('id') == 'slick-slide-control10') {
            $(".jobs").css('background', '#C8E4FF')
        }
        document.addEventListener("touchend", function () {
            setTimeout(function () {
                if ($('.jobs .slick-active button').attr('id') == 'slick-slide-control10') {
                    $(".jobs").css('background', '#C8E4FF');
                } else if ($('.jobs .slick-active button').attr('id') == 'slick-slide-control11') {
                    $(".jobs").css('background', '#F7E6FF');
                } else if ($('.jobs .slick-active button').attr('id') == 'slick-slide-control12') {
                    $(".jobs").css('background', '#FFD6AF');
                } else if ($('.jobs .slick-active button').attr('id') == 'slick-slide-control13') {
                    $(".jobs").css('background', '#FFD4D4');
                } else if ($('.jobs .slick-active button').attr('id') == 'slick-slide-control14') {
                    $(".jobs").css('background', '#AFFFBC');
                } else if ($('.jobs .slick-active button').attr('id') == 'slick-slide-control15') {
                    $(".jobs").css('background', '#F7E5FF');
                }
            }, 400);
        })
    }
});

  //Скрипт работы печатания и удаления предложений в топе
  new TypeIt('.cpa',{
      speed: 60,
      loop:true,
      nextStringDelay: 2500
  })
  .pause(2500)
  .delete()
  .type('Настроим и запустим PUSH рекламу')
  .pause(2500)
  .delete()
  .type('Разработаем сайт любой сложности')
  .pause(2500)
  .delete()
  .type('Продвинем в социальных сетях')
  .pause(2500)
  .delete()
  .type('Разработаем брендинг и упаковку')
  .pause(2500)
  .delete()
  .type('SEO оптимизируем Ваш сайт')
  .pause(2500)
  .delete()
  .type('Настроим контекстную рекламу')
  .pause(2500)
  .delete()
  .go();


//Изменение цветов фона блока jobs при размерах экрана больше 768
$('.list-group-item').click(function () {
    var id = "list-" + $(this).attr("aria-controls");
    if (id == 'list-designer') {
        $(".jobs").css('background', 'linear-gradient(to right, #8DC8FF, #8DC8FF 40%, #C8E4FF 40%, #C8E4FF 100%)');
    } else if (id == 'list-coder') {
        $(".jobs").css('background', 'linear-gradient(to right, #8DC8FF, #8DC8FF 40%, #F7E6FF 40%, #F7E6FF 100%)');
    } else if (id == 'list-smm') {
        $(".jobs").css('background', 'linear-gradient(to right, #8DC8FF, #8DC8FF 40%, #FFD6AF 40%, #FFD6AF 100%)');
    } else if (id == 'list-seo') {
        $(".jobs").css('background', 'linear-gradient(to right, #8DC8FF, #8DC8FF 40%, #FFD4D4 40%, #FFD4D4 100%)');
    } else if (id == 'list-salemanager') {
        $(".jobs").css('background', 'linear-gradient(to right, #8DC8FF, #8DC8FF 40%, #AFFFBC 40%, #AFFFBC 100%)');
    } else if (id == 'list-programmer') {
        $(".jobs").css('background', 'linear-gradient(to right, #8DC8FF, #8DC8FF 40%, #F7E5FF 40%, #F7E5FF 100%)');
    }
});



//Скрипт отображения PopUp
$('.form, .form2, .form3').click(function (e) {
    _this = this;
    e.preventDefault();
    setTimeout(function () {
        PopUpShow(_this);
    }, 10);

});

//Функция открытия формы
function PopUpShow(obj) {
    if ($(obj).attr('class') == 'btn-sales form2') {
        $(".pop-up-offer").show();
    } else if($(obj).attr('class') == 'btn-jobs form3'){
        $(".pop-up-jobs").show();
    } else { $("#pop-up").show() }
}
//Функция скрытия PopUp
function PopUpHide() {
    $(".pop-up, .pop-up-offer, .pop-up-jobs").hide();
}

//Закрытие формы при клике за его областью
$(document).click(function (e) {
    if ($('.pop-up').css('display') == 'flex' |
        $('.pop-up-offer').css('display') == 'flex' |
        $('.pop-up-jobs').css('display') == 'flex') {
        var div = $(".pop-up-content");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            PopUpHide();
        }
    }
});


//маска набора номера телефона в форме
$(function () {
    $(".tel-input").mask("998(00) 000-0000");
});


//Скрипт работы скроллинга при нажатии менюшки
$(".slicknav_nav a").click(function scrollToLink(e) {
    e.preventDefault();
    aim = $(this).attr("href");
    console.log(aim);
    scroll = $(aim).offset().top;
    $("body, html").scrollTop((scroll - 40));
});

//скрипт работы скроллинга при нажатии кнопки наверх в footer`e
$('.ontop').click(function (e) {
    e.preventDefault();
    $("body, html").animate({
        scrollTop: 0
    })
})







