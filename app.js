/* 5章確認問題
$(function(){
  $('.box1').slideDown(function(){
    $('.box1').css({
      'background-color': '#0000FF',
      'height': '100px'
    }).slideUp();
  });
});
*/

/* 6章
$(function(){
  $('.box1').on('click', function(){
    $('.box1').addClass('box1-ext');
  });
  $('.box1').mouseout(function(){
    $('.box1').removeClass('box1-ext');
  });
})
*/


/* 7章　this
$(function(){
  $('.box1').on('click', function(){
    $(this).slideUp();
  });
});
*/

$(function(){
  $('button').on('click', function(){
    $('ul').children().css('color','red');
  });
});