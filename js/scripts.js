$(document).ready(function(){
  $('.overlay').on('mouseenter', function(){
    $(this).find('button').fadeIn();
    $(this).find('img').addClass('dark');
  }).on('mouseleave', function(){
    $(this).find('button').fadeOut();
    $(this).find('img').removeClass('dark');
  });

  $('.overlay').on('click',function(){
    console.log("yo");
    $(this).parent('.project').toggleClass('expand-project');
    console.log("second step");
  });
  // var element_to_scroll_to = $('.my-element-class')[0];
  //
  // element_to_scroll_to.scrollIntoView();
});
