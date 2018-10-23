var a;

$(".play").on("click", function() {
 
 

  if (a==$(this).attr( 'value' )) {
      document.getElementById('player').play();
      return;
}
$('.conteiner_trak').removeClass('active');
$(this).parent().addClass('active');
$('.pulse').removeClass('pulse');
$('.conteiner_trak').removeClass('active_conteiner_trak');
$(this).addClass('pulse');
a = $(this).attr( 'value' );
document.getElementById('player').src=a;
document.getElementById('player').play();
// var gg= $(this)
//  setTimeout(function() {
// gg.css({
//     'z-index':'999',
//     'position': 'absolute',
//     'height':'50%',
//     'width':'50%',
//     'top': '-120px',
//     'left': '27%',
//     'background-image': 'url(img/r.png)',
//     'background-repeat': 'no-repeat',
//        'background-size': 'cover',
// });

//  $('.fon, .s, .ww, .pet, .s2, .per').css('display','block');
// }, 0);//29100
 });

$(".stop").on("click", function() {
 $('.pulse').removeClass('pulse');
 document.getElementById('player').pause();



});

