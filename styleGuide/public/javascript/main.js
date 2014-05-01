$(document).ready(function(){

  $("pre").hide();

  $(".headings li").click(function(){
    $(this).find("pre").slideToggle();
  });

  $(".weights li").click(function(){
    $(this).find("pre").slideToggle();
  });

  $(".fonts li").click(function(){
    $(this).find("pre").slideToggle();
  });

  $(".colorLink").click(function(){
    $("html, body").animate({scrollTop: $('#color').offset().top }, 300);
  });

  $(".typographyLink").click(function(){
    $("html, body").animate({scrollTop: $('#typography').offset().top }, 300);
  });

  $(".logoLink").click(function(){
    $("body").animate({scrollTop: $('#logo').offset().top }, 300);
  });

});
