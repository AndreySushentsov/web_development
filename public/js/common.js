$(document).ready(function(){

////////////// задаем сайдбару ширину родителя///////////////
    var parentWidth = ($(".side_bar").parent().innerWidth())-30;   
    $('.side_bar').css({'width' : parentWidth});

    $(window).resize(function(){
        parentWidth = ($(".side_bar").parent().innerWidth())-30; 
        $('.side_bar').css({'width' : parentWidth});
    });

///////////// фиксированное верхнее меню /////////////////
    $(window).scroll(function() {

        var scrollVal = $(this).scrollTop();
        
        if ( scrollVal > 60) {
            $('#top_menu').addClass("navbar-fixed-top");
            $('body').css({"margin-top":"50px"});
        } else {
            $('#top_menu').removeClass("navbar-fixed-top");
            $('body').css({"margin-top":"0"});
        }

    });

/////////////////// плавный скролл //////////////////////
    $("#scrollSpy").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;
        
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });

///////////////////// подсказки //////////////////////
    $('[data-toggle="tooltip"]').tooltip();


/////////////////// модальные окна /////////////////////
    $('#registration').on('click',function(){
        $('#regModal').modal('toggle');        
    });
    $('#authorisation').on('click',function(){
        $('#authModal').modal('toggle');        
    });

    //////////////// кнопкти слайдера /////////////////
    $('.carousel_button').on('click',function(){
        $('#regModal').modal('toggle');
    });

////////////////////// фиксированный сайдбар (student_page) /////////////////////////////

    ////////////////////// высота блока profile_menu /////////////////////////
    var wh = $(window).height();
    $('.profile_menu').css({'height':wh});

    ////////////////// ширина блока profile_menu /////////////////////
    var pWidth = $(".profile_menu").parent().innerWidth();
    $('.profile_menu').css({'width' : pWidth});

    $(window).resize(function(){
        pWidth = $(".profile_menu").parent().innerWidth(); 
        $('.profile_menu').css({'width' : pWidth});
    });


    $(window).scroll(function() {

        var scrollVal = $(this).scrollTop(); 

        if ( scrollVal > 60) {
            $('.profile_menu').css({"position":"fixed","margin-top":"-60px"});
        } else {
            $('.profile_menu').css({"position":"relative","margin-top":"0"});
        }

    });

////////////////// меню профиля пользователя ////////////////////
    $('#open_close_menu').on('click',function(){
        var wh = $(window).height();
        $('#profile_menu').css({'display':'block','position':'fixed','height':wh,'z-index':'1'});
        $('#profile_menu').animate({'width':'60%'});
    });
    $('.closebtn').on('click',function(){
        $('#profile_menu').css({'display':'none','width':'0'});
    });

////////////////// скрыть показать блок "меню профиля пользователя"////////////////////////
    $('#show_user_profile_menu').on('click',function(){
        $('#user_profile_menu').fadeToggle('fast');
    });
}); 



