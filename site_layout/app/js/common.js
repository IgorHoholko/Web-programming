$(document).ready(function(){

	
    var show = true;
    var countbox = "#blocks_fun_facts";


    $(window).on("scroll load resize", function(){

//////////////---------facts---------------//////////////

        if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height();        // Высота окна браузера
        var d_height = $(document).height();      // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками

        if(w_top + 600 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
        	$(".spincrement").spincrement({
        		thousandSeparator: "",
        		duration: 2800
        	});
        	show = false;
        }
    });
//////////////****************************////////////////

var flag_header_one= true;
var flag_header_two = false;

$(window).on("scroll load resize", function(){
    var lenghtFromStartToHed= $('.top_hed').offset().top;


    if(lenghtFromStartToHed>150 && flag_header_one){
       $('.top_hed, .menu_mobile').animate({backgroundColor: '#1ea78d'}, 600);
       console.log(lenghtFromStartToHed);
       flag_header_one=false;
       flag_header_two=true;
   }

   if(lenghtFromStartToHed<150&& flag_header_two){

    $('.top_hed, .menu_mobile').animate({backgroundColor: 'rgba(16, 22, 54, 0.2)'}, 600);
    console.log(lenghtFromStartToHed);
    flag_header_one=true;
    flag_header_two=false;
}
});


$('.icon-menu').click(function() {
    $('.menu_mobile').animate({ 
        'height': '180px' 
    }, 200);   
    $('.icon_close').css('display', 'block');
    $('.icon-menu').css('display', 'none');

});

$('.icon_close').click(function() { 
    $('.menu_mobile').animate({ 
        'height': '0px'  
    }, 200); 
    $('.icon_close').css('display', 'none');
    $('.icon-menu').css('display', 'block');
});


$('a[href^="#"]').click(function () { 
 var  attr_href = $(this).attr("href");

 var elementClick="div[name=\"" + attr_href +"\"]";
 console.log(elementClick);
 var  lenght = $(elementClick).offset().top;

 $('body').animate( { scrollTop: lenght }, 1000 );
 console.log($(elementClick).offset().top);
});




///////////////////////////////////

var mass_phone = ["url(../img/header/hed.png)", "url(../img/header/s.png)", "../img/header/hed.png"];

$('.dot_hed').on('click' , function(){
    $('.dot_hed').removeClass('active');
    var dots_hed= $(this);
    dots_hed.addClass('active');
    // $('header').css({
    //     'background-image': mass_phone[1]
    // });
    
});

});

