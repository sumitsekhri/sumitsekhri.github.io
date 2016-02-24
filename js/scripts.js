$(document).ready(function(){
  $('.overlay').on('mouseenter', function(){
    $(this).find('button').fadeIn();
    $(this).find('img').addClass('dark');
  }).on('mouseleave', function(){
    $(this).find('button').fadeOut();
    $(this).find('img').removeClass('dark');
  });

  $('.overlay').on('click',function(){
    $(this).parent('.showcase').toggleClass('expand-showcase');
  });
  // var element_to_scroll_to = $('.my-element-class')[0];
  //
  // element_to_scroll_to.scrollIntoView();

  $(function() {
    $( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
  });
});
